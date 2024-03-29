from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from api.models import Product,Category


# Create your views here.
def link_check(request):
    return HttpResponse("<h1>Checck!</h1>")

def get_products(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def get_product(request, pk):
    product = Product.objects.get(id=pk)
    product_json = product.to_json()
    return JsonResponse(product_json)

def get_categories(request):
    categories = Category.objects.all();
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)

def get_category(request, pk):
    category = Category.objects.get(id=pk)
    return JsonResponse(category.to_json())

def category_products_list(request, pk=None):
    products = Product.objects.filter(id=pk)
    products_list = [product.to_json() for product in products]
    return JsonResponse(products_list, safe=False)