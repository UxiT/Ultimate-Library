from django.shortcuts import render
from . import models
import re
import codecs


def index(request):
    return render(request, 'frontend/index.html')


def fileCovert(Model):
    objects = Model.objects.all()
    result = []
    for obj in objects:
        fileOpen = obj.html
        content = fileOpen.read()
        result.append(content)

    return result


def buttons(request):
    return render(request, 'frontend/buttons.html')
