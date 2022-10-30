import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {
  @Input() selectedCourse : string = "";
  studentsList : any = [
    {ID:'01',Name:'Idan Guy',Course:'Angular'},
    {ID:'02',Name:'Sharon Tal',Course:'Angular'},
    {ID:'03',Name:'Yuval Shir',Course:'Python'},
    {ID:'04',Name:'Adam Gil',Course:'Java'},
    {ID:'05',Name:'Amir Ravve',Course:'Python'},
    {ID:'06',Name:'Ravit Levy',Course:'MongoDB'},
    {ID:'07',Name:'Liav Cohen',Course:'Java'},
    {ID:'08',Name:'Yossi Ben',Course:'Angular'},
  ];

  constructor() { }

  ngOnInit(): void {
  }
}