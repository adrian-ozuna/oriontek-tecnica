import { Component } from '@angular/core';
import { LayoutComponent } from "../shared/layout/layout.component";
import { CreateAddress } from '../../../models/address/createAdress.model';
import { AddressService } from '../../services/address.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-add-address',
  standalone: true,
  imports: [LayoutComponent, FormsModule, ButtonModule, RouterModule, InputTextModule, RouterModule],
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.css',
})
export class AddAddressComponent {
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
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.address.clientId = id;
    this.addressService.createAddress(this.address).subscribe(
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
