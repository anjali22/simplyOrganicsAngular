import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
//import {Hero} from '../../../models/product.model';
//import {Product} from '../product.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RequestOptions } from '@angular/http';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public inventoryForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  constructor(private _fb: FormBuilder, private http: HttpClient) { }
  results: object[];
  
  ngOnInit() {
    this.inventoryForm = this._fb.group({
      productName: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      productQuantity: 1 ,
      moveTo: 'Van',
      moveFrom: 'Warehouse'
  });
  }

}


