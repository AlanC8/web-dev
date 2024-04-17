import json
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.decorators import api_view

from api.models import Product, Category
from api.serializers import CategorySerializer, CategorySerializer2

from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

@api_view(["GET", "POST"])
def get_categories(request):
    if request.method == "GET":
        categories = Category.objects.all()
        serializer = CategorySerializer2(categories, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = CategorySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "PUT", "DELETE"])
def category_detail(request, pk=None):
    category = Category.objects.get(id=pk)
    if request.method == "GET":
        serializer = CategorySerializer2(category)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = CategorySerializer2(
            instance=category,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        category.delete()
        return Response({'id': 'deleted'})