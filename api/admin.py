from django.contrib import admin
from .models import Language, Post, Comment
# Register your models here.
admin.site.register(Language)
admin.site.register(Post)
admin.site.register(Comment)
