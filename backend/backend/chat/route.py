from django.urls import path
from .consumers import PersonalChatConsumer

websocket_urlpatterns = [
    path('ws/chat/<int:chatroom_id>/', PersonalChatConsumer.as_asgi())
]