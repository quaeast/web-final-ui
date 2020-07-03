import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student";
import {StudentService} from "../../services/student/student.service";

@Component({
  selector: 'app-get-answer',
  templateUrl: './get-answer.component.html',
  styleUrls: ['./get-answer.component.css']
})
export class GetAnswerComponent implements OnInit {

  public student: Student;

  constructor(
    private studentService: StudentService
  ) {
    this.student = new Student();
  }

  ngOnInit(): void {
    this.studentService.getStudent().subscribe(students => {
      this.student = students;
      console.log(students);
    });
  }

}
