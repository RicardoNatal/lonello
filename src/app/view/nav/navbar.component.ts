import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mobileMenu: any;

  constructor() { }

  ngOnInit(): void {
  }

  teste() {
    console.log('oi')
    this.mobileMenu = true;
  }

}
