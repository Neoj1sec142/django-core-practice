from django.db import models

# Create your models here.
class Language(models.Model):
    lang = models.CharField(max_length=100)
    description = models.TextField()

class Post(models.Model):
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    name = models.CharField(max_length=256)
    description = models.TextField(default='Needs description', blank=True, null=True)
    img_url = models.URLField(max_length=512, blank=True, null=True)
    priority = models.SmallIntegerField()
    def __str__(self):
        return self.name

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField(default='Needs description', blank=True, null=True)