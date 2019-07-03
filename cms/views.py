from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .models import Slider, Article, Contact, Footer, Category
from django.views import generic
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings
from .forms import ContactForm

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

def emailView(request):
    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            subject = form.cleaned_data['subject']
            from_email = form.cleaned_data['from_email']
            message = form.cleaned_data['message']
            try:
                send_mail(subject, message, from_email, ['admin@example.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return redirect('success')
    return render(request, "email.html", {'form': form})

def successView(request):
    return HttpResponse('Success! Thank you for your message.')
