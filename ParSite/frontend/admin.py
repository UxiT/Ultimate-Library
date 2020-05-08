from django.contrib import admin
from .models import Types, ButtonModel, CardModel

admin.site.register([Types, ButtonModel, CardModel])
