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

api_key = 'OZ5zCzwnOA8IYRGRA22RZbl0ZeyX9rKRPg1e8gYQ'
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

    payload = [leetcode_answer, written_answer]
    (text1, text2) = co.embed(payload).embeddings
    # compare them
    def calculate_similarity(a, b):
        return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

    o = calculate_similarity(text1, text2)
    print(o)
    '''
    embeds = co.embed(texts=[leetcode_answer, written_answer], model='small', truncate='LEFT').embeddings
    search_index = AnnoyIndex(embeds.shape[1], 'angular')
    for i in range(len(embeds)):
        search_index.add_item(i, embeds[i])
    search_index.build(10)
    search_index.save('test.ann')

    example_id = 92
    similar_item_ids = search_index.get_nns_by_item(example_id, 10, include_distances=True)
    results =zzzzzz
    
    doc_embeds = co.embed(texts=[leetcode_answer], model="small")
    query = [written_answer]
    query_embed=co.embed(text=[query], model="large")
    print(query_embed)
    '''
    return HttpResponse("Hello")


