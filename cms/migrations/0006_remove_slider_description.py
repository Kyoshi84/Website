# Generated by Django 2.0.5 on 2019-06-14 08:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0005_slider_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='slider',
            name='description',
        ),
    ]
