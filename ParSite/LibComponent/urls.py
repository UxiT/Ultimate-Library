from django.urls import path, include
from .views import componentView

urlpatterns = [
    path('',componentView )
]