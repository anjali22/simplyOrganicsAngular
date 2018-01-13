import { Component, AfterViewInit, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

declare var jQuery:any;
declare var $:any;

@Component({
 // templateUrl: './product-list.component.html',
 template: `<form [formGroup]="requestForm" (ngSubmit)="onSubmit()">
 <div class="form-group">    
   <label class="fontstyle1"><span class="fontstyle2">STEP2. </span>User Information</label>
      <div class="form-group">
         <label class="fontstyle3">Name</label>
         <input *ngFor="let result of results" type="text" required class="form-control" [(ngModel)]="result.p_id" disabled>
      </div>

      <div class="form-group">
         <label class="fontstyle3">E-mail</label>
         <input *ngFor="let result of results" type="text" required class="form-control" [(ngModel)]="result.p_title" disabled>
      </div>

      <div class="form-group">
         <label class="fontstyle3">Phone</label>
         <input *ngFor="let user of currentUser" type="text" required class="form-control" [(ngModel)]="user.phone" disabled>
      </div>    
      <br>    
      <button type="submit" id="request-btn">Request</button>   
   
</div>
</form>
             `,
})


export class ProductDetailComponent implements OnInit{

  results: object[];
  value: String;
   // Inject HttpClient into your component or service.
   constructor(private http: HttpClient,private route: ActivatedRoute) {}

  ngOnInit(): void {

    // get URL parameters
    this.route.params.subscribe(params => {
      console.log(params,"paramssssssssss");
      this.value = params.productid; // --> Name must match wanted parameter
      console.log(this.value,'valueeeeeeeeeeee');
    });

    // Make the HTTP request:
    this.http.get('http://localhost:3000/productdetail?productid='+this.value).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
      console.log(this.results);
    });
  }

	
}

