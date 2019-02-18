import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms"; 
import { AppComponent } from './app.component';
//import { IncomeComponent } from './forms/income/income.component';
//import { ReviewComponent } from './forms/review/review.component';
//import { IdentityComponent } from './forms/identity/identity.component';
//import { WizardComponent } from './forms/wizard/wizard.component';
//import { GeneralComponent } from './forms/general/general.component';
//import { ContactComponent } from './forms/contact/contact.component';
//import {CustomerModule} from './customer/customer.module';

const commonRoutes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginModule' },
  { path: 'customer', loadChildren: './customer/customer.module#CustomerModule'},
 // {path: '**', redirectTo: 'general'}
];

@NgModule({
  declarations: [
    AppComponent,
    //IncomeComponent,
    //ReviewComponent,
   // IdentityComponent,
    //WizardComponent,
   // GeneralComponent,
    //ContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(commonRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
