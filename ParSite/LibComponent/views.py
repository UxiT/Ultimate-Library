from django.shortcuts import render
from django.views import View
from .models import Button

class buttonView(View):
    def getButton(self, request, slug):
        buttons = Button.objects.all()
        return render(request, 'LibContent/index.html', context = {'buttons':buttons})

def glicth(request):
    return render(request, 'LibContent/index.html')