import { Component } from '@angular/core';
import { LayoutComponent } from "../shared/layout/layout.component";
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AddressService } from '../../services/address.service';
import { CreateAddress } from '../../../models/address/createAdress.model';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-edit-address',
  standalone: true,
  imports: [LayoutComponent, FormsModule, ButtonModule, RouterModule, InputTextModule],
  templateUrl: './edit-address.component.html',
  styleUrl: './edit-address.component.css'
})
export class EditAddressComponent {

  address: CreateAddress = {
    clientId: 0,
    street: '',
    city: '',
    zipCode: ''
  }

  constructor(
    private addressService: AddressService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  
  onSubmit(): void {
    const id = +this.route.snapshot.paramMap.get('addressId')!;
    this.address.clientId = id;
    this.addressService.updateAddress(id, this.address).subscribe(
      response => {
        this.address = { clientId: 0, street: '', city: '', zipCode: '' };
        this.router.navigate(['/'])
      },
      error => {
        console.log(error)
      }
    )
  }
}
