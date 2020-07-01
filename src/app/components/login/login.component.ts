import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "../../services/login/login.service";
import {ConfigService} from "../../services/config/config.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  passwordVisible = false;
  token: string;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.loginService
      .getToken(this.username, this.password)
      .subscribe(
        response => {
          this.token = response['token'];
          ConfigService.set('token', response['token']);
        },
        error => this.token = 'password wrong'
      );
  }
}
