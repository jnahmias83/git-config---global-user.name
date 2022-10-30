import { Component,ViewChild } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nested';
  studentsFlag: boolean = false;
  coursesFlag: boolean = false;
  homeFlag: boolean = true;

  @ViewChild('child', { static: true }) coursesList!: CoursesListComponent;
  @ViewChild('child', { static: true }) card!: CardComponent;
  
  showHome() {
    this.coursesFlag = false;
    this.studentsFlag = false;
    this.homeFlag = true;
  }

  showCourses() {
    this.coursesFlag = true;
    this.studentsFlag = false;
    this.homeFlag = false;
  }

  showStudents() {
    this.coursesFlag = false;
    this.studentsFlag = true;
    this.homeFlag = false;
  }
}
