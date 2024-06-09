import os
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from ..models import User, About, Event, Partners, Payments, Logs
from ..serializers import (
    UserSerializer, AboutSerializer, EventSerializer,
    PartnersSerializer, PaymentsSerializer, LogsSerializer,UserRegistrationSerializer, UserLoginSerializer
)
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.auth.tokens import default_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django.contrib.auth import login
from django.conf import settings
from django.db import connection


NAME = 'LAHF'
VERSION = '1.0.0'

@method_decorator(csrf_exempt, name="dispatch")
class HomeView(APIView):
    def get(self, request):
        data = {
            'success': 'true',
            'message': 'Welcome to ' + NAME + ' version ' + VERSION,
            'response': {
                'name': NAME,
                'version': VERSION
            }
        }
        return Response(data, status=status.HTTP_200_OK)

@method_decorator(csrf_exempt, name="dispatch")
class AboutAPIView(APIView):
    def get(self, request):
        about = About.objects.first()
        if about:
            serializer = AboutSerializer(about)
            return Response({'success': 'true', 'message': 'Retrieved the company details', 'response': serializer.data}, status=status.HTTP_200_OK)
        return Response({'success': 'false', 'message': 'No company details found'}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        serializer = AboutSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': 'true', 'message': 'Company details created successfully', 'response': serializer.data}, status=status.HTTP_201_CREATED)
        return Response({'success': 'false', 'message': 'Failed to create company details', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    def put(self, request):
        about = About.objects.first()
        if about:
            serializer = AboutSerializer(about, data=request.data)
            if serializer.is_valid():
                serializer.save()

                return Response({'success': 'true', 'message': 'Event updated successfully', 'response': serializer.data}, status=status.HTTP_200_OK)
            return Response({'success': 'false', 'message': 'Failed to update event', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'success': 'false', 'message': 'Event not found'}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request):
        about = About.objects.first()
        if about:
            about.delete()
            return Response({'success': 'true', 'message': 'Event deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        return Response({'success': 'false', 'message': 'Event not found'}, status=status.HTTP_404_NOT_FOUND)