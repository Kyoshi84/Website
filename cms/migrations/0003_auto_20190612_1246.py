# Generated by Django 2.0.5 on 2019-06-12 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0002_auto_20190611_0932'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='picture',
            field=models.ImageField(default='pic_folder/None/no-img.jpg', upload_to='pic_articles/'),
        ),
        migrations.AlterField(
            model_name='slider',
            name='photo',
            field=models.ImageField(default='photo_folder/None/no-img.jpg', upload_to='pic_slider/'),
        ),
    ]