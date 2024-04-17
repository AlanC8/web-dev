from django.http import JsonResponse
from django.shortcuts import render

from api.models import Company, Vacancy

from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from api.serializers import CompanySerializer2, CompanySerializer, VacancySerializer

@api_view(["GET", "POST"])
def all_companies(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "PUT", "DELETE"])
def all_companies_detail(request, pk=None):
    company = Company.objects.get(id=pk)
    if request.method == "GET":
        serializer = CompanySerializer2(company)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = CompanySerializer2(
            instance=company,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        company.delete()
        return Response({'id': 'deleted'})

@api_view(['GET'])
def company_by_vacancy(request, pk):
    try:
        company = Company.objects.get(id=pk)
        vacancies = company.companies.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    except Company.DoesNotExist:
        return Response({"message": "Company not found"}, status=404)