
from django.contrib import admin
from django.urls import path, include
from .views import index
from rest_framework import serializers, routers, viewsets

from accounts.views import login_view, register_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('anything/', include('LibComponent.urls')),
    path('prog/', include('progress.urls')),
    path('register/', register_view),
    path('login/', login_view, name = 'login')
]

urlpatterns +=[
    path('accounts/', include('django.contrib.auth.urls'))
]