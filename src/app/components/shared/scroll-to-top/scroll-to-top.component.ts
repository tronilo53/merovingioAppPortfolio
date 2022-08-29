import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {

  windowScrolled: boolean;

  constructor(@Inject(DOCUMENT) private __document: Document) { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
  }
  }
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
