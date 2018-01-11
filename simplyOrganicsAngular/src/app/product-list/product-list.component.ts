import { Component, AfterViewInit, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare var jQuery:any;
declare var $:any;

@Component({
 // templateUrl: './product-list.component.html',
 template: `<datatable [dataset]=results>
                  <column [value]="'p_id'" [header]="'Id'"></column>
                  <column [value]="'p_title'" [header]="'Name'"></column>
                  <column [value]="'p_quant'" [header]="'Quantity'"></column>
                  
             </datatable>
             `,
})


export class ProductListComponent implements OnInit, AfterViewInit{

  results: object[];
  
   // Inject HttpClient into your component or service.
   constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://localhost:3000/productslist').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
      console.log(this.results);
    });
  }

	ngAfterViewInit() {
		$('#example-table').DataTable({
		  pageLength: 10,
		  fixedHeader: true,
		  dom: '<"html5buttons"B>lTfgitp',
		  buttons: [
		      {extend: 'copy'},
		      {extend: 'csv'},
		      {extend: 'excel', title: 'ExampleFile'},
		      {extend: 'pdf', title: 'ExampleFile'},
		      {extend: 'print',}
		  ]
		});
	}
}
