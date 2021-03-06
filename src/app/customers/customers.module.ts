import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from './customer.service';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerStatusPipe } from './customer-status.pipe';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ],
  declarations: [
    CustomerComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    CustomerFormComponent,
    CustomerStatusPipe
  ],
  providers: [
    CustomerService
  ]
})
export class CustomersModule { }
