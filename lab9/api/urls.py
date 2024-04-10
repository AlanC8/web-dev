from django.urls import path

from .views import all_companies, company_id, company_by_vacancy, all_vacancy, vacancy_id, top_ten

urlpatterns =[
    path('companies/', all_companies),
    path('companies/<int:pk>/', company_id),
    path('companies/<int:pk>/vacancies/', company_by_vacancy),
    path('vacancies/', all_vacancy),
    path('vacancies/<int:pk>/', vacancy_id),
    path('vacancies/top_ten', top_ten)
]