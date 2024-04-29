from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse

# Create your views here.

@api_view (['GET'])
def getRoutes (request):
    routes = [
        'api/users',
       ' api/user/login',
        'api/user/register',
        'api/user/email_verify',
        'api/user/profile',
    ]
    return Response (routes)