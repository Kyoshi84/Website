from django.contrib import admin

# Register your models here.
from .models import Category
admin.site.register(Category)

from .models import Article
admin.site.register(Article)

from .models import Slider
admin.site.register(Slider)

from .models import Contact
admin.site.register(Contact)

from .models import Footer
admin.site.register(Footer)
