from django.urls import path

from api.views import CategoryListAPIView, CategoryDetailAPIView
urlpatterns = [
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:pk>', CategoryDetailAPIView.as_view()),
    # path('categories/', get_categories),
    # path('categories/<int:pk>', category_detail)
]