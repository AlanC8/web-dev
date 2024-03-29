from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=64)
    price = models.FloatField()
    description = models.TextField(max_length=500)
    count = models.IntegerField()
    is_active = models.BooleanField()

    def __str__(self):
        return f"ID: {self.id}, NAME: {self.name}, ACTIVE: {self.is_active}"

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active
        }

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"

class Category(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return f"ID: {self.id}, NAME: {self.name}"

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"
