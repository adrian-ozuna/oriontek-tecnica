import { Component } from '@angular/core';
import { LayoutComponent } from "../shared/layout/layout.component";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Address } from '../../../models/address/address.model';
import { ClientService } from '../../services/client.service';
import { Client } from '../../../models/client/client.model';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-manage-client',
  standalone: true,
  imports: [LayoutComponent, RouterModule, ButtonModule, TableModule, CommonModule],
  templateUrl: './manage-client.component.html',
  styleUrl: './manage-client.component.css'
})
export class ManageClientComponent {
  client!: Client;
  addresses: Address[] = [];

  constructor(
    private clientService: ClientService,
    private addressService: AddressService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.clientService.getClient(id).subscribe((client) => {
      this.addresses = client.addresses;
      this.client = client
      console.log(client)
    })
  }

  deleteAddress(id: number): void {
    this.addressService.deleteAddress(id).subscribe(() => {
      this.addresses = this.addresses.filter(adress => adress.id !== id);
    });
  }
}
