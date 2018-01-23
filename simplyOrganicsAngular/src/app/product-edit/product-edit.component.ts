import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
//import {Hero} from '../../../models/product.model';
import {Product} from '../product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import {MeasureService} from '../measure.service';
import {Measure} from '../measure';
import {CurrencyService} from '../currency.service';
import {Currency} from '../currency';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{


  public myForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes
  public measures: Measure[];
  public currencies: Currency[];

  constructor(
    private _fb: FormBuilder, 
    private http: HttpClient,
    private measureService: MeasureService,
    private currencyService: CurrencyService,

  ) { } // form builder simplify form initialization
  results: object[];
  
  ngOnInit() {

    this.getMeasures();
    this.getCurrencies();
      // the short way
    this.myForm = this._fb.group({
      prod_id: [''],
      prod_name: [''] ,
      prod_desc: [''] ,
      prod_measure: [this.measures] ,
      prod_currency: [this.currencies],
      prod_price: [''],
      cat_id: [''] ,
      quant: [''] ,
      price_dollar: [''] ,
      price_rupee: [''] ,
      price_dirham: [''] ,
      store: [''] ,
      warehouse: [''] ,
      van: [''] ,
      
  });

  
  }

  getMeasures(): void {
    this.measureService.getMeasures()
      .subscribe(measures =>  {this.measures = measures, console.log(measures, "measures")},
                 err => {console.log(err);}
      );
  }

  getCurrencies(): void {
    this.currencyService.getCurrencies()
      .subscribe(currencies =>  {this.currencies = currencies, console.log(currencies, "currencies")},
                 err => {console.log(err);}
      );
  }

  save(model: Product, isValid: boolean) {

    console.log(model, isValid);
    this.submitted = true; // set form submit to true
    
    var body = model;
    console.log("body-----", body);
    var bodySt = JSON.stringify(body);
    console.log("body-----", bodySt);
    
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http
      .post('http://localhost:3000/productedit',
        body, {
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        })
        .subscribe(data => {
              alert('ok');
        }, error => {
            console.log(error);
        });
    
    }

}
