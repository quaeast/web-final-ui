import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConfigService} from "../config/config.service";


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) {
  }

  getToken(username, password) {
    return this.http
      .post(ConfigService.get('get_token'), {"username": username, "password": password});
  }

}
