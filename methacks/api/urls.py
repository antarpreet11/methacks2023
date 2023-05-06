from django.urls import path
from .views import UsersView, main

urlpatterns = [
    path('home', UsersView.as_view()), 
    path('', main)
]
