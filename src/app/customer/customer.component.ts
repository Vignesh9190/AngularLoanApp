import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../shared/service/customer.service';
import {Customer} from '../shared/model/form';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  //customer: Customer;
  @Input() customer;
  constructor(private customerService : CustomerService) { }

  ngOnInit() {
    this.customer = this.customerService.getData();
    console.log(this.customer);
  }

}
