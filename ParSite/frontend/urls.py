from django.urls import path
from . import views


urlpatterns= [
    path('', views.index),
    path('element/buttons/', views.sheet)
]