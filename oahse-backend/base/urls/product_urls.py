from django.urls import path
from base.views import product_views as views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    
    path('products', views.getProducts, name='products' ), 
    path('products/create', views.createProduct, name='product-create' ), 
    path('products/upload', views.uploadProductImage, name='product-image-Upload' ),
    path('products/<str:pk>/', views.getProduct, name='product' ),
    path('products/update/<str:pk>/', views.updateProduct, name='product-update' ),
    path('products/delete/<str:pk>/', views.deleteProduct, name='product-delete' ),

]