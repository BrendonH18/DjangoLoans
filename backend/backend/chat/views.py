from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import get_user_model, authenticate
from chat.serializer import UserGetSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

User = get_user_model()

@api_view(['GET'])
# @permission_classes(IsAuthenticated)
def get_user_list(request):
    try:
        user_obj = User.objects.exclude(id=request.user.id)
        serializer = UserGetSerializer(user_obj, many=True)
        return Response(serializer.data)
    except Exception as e:
        print("Error in getting users list", e)
        return Response({'error': 'Error in getting users list'}, status=status.HTTP_400_BAD_REQUEST)
