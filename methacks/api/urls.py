from django.urls import path
from .views import main, signup_view, login_view, problem_view

urlpatterns = [
    path('signup/', signup_view, name='signup'),
    path('login/', login_view, name='login'),
    path('assess/', problem_view.as_view(), name='assess'),
]
