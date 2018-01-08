import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
//import {Hero} from '../../../models/product.model';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent {


form: FormGroup;

firstName = new FormControl("", Validators.required);

constructor(fb: FormBuilder) {
    this.form = fb.group({
        "firstName": this.firstName,
        "password":["", Validators.required]
    });
}
onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.form);
}
}