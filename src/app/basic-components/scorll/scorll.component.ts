import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-scorll',
  templateUrl: './scorll.component.html',
  styleUrls: ['./scorll.component.scss'],
})
export class ScorllComponent implements OnInit {
  buttonLabel = 'V';
  isScrollAtTop = true;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // Check if the scroll position is at the top or not
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    // Update the isScrollAtTop property based on the scroll position
    this.isScrollAtTop = scrollPosition === 0 ? true : false;
  }

  scroll() {
    if (this.document.documentElement.scrollTop > 0) {
      this.document.documentElement.scrollTop = 0;
    } else {
      this.document.documentElement.scrollTop =
        this.document.documentElement.scrollHeight;
    }
  }
}
