from django.urls import path, include
from .views import buttonView

urlpatterns = [
   path('element/buttons/', sheetList),
   path('element/buttons/<str:slug>', buttonView.as_view, name = 'button_url')
]