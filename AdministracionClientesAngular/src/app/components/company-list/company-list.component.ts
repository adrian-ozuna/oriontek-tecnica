import { Component, OnInit } from '@angular/core';
import { Company } from '../../../models/company.model';
import { CompanyService } from '../../services/company.service';
import { CommonModule, NgFor } from '@angular/common';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-company-list',
    standalone: true,
    templateUrl: './company-list.component.html',
    styleUrl: './company-list.component.css',
    imports: [CommonModule, ButtonComponent]
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    })
  }

  deleteCompany(id: number): void {
    this.companyService.deleteCompany(id).subscribe(() => {
      this.companies = this.companies.filter(company => company.id !== id);
    });
  }
}
