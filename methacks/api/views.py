from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from .models import User
import cohere 
import json
from cohere.responses.classify import Example
import requests
import re
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import numpy as np
import re
import pandas as pd
from tqdm import tqdm
from datasets import load_dataset
import altair as alt
from sklearn.metrics.pairwise import cosine_similarity
# from annoy import AnnoyIndex
import warnings
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response

warnings.filterwarnings('ignore')
pd.set_option('display.max_colwidth', None)

api_key = 'jLrYwN9KWYAwtBqGyzuHsXtvwaPT4pAJSriC2oG3'
co = cohere.Client(api_key)
headers = {"Authorization": f"Bearer {api_key}"}
User = get_user_model()
# Create your views here.

# view list of all diff rooms
class problem_view(APIView):
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session):
            self.request.session.create()
        return HttpResponse("Hello")

def main(request):
    def preprocess(text):
        # convert to lowercase
        text = text.lower()
        # remove punctuation
        text = re.sub(r'[^\w\s]', '', text)
        # remove stop words
        stop_words = set(stopwords.words('english'))
        word_tokens = word_tokenize(text)
        filtered_text = [word for word in word_tokens if word not in stop_words]
        return " ".join(filtered_text)
    return HttpResponse("Hello")

@csrf_exempt
def signup_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if not username or not email or not password:
            return JsonResponse({'error': 'Missing required fields'}, status=400)

        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'Username already exists'}, status=400)

        user = User.objects.create_user(username=username, email=email, password=password)

        return JsonResponse({'message': 'User created successfully'})

    return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return JsonResponse({'error': 'Missing required fields'}, status=400)

        user = authenticate(request, username=username, password=password)

        if user is not None:
            # Authentication successful
            return JsonResponse({'message': 'Login successful'})
        else:
            # Authentication failed
            return JsonResponse({'error': 'Invalid credentials'}, status=401)

    return JsonResponse({'error': 'Invalid request method'}, status=405)