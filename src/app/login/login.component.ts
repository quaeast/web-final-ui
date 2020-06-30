import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "../services/login.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username?: string;
  password?: string;
  passwordVisible = false;
  image: Object

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.image = this.loginService
      .getCaptcha()
      .subscribe(msg =>  console.log(msg));
  }
}
