
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export class User {
  constructor(
    public email: string,
    public password: string,
    public role: string) { }
}

var users = [
  new User('admin@admin.com','12345','admin'),
  new User('customer@gmail.com','12345','customer'),
  new User('salesperon@gmail.com','12345','salesperson'),
  
];

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router){}

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['/login']);
  }

  login(user) {
    const authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser) {
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      this._router.navigate(['/admin']);
      return true;
    }
    return false;

  }

   checkCredentials( ) {
    if (localStorage.getItem('user') === null) {
        this._router.navigate(['Login']);
    }
  }
}
