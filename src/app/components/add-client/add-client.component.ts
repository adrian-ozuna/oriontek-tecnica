import { Component, NgModule } from '@angular/core';
import { LayoutComponent } from "../shared/layout/layout.component";
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { CreateClient } from '../../../models/client/createClient.model';

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [LayoutComponent, FloatLabelModule, FormsModule, InputTextModule, ButtonModule, RouterModule],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {
  client: CreateClient = {
    firstName: '',
    lastName: '',
  };

  constructor(
    private clientService: ClientService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.clientService.createClient(this.client).subscribe(
      response => {
        this.client = { firstName: '', lastName: '' };
        this.router.navigate(['/'])
      },
      error => {
        console.log(error)
      }
    )
  }
}
