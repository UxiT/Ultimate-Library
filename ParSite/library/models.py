from django.db import models

class LibModel(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    message = models.CharField(max_length=500, blank=True, null=True)
    create_at = models.DateTimeField(auto_now_add=True)