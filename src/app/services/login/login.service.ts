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
      .post(ConfigService.get('api') + 'api-token-auth/', {"username": username, "password": password});
  }

  logOn(username, email, password) {
    return this.http
      .post(
        ConfigService.get('api') + 'logon/',
        {
          'username': username,
          'email': email,
          'password': password
        }
      );
  }

}
