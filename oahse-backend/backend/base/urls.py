from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('base/users/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path ('base/', views.getRoutes, name='Routes'), 

]