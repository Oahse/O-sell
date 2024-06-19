# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ..views.Transactions_view import TransactionViewSet

router = DefaultRouter()
router.register(r'', TransactionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
