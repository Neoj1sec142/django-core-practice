from rest_framework import serializers
from .models import Language, Post, Comment

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        models = Language
        fields = '__all__'
    

class PostSerializer(serializers.ModelSerializer):
    language = LanguageSerializer(
        view_name='post_detail',
        many=True,
        read_only=True
    )
    class Meta:
        model = Post
        fields = '__all__'
        extra_fields = ('language')

class CommentSerializer(serializers.ModelSerializer):
    post = PostSerializer(
        view_name='comment_detail',
        many=True,
        read_only=True 
    )
    class Meta: 
        model = Comment
        fields = '__all__'
        extra_fields = ('post')
