from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    city = serializers.CharField()
    description = serializers.CharField()

    def create(self, validated_data):
        instance = Company.objects.create(
            name = validated_data.get("name")
        )
        return instance

    def updated(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.save()
        return instance
    
class CompanySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ("id", "name", "description", "city", "address")


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'