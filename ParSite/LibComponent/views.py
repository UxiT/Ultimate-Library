from django.shortcuts import render
import os

def componentView(request):
    return render(request, 'LibComponent/index.html')
