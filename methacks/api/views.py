from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import UsersSerializer
from .models import Users
import cohere 
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
import umap
import altair as alt
from sklearn.metrics.pairwise import cosine_similarity
from annoy import AnnoyIndex
import warnings

warnings.filterwarnings('ignore')
pd.set_option('display.max_colwidth', None)

api_key = ''
co = cohere.Client(api_key)
headers = {"Authorization": f"Bearer {api_key}"}
# Create your views here.

class UsersView(generics.ListAPIView):
    queryset = Users.objects.all() # return all user objects
    serializer_class = UsersSerializer # converts into json 


# view list of all diff rooms

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

    # define Leetcode answer and written answer
    leetcode_answer = "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one."
    written_answer = "This problem requires us to find the single integer in an array of integers where every other integer appears twice."

    # preprocess answers
    leetcode_answer = preprocess(leetcode_answer)
    written_answer = preprocess(written_answer)

    #embeds = co.embed(texts=[leetcode_answer, written_answer], model='small', truncate='LEFT').embeddings
    # compare answers using text similarity

    text_similarity_endpoint = "https://api.cohere.ai/v1/text/similarity"
    payload = [leetcode_answer, written_answer]
    #response = requests.post(text_similarity_endpoint, headers=headers, json=payload)
    text1 = co.embed([leetcode_answer]).embeddings
    text2 = co.embed([written_answer]).embeddings
    #similarity_score = np.dot(text1, text2) / (np.linalg.norm(text1) * np.linalg.norm(text2))
# compare them
    def calculate_similarity(a, b):
        return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

    print(calculate_similarity(text1, text2)) # 0.9 - very similar!
    #print(np.dot(text1[0], text2[0]))
    return HttpResponse("Hello")


