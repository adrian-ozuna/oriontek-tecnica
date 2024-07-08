import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';
import { Company } from '../../../models/company.model';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Client } from '../../../models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
    selector: 'app-client-list',
    standalone: true,
    templateUrl: './client-list.component.html',
    styleUrl: './client-list.component.css',
    imports: [ButtonComponent, CommonModule]
})
export class ClientListComponent implements OnInit {
    company: Company | undefined;
    clients: Client[] = [];
    theId: number = 0;

    constructor(
        private route: ActivatedRoute,
        private companyService: CompanyService,
        private clientService: ClientService
    ) {}

    ngOnInit(): void {
        this.companyService.getCompany;
    }

    getCompany(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.companyService.getCompany(id).subscribe(company => this.company = company);
        this.theId = id;
    }
}
