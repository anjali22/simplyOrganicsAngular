import { Component, AfterViewInit, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import {Product} from '../product.interface';

declare var jQuery:any;
declare var $:any;

@Component({
 // templateUrl: './product-list.component.html',
 template: ` 
    // <form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm.value, myForm.valid)">
 
    //  <!-- We'll add our form controls here -->
    //  <div>
    //  <label>Name</label>
    //  <input type="text" formControlName="name" >
    //  <small [hidden]="myForm.controls.name.valid || (myForm.controls.name.pristine && !submitted)">
    //      Name is required (minimum 5 characters).
    //  </small>
    //  </div>

    //  <button type="submit">Submit</button>
 
    // </form>`,
})


export class ProductDetailComponent {

  // results: Product[];
  // value: String;
  // public myForm: FormGroup; // our model driven form
  // public submitted: boolean; // keep track on whether form is submitted
  // public events: any[] = []; // use later to display form changes
  // public queryForm: FormGroup;
  // name: Product;


  
  //  // Inject HttpClient into your component or service.
  //  constructor(
  //    private http: HttpClient,
  //    private route: ActivatedRoute,
  //    private _fb: FormBuilder) {}

  // ngOnInit(): void {

  //   // get URL parameters
  //   this.route.params.subscribe(params => {
  //     console.log(params,"paramssssssssss");
  //     this.value = params.productid; // --> Name must match wanted parameter
  //     console.log(this.value,'valueeeeeeeeeeee');
  //   });

  //   // Make the HTTP request:
  //   this.http.get('http://localhost:3000/productdetail?productid='+this.value).subscribe(data => {
  //     // Read the result field from the JSON response.
  //     this.results = data['results'];
  //     console.log(this.results);
  //     this.queryForm.patchValue({name: this.results[0]})
  //   });

  //   this.myForm = this._fb.group({
  //     name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
  //     address: this._fb.group({
  //         street: ['', <any>Validators.required],
  //         postcode: ['']
  //     })
  // });

  // this.queryForm = this._fb.group({
  //   arrayOfData: this._fb.array([]) // name a proper name to array
  // })

  

  // // this.myForm.setValue({
  // //   name:    this.results,
  // // });

  // }

  // patchValues() {
  //   const control = <FormArray>this.queryForm.controls.arrayOfData;
  //   this.results.forEach(x => {
  //     control.push(this.patchValue(x.name, x.price))
  //   })
  // }
  
  // patchValue(name, code) {
  //   return this._fb.group({
  //     name: [name],
  //     price: [code]
  //   })    
  // }

	
}

