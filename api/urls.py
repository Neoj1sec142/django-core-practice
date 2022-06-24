from api import serializers
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
# from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('languages', views.LanguageList.as_view(), name='language_list'),
    path('languages/<int:pk>', views.LanguageDetail.as_view(), name='language_detail'),
    path('posts', views.PostList.as_view(), name='post_list'),
    path('posts/<int:pk>', views.PostDetail.as_view(), name='post_detail'),
    path('comments', views.CommentList.as_view(), name='comment_list'),
    path('comments/<int:pk>', views.CommentDetail.as_view(), name='comment_detail'),
]