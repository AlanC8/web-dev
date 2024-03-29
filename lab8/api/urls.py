from django.urls import path

from api.views import link_check, get_products, get_product,get_categories, get_category, category_products_list

urlpatterns = [
    path('link/', link_check),
    path('products/', get_products),
    path('products/<int:pk>/', get_product),
    path('categories/', get_categories),
    path('categories/<int:pk>/', get_category),
    path('categories/<int:pk>/products/', category_products_list)
]