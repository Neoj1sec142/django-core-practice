from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class Language(models.Model):
    lang = models.CharField(max_length=100)
    description = models.TextField()

class User(AbstractUser):
    prof_img = models.CharField(max_length=250)
    def __str__(self):
        return self.username

class Post(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    language_id = models.ForeignKey(Language, on_delete=models.CASCADE)
    name = models.CharField(max_length=256)
    description = models.TextField(default='Needs description', blank=True, null=True)
    img_url = models.URLField(max_length=512, blank=True, null=True)
    priority = models.SmallIntegerField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name

class Comment(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField(default='Needs description', blank=True, null=True)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)