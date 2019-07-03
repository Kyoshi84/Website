
from django.urls import path
from django.conf.urls import include, url
from django.contrib import admin
from .views import emailView, successView

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('articles/', views.ArticleView.as_view(), name='articles'),
    path('email/', emailView, name='email'),
    path('success/', successView, name='success'),

]
