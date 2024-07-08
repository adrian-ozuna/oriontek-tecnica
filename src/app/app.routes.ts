import { Routes } from '@angular/router';
import { AddressListComponent } from './components/address-list/address-list.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';

export const routes: Routes = [
    { path: 'companies', component: CompanyListComponent },
    { path: 'company/:id', component: ClientListComponent },
    { path: 'addresses', component: AddressListComponent },
    { path: '', redirectTo: '/companies', pathMatch: 'full' }
  ];