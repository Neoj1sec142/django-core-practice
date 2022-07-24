from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.shortcuts import render
import json
from .models import Post, Comment, User
from .serializers import PostSerializer, CommentSerializer, UserSerializer, UserAllDetailsSerializer
# Create your views here.
class UserList(APIView):
  permission_classes = (permissions.AllowAny)
  authentication_classes = ()

  def get(self, request):
    users = User.objects.all()
    return Response(users)

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailByUsername(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'

class UserCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLogout(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        
        refresh_token = request.data['refresh_token']
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response(status=status.HTTP_205_RESET_CONTENT)

class UserAllDetailsList(generics.ListCreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserAllDetailsSerializer

class UserAllDetailsDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = User.objects.all()
  serializer_class = UserAllDetailsSerializer


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all().order_by('-date_created')
    serializer_class = PostSerializer
    permission_classes = (permissions.AllowAny,)
    
    class Meta:
        model = Post
        fields = ('__all__')
        ordering = ('-date_created')
        


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer