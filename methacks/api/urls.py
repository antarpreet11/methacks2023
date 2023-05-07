from django.urls import path
from .views import main, signup_view, login_view, getClassification

urlpatterns = [
    path('signup/', signup_view, name='signup'),
    path('login/', login_view, name='login'),
    path('classify/', getClassification, name='classify'),
    path('', main)
]
