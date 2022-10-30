import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  totalCourses: any = [
    { name: 'Math', info: 'Mathematical background' },
    { name: 'Java', info: ' An OOP language' },
    { name: 'English', info: 'Technical English' },
    { name: 'Sql', info: 'A rational database' },
    { name: 'Full Stack', info: 'Introduction to web developent' },
    { name: 'Angular', info: 'Web/Desktop framework for UI' },
    { name: 'Python', info: 'A programming language' },
    { name: 'MongoDB', info: 'NoSql database' }
    ]
    
  constructor() { }

  ngOnInit(): void {
  }

}
