import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private anchoDocumento: number = document.documentElement.scrollWidth;
  private altoDocumento: number = document.documentElement.scrollHeight;

  constructor() { }

  ngOnInit(): void {
    //document.getElementById('header').style.width = `${this.anchoDocumento}px`;
    //document.getElementById('header').style.height = `${this.altoDocumento}px`;
  }

}
