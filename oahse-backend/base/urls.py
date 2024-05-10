from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path ('', views.getRoutes, name='Routes'),

    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('users/register/', views.registerUser, name='register'), 
    path('users/profile/', views.getUserProfile, name="users-profile"),
    path('users/profile/update/', views.updateUserProfile, name="users-profile-update"),
    path('users', views.getUsers, name="users"),

    path('users/<str:pk>/', views.getUserById, name='user'),

    path('update/<str:pk>/', views.updateUser, name='user-update'), 

    path('delete/<str:pk>/', views.deleteUser, name='user-delete'), 

    

    path('products', views.getProducts, name='products' ), 
    path('products/create', views.createProduct, name='product-create' ), 
    path('products/upload', views.uploadProductImage, name='product-image-Upload' ),
    path('products/<str:pk>/', views.getProduct, name='product' ),
    path('products/update/<str:pk>/', views.updateProduct, name='product-update' ),
    path('products/delete/<str:pk>/', views.deleteProduct, name='product-delete' ),


]