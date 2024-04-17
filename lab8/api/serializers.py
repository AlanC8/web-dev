from rest_framework import serializers

from api.models import Company


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        instance = Category.objects.create(
            name =validated_data.get("name")
        )
        return instance

    def updated(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.save()
        return instance

class CategorySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("id", "name")