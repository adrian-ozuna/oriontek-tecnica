import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ManageClientComponent } from './components/manage-client/manage-client.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'client/add', component: AddClientComponent },
    { path: 'client/manage/:id', component: ManageClientComponent },
    { path: 'client/:id/address/add', component: AddAddressComponent },
    { path: 'client/:id/address/edit/:addressId', component: EditAddressComponent },
];

