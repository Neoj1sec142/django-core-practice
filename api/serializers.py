from rest_framework import serializers
from .models import Post, Comment, User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# class LanguageSerializer(serializers.ModelSerializer):
#     class Meta:
#         models = Language
#         fields = '__all__'
    
class UserSerializer(serializers.ModelSerializer):
    # languages = LanguageSerializer(many=True, read_only=True)

  # NEW AS OF AUTH SETUP
    email = serializers.EmailField(required=True)
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)
  # profile_img = serializers.CharField(blank=True, default="")
  # pref_day1 = 1

    class Meta:
        model = User
        fields = ['id','email','first_name','last_name','username','password','prof_img']
        ## OLD 
        # fields = [field.name for field in model._meta.fields]
        fields.append('languages')

        ## NEW AS OF AUTH SETUP
        extra_kwargs = {'write_only': True}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class PostSerializer(serializers.ModelSerializer):
    users = UserSerializer(many=False, read_only=True)
    # languages = LanguageSerializer(many=True, read_only=True)
    class Meta:
        model = Post
        fields = '__all__'
        extra_fields = ('users')

class CommentSerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=False, read_only=True)
    users = UserSerializer(many=False, read_only=True)
    class Meta: 
        model = Comment
        fields = '__all__'
        extra_fields = ('posts', 'users')

class UserAllDetailsSerializer(serializers.ModelSerializer):
    # languages = LanguageSerializer(many=True, read_only=True)
    posts = PostSerializer(many=True, read_only=True)
    comments = CommentSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = "__all__"
        extra_fields = ('posts', 'comments')