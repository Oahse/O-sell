"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.conf import settings 
from django.conf.urls.static import static 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('base.urls.about_urls')),
    path('api/products/', include('base.urls.product_urls')),
    path('api/users/', include('base.urls.user_urls')), 
    path('api/address/', include('base.urls.address_urls')),
    path('api/quotations/', include('base.urls.quotation_urls')),
    path('api/categories/', include('base.urls.category_urls')),
    path('api/orders/', include('base.urls.order_urls')),
    path('api/carts/', include('base.urls.cart_urls')),
    path('api/transactions/', include('base.urls.transaction_urls')),
    path('api/deliverytrackers/', include('base.urls.deliverytracker_urls')),
    path('api/messages/', include('base.urls.messages_urls')),
    path('api/jobs/', include('base.urls.jobs_urls')),
    path('api/services/', include('base.urls.service_urls')),
    path('api/reviews/', include('base.urls.reviews_urls')),
    path('api/comments/', include('base.urls.comments_urls')),
    # path('api/notifications/', include('base.urls.notification_urls')),
    # path('api/reports/', include('base.urls.report_urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)