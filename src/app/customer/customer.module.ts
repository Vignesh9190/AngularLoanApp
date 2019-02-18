import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms"; 
import { CustomerComponent } from './customer.component';
import { GeneralComponent } from '../forms/general/general.component';
import { ContactComponent } from '../forms/contact/contact.component';
import { WizardComponent } from '../forms/wizard/wizard.component';
import { IdentityComponent } from '../forms/identity/identity.component';
import { IncomeComponent } from '../forms/income/income.component';

const customerRoutes: Routes = [
  {
    path: '', component: CustomerComponent, children: [
      { path: 'general', component: GeneralComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'identity', component: IdentityComponent },
      { path: 'income', component: IncomeComponent}
    ]
  },
];
@NgModule({
  declarations: [CustomerComponent,GeneralComponent,ContactComponent,WizardComponent,IdentityComponent,IncomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(customerRoutes)
  ]
})
export class CustomerModule { }
