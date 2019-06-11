from django.shortcuts import render
from django.http import HttpResponse
from .models import Slider, Article, Contact, Footer, Category

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def home(request):
    sliders = Slider.objects.all()
    return render(request, 'home.html', {'sliders': sliders})
