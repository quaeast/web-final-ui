import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

let service: string = 'https://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=AAPL';
let service2: string = 'http://192.168.31.62:8080/captchaImage';
let token: string;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  getCaptcha() {
    return this.http.get(service2);
  }
}
