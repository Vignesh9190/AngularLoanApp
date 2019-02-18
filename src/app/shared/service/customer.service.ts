import { Injectable } from '@angular/core';
import { Customer,CustomerGeneralInfo } from "../model/form";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public customer: Customer = new Customer();
  constructor() { }

  getGeneral() : CustomerGeneralInfo {
    var customerGeneralInfo: CustomerGeneralInfo = {
        firstName: this.customer.firstName,
        lastName: this.customer.lastName,
        dob: this.customer.dob,
        age: this.customer.age,
        address: this.customer.address,
        city: this.customer.city,
        state: this.customer.state,
        country: this.customer.country,
        zipcode: this.customer.zipcode
    };
    return customerGeneralInfo;
  }

  getData() : Customer {
    return this.customer;
  }

  setGeneralInfo(data: CustomerGeneralInfo) {
    this.customer.firstName = data.firstName;
    this.customer.lastName = data.lastName;
    this.customer.dob = data.dob;
    this.customer.age = data.age;
    this.customer.address = data.address;
    this.customer.city = data.city;
    this.customer.state = data.state;
    this.customer.country = data.country;
    this.customer.zipcode = data.zipcode;
  } 

}
