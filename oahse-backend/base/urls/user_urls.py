from django.urls import path 
# from django.contrib.auth import views as auth_views 

from base.views import user_views as views 
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    # path ('', views.getRoutes, name='Routes'),

    path('login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.registerUser, name='register'),
    path('verify-email', views.verifyEmail, name='email-verify'),
    path('profile/', views.getUserProfile, name="users-profile"),
    path('profile/update/', views.updateUserProfile, name="users-profile-update"),
    path('', views.getUsers, name="users"),

    path('<str:pk>/', views.getUserById, name='user'),

    path('update/<str:pk>/', views.updateUser, name='user-update'), 

    path('delete/<str:pk>/', views.deleteUser, name='user-delete'), 
]