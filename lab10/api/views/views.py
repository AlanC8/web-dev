from django.http import JsonResponse
from django.shortcuts import render

from api.models import Company, Vacancy

from rest_framework.request import Request
from rest_framework.response import Response



def all_companies(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return Response(companies_json)

def company_id(request, pk):
    company = Company.objects.get(id=pk)
    companies_json = company.to_json()
    return Response(companies_json)

def company_by_vacancy(request, pk):
    company = Company.objects.get(id=pk)
    vacancies = company.companies.all()
    vacancies_data = [vacancy.to_json() for vacancy in vacancies]
    return Response(vacancies_data)

def all_vacancy(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return Response(vacancies_json)

def vacancy_id(request, pk):
    vacancy = Vacancy.objects.get(id=pk)
    return Response(vacancy.to_json())

def top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_data = [vacancy.to_json() for vacancy in vacancies]
    return Response(vacancies_data)