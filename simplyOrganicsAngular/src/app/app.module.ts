import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router'
import { HttpModule }   from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from "./home/home.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { AppRoutingModule } from './app-routing.module';
//import { appRoutes } from './admin/admin.routing'
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ColumnComponent } from './product-list/column.component';
import { DatatableComponent } from './product-list/datatable.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    NavBarComponent,
    CustomerEditComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    AdminDashboardComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDetailComponent,
    DatatableComponent,
    ColumnComponent,
    InventoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    //appRoutes,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
