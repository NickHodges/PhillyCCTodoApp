import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentTab: number;

  constructor() { }

  ngOnInit() { }

  onLinkClick(event: MatTabChangeEvent) {
    this.currentTab = event.index;
  }
}
