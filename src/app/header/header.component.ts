import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  imageSrc: string = 'assets/images/kh.jpg';
  imageAlt: string = 'logo';
  constructor() {}

  ngOnInit(): void {}
}
