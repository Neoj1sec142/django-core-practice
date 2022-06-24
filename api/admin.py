from django.contrib import admin
from .models import Post, Comment, User
# Register your models here.
class UserAdmin(admin.ModelAdmin):
    model = User

admin.site.register(User, UserAdmin)    
# admin.site.register(Language)
admin.site.register(Post)
admin.site.register(Comment)
