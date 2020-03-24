from library.models import LibModel
from rest_framework import viewsets, permissions
from library.serializers import LibSerializer

# Viewset

class LibViewset(viewsets.ModelViewSet):
    queryset = LibModel.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LibSerializer