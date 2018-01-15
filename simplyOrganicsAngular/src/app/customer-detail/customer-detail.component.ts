import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Customer} from "../customer";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  @Input() results: Customer[];
  
  myForm: FormGroup;  
  customerName: string;

  constructor(fb: FormBuilder, 
    private route: ActivatedRoute,
    private http: HttpClient
   ) {  
    this.myForm = fb.group({  
      'customerName':  ['', Validators.required]  
    });  
  }
   value: String;
  // constructor( private http: HttpClient,private route: ActivatedRoute ) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params,"paramssssssssss");
      this.value = params.userid; // --> Name must match wanted parameter
      console.log(this.value,'valueeeeeeeeeeee');
    });

    // Make the HTTP request:
    this.http.get('http://localhost:3000/customerdetail?userid='+this.value).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
      console.log(data['results'].first_name);
      console.log(this.results[0].first_name)
      this.myForm.patchValue({customerName: this.results[0].first_name});
  })
  


}

}
