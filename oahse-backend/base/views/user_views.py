from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes 
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.http import JsonResponse
from base.models import User
from base.serializers import UserSerializer, UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView 
from rest_framework import status 
from rest_framework import generics
from django.contrib.auth.hashers import make_password
from base.utils import Util 
from django.contrib.sites.shortcuts import get_current_site

# Create your views here.

# User view ---------------------------------------------

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs) 

        serializer = UserSerializerWithToken(self.user).data

        for k , v in serializer.items():
            data[k] = v 

        return data 

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterUser(generics.GenericAPIView):

    serializer_class=UserSerializer

    def post(self, request): 
        user = request.data
        serializer =self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        user_data = serializer.data
        return Response(user_data, status=status.HTTP_201_CREATED)


@api_view(['PUT'])
@permission_classes([IsAuthenticated]) 
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)

    data = request.data

    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email'] 
    if data['password'] != '':
        user.password = make_password(data['password'])

    user.save()

    return Response(serializer.data) 

@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data) 


@api_view(['GET'])
@permission_classes([IsAdminUser]) 
def getUsers(request):
    users = User.objects.all() 
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data) 


@api_view(['GET'])
@permission_classes([IsAdminUser]) 
def getUserById(request, pk): 
    user = User.objects.get(id=pk) 
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data) 


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateUser(request, pk):
    user = User.objects.get(id=pk)
    

    data = request.data

    user.first_name = data['first name']
    user.last_name = data['last name']
    user.email = data['email'] 
    user.is_staff = data['isAdmin']

    user.save()

    serializer = UserSerializer(user, many=False)

    return Response(serializer.data) 


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteUser(request, pk):
    userForDeletion = User.objects.get(id=pk)
    userForDeletion.delete()
    return Response('User was deleted')
