import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router"; 

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {
  identityForm: FormGroup;
  formLabel: string ="Identity Info";
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.identityForm = this.formBuilder.group({
      proof_type: ['', Validators.required],
      proof_number: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('identity');
    console.log(this.identityForm.value);
    //this.customerService.setGeneralInfo(this.identityForm.value);
    this.router.navigate(['customer/income']);
  }

}
