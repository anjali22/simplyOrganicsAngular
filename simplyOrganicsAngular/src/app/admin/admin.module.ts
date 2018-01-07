import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AdminComponent } from './admin.component';

// Import layouts
import {
  FullLayout,
  SimpleLayout
} from './layouts';

const APP_LAYOUTS = [
  FullLayout,
  SimpleLayout
]

// Import components
import {
  AppHeader,
  AppFooter,
  AppSidebar,
  AppThemeConfig,
  SessionModal
} from './components';

const APP_COMPONENTS = [
  AppFooter,
  AppHeader,
  AppSidebar,
  AppThemeConfig,
  SessionModal
]

// Import routing module
import { AppRoutingModule } from './admin.routing';

@NgModule({
  declarations: [
    AdminComponent,
    ...APP_LAYOUTS,
    ...APP_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
