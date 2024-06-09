from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_decode
from rest_framework import status, viewsets, generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import login, logout
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import make_password

from ..models import User
from ..serializers import (
    UserSerializer, UserLoginSerializer
)
from ..utils import Util


def send_verification_email(request, user, email, type, subject):
    token = default_token_generator.make_token(user)
    websitetype = 'noreply@yourwebsite.com'
    Util.send_email(request, user, email, token, websitetype, type, subject)


class BaseUserViewSet(viewsets.ModelViewSet):
    
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def create_user(self, request, serializer):
        data = request.data
        user = serializer.save(password=make_password(data['password']))
        print('user=', user)
        send_verification_email(request, user, data.get('email'),'email_verification', 'Email Verification')
        refresh = RefreshToken.for_user(user)
        return Response({
            'success': True,
            'message': 'User registered successfully',
            'userid': user.id,
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }, status=status.HTTP_201_CREATED)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            return self.create_user(request, serializer)
        return Response({'success': False, 'message': 'Failed to register user', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        print(pk,"==============")
        user = get_object_or_404(self.queryset, pk=pk)
        serializer = self.get_serializer(user)
        return Response({'success': True, 'message': 'User details retrieved successfully', 'data': serializer.data})
    def list(self, request):
        serializer = self.get_serializer(self.queryset, many=True)
        return Response({'success': True,'message': 'Users retrieved successfully',  'data': serializer.data})

    def update(self, request, pk=None):
        print('request.data',request.data)
        user = get_object_or_404(self.queryset, pk=pk)
        serializer = self.get_serializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'message': 'User updated successfully', 'data': serializer.data})
        return Response({'success': False, 'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        user = get_object_or_404(self.queryset, pk=pk)
        user.delete()
        return Response({'success': True, 'message': 'User deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

class CreateUserViewSet(BaseUserViewSet):
    queryset = User.objects.filter(is_tradeperson=False, is_business=False, is_distributor=False, is_deliverer=False)
    #serializer_class = CreateUserSerializer


class BaseAuthViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]

    @staticmethod
    def login_user(request, serializer_class):
        serializer = serializer_class(data=request.data, context={'request': request})
        if serializer.is_valid():
            user = serializer.validated_data['user']
            login(request, user)
            refresh = RefreshToken.for_user(user)
            return Response({
                'success': True,
                'message': 'Login successful',
                'user': UserSerializer(user).data,
                'refresh': str(refresh),
                'access': str(refresh.access_token)
            }, status=status.HTTP_200_OK)
        return Response({'success': False, 'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    def login(self, request):
        return self.login_user(request, UserLoginSerializer)

    def logout(self, request):
        logout(request)
        return Response({'success': True, 'message': 'Logged out successfully'}, status=status.HTTP_200_OK)


class LoginViewSet(BaseAuthViewSet):
    pass


class TradepersonViewSet(BaseUserViewSet, BaseAuthViewSet):
    queryset = User.objects.filter(is_tradeperson=True)
    #serializer_class = CreateTradepersonSerializer


class BusinessViewSet(BaseUserViewSet, BaseAuthViewSet):
    queryset = User.objects.filter(is_business=True)
    #serializer_class = CreateBusinessSerializer


class DistributorViewSet(BaseUserViewSet, BaseAuthViewSet):
    queryset = User.objects.filter(is_distributor=True)
    #serializer_class = CreateDistributorSerializer


class DelivererViewSet(BaseUserViewSet, BaseAuthViewSet):
    queryset = User.objects.filter(is_deliverer=True)
    #serializer_class = CreateDelivererSerializer


class SuperuserViewSet(BaseUserViewSet, BaseAuthViewSet):
    queryset = User.objects.filter(is_superuser=True)
    #serializer_class = CreateSuperuserSerializer


class VerifyEmailView(generics.GenericAPIView):
    permission_classes = [AllowAny]

    def get(self, request, uidb64, token, *args, **kwargs):
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            return Response({'success': False, 'message': 'Invalid link'}, status=status.HTTP_400_BAD_REQUEST)

        if user and default_token_generator.check_token(user, token):
            user.is_active = True
            user.save()
            return Response({'success': True, 'message': 'Email verified successfully'}, status=status.HTTP_200_OK)
        return Response({'success': False, 'message': 'Invalid token or user'}, status=status.HTTP_400_BAD_REQUEST)

class ResetPasswordRequestView(generics.GenericAPIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        user = User.objects.filter(email=email).first()
        if user:
            new_password = request.data.get('new_password')
            confirm_password = request.data.get('confirm_password')
            if new_password != confirm_password:
                return Response({'success': False, 'message': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)
            user.set_password(new_password)
            user.save()
            return Response({'success': True, 'message': 'Password reset successful'}, status=status.HTTP_200_OK)
        return Response({'success': False, 'message': 'Invalid email'}, status=status.HTTP_400_BAD_REQUEST)

