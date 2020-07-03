import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "../../services/login/login.service";
import {ConfigService} from "../../services/config/config.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd";


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
    private router: Router,
    private message: NzMessageService
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
        error => this.message.info('password wrong')
      );
  }

  onLogon() {
    this.loginService
      .logOn(this.username, '', this.password)
      .subscribe(
        response => this.message.info('logon succeed')
        ,
        error => this.message.info('invalid username')
      )
  }
}
