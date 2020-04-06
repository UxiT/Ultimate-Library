from django.shortcuts import render
from django.views import View
from .models import Button

class buttonView(View):
    def getButton(self, request, slug):
        buttons = Button.objectss.all()
        return render(request, 'LibContent/index.html', context = {'buttons':buttons})

