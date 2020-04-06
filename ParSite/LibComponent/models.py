from django.db import models
import random
from django.template.defaultfilters import slugify


class Button(models.Model):
    button_id = models.AutoField(primary_key = True)
    slug = models.SlugField(unique = True, default='a')
    upload = models.FileField(upload_to='buttons/', blank=True)
    title = models.CharField(max_length=100, default='button')
    date_pub = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.slug = slugify((self.title + str(self.button_id)))    
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
