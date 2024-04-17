from django.http import JsonResponse
from django.shortcuts import render

from api.models import Company, Vacancy

from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from api.serializers import CompanySerializer2, CompanySerializer, VacancySerializer

class AllCompaniesAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AllCompaniesDetailAPIView(APIView):
    def get(self, request, pk=None):
        company = Company.objects.get(id=pk)
        serializer = CompanySerializer2(company)
        return Response(serializer.data)
    def put(self, request, pk=None):
        company = Company.objects.get(id=pk)
        serializer = CompanySerializer2(
            instance=company,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk=None):
        company = Company.objects.get(id=pk)
        company.delete()
        return Response({'id': 'deleted'})

class CompanyByVacancyAPIView(APIView):
    def get(self, request, pk, format=None):
        try:
            company = Company.objects.get(id=pk)
            vacancies = company.companies.all()
            serializer = VacancySerializer(vacancies, many=True)
            return Response(serializer.data)
        except Company.DoesNotExist:
            return Response({"message": "Company not found"}, status=status.HTTP_404_NOT_FOUND)