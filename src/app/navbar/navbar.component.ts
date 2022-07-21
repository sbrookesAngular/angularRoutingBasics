import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navItems = [{linkName: 'Home'}, {linkName: 'i3'}, {linkName: 'i5'}, {linkName: 'i7'}, {linkName: 'i9'}];

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
