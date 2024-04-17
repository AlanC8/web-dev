from django.urls import path

from api.views import all_companies, all_companies_detail
from api.views import AllCompaniesAPIView, AllCompaniesDetailAPIView, CompanyByVacancyAPIView
urlpatterns =[
    path('companies/', AllCompaniesAPIView.as_view()),
    path('companies/<int:pk>', AllCompaniesDetailAPIView.as_view()),
    path('companies/<int:pk>/vacancies/', CompanyByVacancyAPIView.as_view())
]