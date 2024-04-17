from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()

    def __str__(self):
        return f"Companies: ID -> {self.id}, city -> {self.city}, address -> {self.address}"

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
        }

    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE,
        related_name='companies'
    )

    def __str__(self):
        return f"Vacancies: ID -> {self.id}, salary -> {self.salary}, company -> {self.company.name}"

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'salary': self.salary,
            'description': self.description,
            'company': self.company.name
        }

    class Meta:
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies"