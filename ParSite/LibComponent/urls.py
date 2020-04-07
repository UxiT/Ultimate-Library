from django.urls import path, include
from .views import buttonView, glicth

urlpatterns = [
   path('glitch/', glicth),
   path('elements/buttons/<str:slug>', buttonView.as_view, name = 'button_url')
]