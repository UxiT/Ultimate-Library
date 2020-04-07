
from django.contrib import admin
from django.urls import path, include
from .views import index
from rest_framework import serializers, routers, viewsets

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('anything/', include('LibComponent.urls')),
    path('prog/', include('progress.urls')),
    #path('lib/', include('library.urls')),
]

urlpatterns +=[
    path('accounts/', include('django.contrib.auth.urls'))
]