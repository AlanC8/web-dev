from django.http import JsonResponse
from django.shortcuts import render

from .models import Company, Vacancy


# Create your views here.
def all_companies(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)

def company_id(request, pk):
    company = Company.objects.get(id=pk)
    companies_json = company.to_json()
    return JsonResponse(companies_json, safe=False)

def company_by_vacancy(request, pk):
    company = Company.objects.get(id=pk)
    vacancies = company.companies.all()
    vacancies_data = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_data, safe=False)

def all_vacancy(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_id(request, pk):
    vacancy = Vacancy.objects.get(id=pk)
    return JsonResponse(vacancy.to_json(), safe=False)

def top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_data = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_data, safe=False)