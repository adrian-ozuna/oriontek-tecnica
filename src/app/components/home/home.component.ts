import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { ContainerComponent } from "../shared/container/container.component";
import { ButtonModule } from 'primeng/button';
import { LayoutComponent } from "../shared/layout/layout.component";
import { RouterModule } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../../models/client/client.model';
import { DataViewModule } from 'primeng/dataview';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ContainerComponent, ButtonModule, LayoutComponent, RouterModule, DataViewModule, NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((data) => {
      this.clients = data;
      console.log(data)
    })
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(() => {
      this.clients = this.clients.filter(client => client.id !== id);
    });
  }
}
