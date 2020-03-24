from rest_framework import serializers
from library.models import LibModel

class LibSerializer(serializers.ModelSerializer):
    class Meta:
        model = LibModel
        fields = '__all__'
