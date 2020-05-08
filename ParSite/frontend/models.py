from django.db import models


class ButtonModel(models.Model):
    author = models.CharField(max_length=30, blank=True, null=True)
    rating = models.FloatField(max_length=4, blank=True, null=True)
    html = models.FileField(upload_to='media/html', blank=True, null=True)
    css = models.FileField(upload_to='media/css', blank=True, null=True)
    js = models.FileField(upload_to='media/js', blank=True, null=True)
    preview = models.ImageField(
        upload_to="media/preview", blank=True, null=True)
    description = models.CharField(max_length=150, blank=True, null=True)


class CardModel(models.Model):
    author = models.CharField(max_length=30, blank=True, null=True)
    rating = models.FloatField(max_length=4, blank=True, null=True)
    html = models.FileField(upload_to='media/html', blank=True, null=True)
    css = models.FileField(upload_to='media/css', blank=True, null=True)
    js = models.FileField(upload_to='media/js', blank=True, null=True)


class Types(models.Model):
    But = models.ForeignKey(ButtonModel, on_delete=models.CASCADE)
    Card = models.ForeignKey(CardModel, on_delete=models.CASCADE)
