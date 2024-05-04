from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse

# Create your views here.

@api_view (['GET'])
def getRoutes (request):
    routes = [
        'base/users',
       ' base/user/login',
        'base/user/register',
        'base/user/email_verify',
        'base/user/profile',
    ]
    return Response (routes)


