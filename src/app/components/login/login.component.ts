import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "../../services/login/login.service";
import {ConfigService} from "../../services/config/config.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  passwordVisible = false;
  loginInformation: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.loginService
      .getToken(this.username, this.password)
      .subscribe(
        response => {
          ConfigService.set('token', response['token']);
          this.router.navigate(['/layout/billboard']);
        },
        error => this.loginInformation = 'password wrong'
      );
  }
}
