import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selected: any[];

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 500; i++) {
      this.users.push({
        id: i,
        name: 'User ' + i.toString(),
        creation: new Date(),
        color: 'blue',
        selected: true
      })
    }
  }
users: any[] = [
        {
            id: 1,
            name: "Wendell",
            creation: new Date(),
            color: "red",
            selected: true
        }
    ];
}