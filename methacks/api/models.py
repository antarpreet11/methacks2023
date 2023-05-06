from django.db import models

# Create your models here.

class Users(models.Model):
    username = models.CharField(max_length=12, unique=True)
    password = models.CharField(max_length=20, unique=True)
    email = models.CharField(max_length=25, unique=True)

