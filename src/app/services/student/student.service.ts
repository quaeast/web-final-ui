import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "../config/config.service";
import {Student} from "../../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  getStudent() {
    return this.http
      .get<Student>(ConfigService.get('api') + 'student/', {
        headers: {'Authorization': 'JWT ' + ConfigService.get('token')},
      });
  }

  putStudent(student: Student) {
    return  this.http.post(
      ConfigService.get('api') + 'student/',
      student,
      {
        headers: {'Authorization': 'JWT ' + ConfigService.get('token')},
      }
    )
  }
}
