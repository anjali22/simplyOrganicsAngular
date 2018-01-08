import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import {ElementRef} from '@angular/core';
import {AuthenticationService, User} from '../authentication.service'

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-login-dark',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/pages/auth-dark.css'],
  providers: [AuthenticationService],
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {

  public user = new User('','');
  public errorMsg = '';

  constructor(
      private _service:AuthenticationService) {}

  login() {
      if(!this._service.login(this.user)){
          this.errorMsg = 'Failed to login';
      }
  }


  ngAfterViewInit() {
    $('#login-form').validate({
        errorClass:"help-block",
        rules: {
            email: {required:true,email:true},
            password: {required:true}
        },
        highlight:function(e){$(e).closest(".form-group").addClass("has-error")},
        unhighlight:function(e){$(e).closest(".form-group").removeClass("has-error")},
    });
  }
  ngOnInit(): void {
      $('body').addClass('bg-silver');
  }
  ngOnDestroy() { 
      $('body').removeClass('bg-silver');
  }

}
