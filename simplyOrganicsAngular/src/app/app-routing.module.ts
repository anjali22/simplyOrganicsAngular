import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin/admin.component";
//import { HomeComponent } from "./home/home.component";
import { FullLayout, SimpleLayout} from './admin/layouts'
import { HomeComponent } from "./admin/pages/home/home.component";
import { Dashboard2Component } from './admin/pages/dashboard_2/dashboard_2.component';
import { Dashboard3Component } from './admin/pages/dashboard_3/dashboard_3.component';
import { Dashboard4Component } from './admin/pages/dashboard_4/dashboard_4.component';
import { Dashboard5Component } from './admin/pages/dashboard_5/dashboard_5.component';
import { Datatable } from './admin/pages/datatable/datatable.component';
import { ChartJS } from './admin/pages/chartjs/chartjs.component';
import { Peity } from './admin/pages/peity/peity.component';
import { SparklineComponent } from './admin/pages/sparkline/sparkline.component';
import { MorrisChartComponent } from './admin/pages/morris-chart/morris-chart.component';
import { IconsComponent } from './admin/pages/icons/icons.component';
import { WidgetsComponent } from './admin/pages/widgets/widgets.component';
import { Mailbox } from './admin/pages/mailbox/mailbox.component';
import { MailView } from './admin/pages/mail.view/mail.view.component';
import { MailCompose } from './admin/pages/mail.compose/mail.compose.component';
import { Blog } from './admin/pages/blog/blog.component';
import { Article } from './admin/pages/article/article.component';
import { EcommerceProdutsBoard } from './admin/pages/ecommerce_products_board/ecommerce_products_board.component';
import { EcommerceProdutsList } from './admin/pages/ecommerce_products_list/ecommerce_products_list.component';
import { EcommerceProdutsEdit } from './admin/pages/ecommerce_products_edit/ecommerce_products_edit.component';
import { InvoiceComponent } from './admin/pages/invoice/invoice.component';
import { TimelineComponent } from './admin/pages/timeline/timeline.component';
import { FaqComponent } from './admin/pages/faq/faq.component';
import { ProfileComponent } from './admin/pages/profile/profile.component';
import { SearchComponent } from './admin/pages/search/search.component';
import { LoginComponent } from './admin/pages/login/login.component';
import { LoginDarkComponent } from './admin/pages/login-dark/login-dark.component';
import { RegisterComponent } from './admin/pages/register/register.component';
import { RegisterDarkComponent } from './admin/pages/register-dark/register-dark.component';
import { ForgotPasswordComponent } from './admin/pages/forgot-password/forgot-password.component';
import { LockscreenComponent } from './admin/pages/lockscreen/lockscreen.component';
import { Error404Component } from './admin/pages/error-404/error-404.component';
import { Error500Component } from './admin/pages/error-500/error-500.component';
import { AppFooter, AppHeader, AppSidebar, AppThemeConfig, SessionModal} from './admin/components/index'


import { appRoutes } from './admin/admin.routing'

const routes: Routes = [
   {path: '', redirectTo:'/admin', pathMatch: 'full'},
    ...appRoutes,
   {path: 'admin', component: AdminComponent}
   //{path: 'home', component: HomeComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  
  declarations: [
    FullLayout, SimpleLayout,
    HomeComponent,
    Dashboard2Component, Dashboard3Component, Dashboard4Component, Dashboard5Component, Datatable, 
    ChartJS, Peity, SparklineComponent, MorrisChartComponent, IconsComponent, WidgetsComponent,
    Mailbox, MailView, MailCompose, Blog, Article, EcommerceProdutsBoard, EcommerceProdutsList, EcommerceProdutsEdit, 
    InvoiceComponent, TimelineComponent, FaqComponent, ProfileComponent, SearchComponent,
    LoginComponent,
    LoginDarkComponent,
    RegisterComponent,
    RegisterDarkComponent,
    ForgotPasswordComponent,
    LockscreenComponent,
    Error404Component,
    Error500Component,
    AppSidebar,
    AppFooter,
    AppFooter,
    AppHeader,
    SessionModal,
    AppThemeConfig
  ]
})
export class AppRoutingModule {}