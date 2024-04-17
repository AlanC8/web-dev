import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DjangoDataService } from './django-data.service';
import { CommonModule } from '@angular/common';
import { Company, Vacancy } from './models';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,
    HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  constructor(private dataService: DjangoDataService) {}

  ngOnInit() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.dataService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }

  loadVacancies(companyId: number) {
    const companyIdStr = companyId.toString(); // Convert to string
    this.dataService.getVacancies(companyIdStr).subscribe(vacancies => {
      this.vacancies = vacancies;
    });
  }
}
