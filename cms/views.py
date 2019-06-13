from django.shortcuts import render
from django.http import HttpResponse
from .models import Slider, Article, Contact, Footer, Category
from django.views import generic

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def home(request):
    sliders = Slider.objects.all()
    return render(request, 'home.html', {'sliders': sliders})

def article(request):

    return render(request, 'article.html',{'article': article} )

class ArticleView(generic.ListView):
    model = Article
    template_name = 'article_list.html'
