from django.urls import path, include
from .views import get_user_list

urlpatterns = [
    path('users/', get_user_list, name='users')
]
