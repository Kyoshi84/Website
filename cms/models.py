from django.db import models
from django.contrib.auth.models import User
from PIL import Image
from django.db import models
from tinymce.models import HTMLField
from django.utils.translation import gettext_lazy as URLField

# Create your models here.
class Category(models.Model):
    """Category is connected with menu. Each category is a new menu """
    name = models.CharField(max_length=25)
    description = HTMLField(max_length=500, blank='True')
    def __str__(self):
        return self.name

class Article(models.Model):
    """Article is a main content in CMS"""
    created_on = models.DateField(auto_now=True)
    text = HTMLField(max_length=5000, blank='True')
    title = models.CharField(max_length=275)
    picture = models.ImageField(upload_to = "pic_articles/", default = 'pic_folder/None/no-img.jpg')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    def __str__(self):
        return self.title


class Slider(models.Model):
    photo = models.ImageField(upload_to = "pic_slider/", default = 'pic_slider/None/no-img.jpg')
    name = models.CharField(max_length=50, default = 'id')
    link = models.URLField(max_length=250, blank='True')
    def __str__(self):
        return self.name

class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=70,blank=False)
    message = models.TextField(max_length=500)
    def __str__(self):
        return self.name


"""Do poprawy - to ma byc tylko id i link/text a nie kolejne pola """
class Footer(models.Model):
    text = models.CharField(max_length=50)
    link = models.URLField(max_length=20000, default='')
    def __str__(self):
        return self.name
