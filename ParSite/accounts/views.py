from django.shortcuts import render, redirect
from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
'''
from django.contrib.auth import(
    authenticate,
    get_user_model,
    login,
    logout
)
'''

from .forms import UserLogin, UserRegister

"""
def login_view(request):
    next = request.GET.get('next')
    form = UserLogin(request.POST or None)
    if form.is_valid:
        username = form['username']
        password = form['password']
        user = authenticate(username = username, password = password)
        login(request, user)
        if next:
            return redirect(next)
        return redirect('/')
        context = {
            "form":form
        }
    return render(request, 'login.html', context)
    """

def register_view(request):
    form = UserCreationForm
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid:
            form.save()
    
    context = {
        "form":form
    }
    return render(request, 'accounts/register.html', context)


def login_view(request):
    form = AuthenticationForm
    context = {
        'form':form
    }
    return render(request, 'accounts/login.html', context)