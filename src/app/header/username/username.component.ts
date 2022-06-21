import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent implements OnInit {
  username: string = 'Mutlaq Faharan';
  initials: string = `${this.username.charAt(0)} ${this.username.charAt(
    this.username.indexOf(' ') + 1
  )}`;

  constructor() {
    console.log(this.initials);
  }

  ngOnInit(): void {}
}
