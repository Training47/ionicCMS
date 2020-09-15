import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:User = new User();

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.user.username = 'testuser5';
    this.user.password = 'password';
    this.authService.logIn(this.user).subscribe(
      (response:any) => {
       console.log(response);
      }
    );

    this.authService.logOut().subscribe(
      (response:any) => {
       console.log(response);
      }
    );

    this.authService.register(this.user).subscribe(
      (response:any) => {
       console.log(response);
      }
    );

  }
} 