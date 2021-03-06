import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student";
import {StudentService} from "../../services/student/student.service";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit {

  public student: Student;
  public dateFormat = 'yyyy-MM-dd';

  constructor(
    private studentService: StudentService,
    private message: NzMessageService
  ) {
    this.student = new Student();
  }

  ngOnInit(): void {
    this.studentService.getStudent().subscribe(
      student => {
        this.student = student;
        console.log(student);
        console.log(this.student);
      },
      error => {
        this.student = new Student();
        console.log('no student at present!');
      });
  }

  onClickSubmit(): void {
    let myResult;
    this.studentService.putStudent(this.student).subscribe(result => {
      console.log(result);
      this.message.info('信息提交成功');
    });
  }
}

