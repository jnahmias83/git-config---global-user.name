import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  collegeName : string = 'Hackeru';
  address : string = 'Shoham St 5, Ramat Gan';
  tel : string = '036135565';

  constructor() { }

  ngOnInit(): void {
  }
}
