from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')

def sheet(request):
    return render(request, 'frontend/sheet.html')

