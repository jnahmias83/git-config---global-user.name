import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses : any = [
    {Number:'292100',Name:"Angular"},
    {Number:'292101',Name:"Python"},
    {Number:'292102',Name:"Java"},
    {Number:'292103',Name:"MongoDB"}
  ];

  selectedCourse : string = '';
  showStudentComponent : boolean = false;

  constructor() { }

  showAngular() : void {
    this.selectedCourse = 'Angular';
    this.showStudentComponent = true;
    console.log('Angular');
  }

  showPython() : void {
    this.selectedCourse = 'Python';
    this.showStudentComponent = true;
  }

  showJava() : void {
    this.selectedCourse = 'Java';
    this.showStudentComponent = true;
  }

  showMongo() : void {
    this.selectedCourse = 'MongoDB';
    this.showStudentComponent = true;
  }

  ngOnInit(): void {
  }
}