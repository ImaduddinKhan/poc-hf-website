import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() imgpath: string | any;
  @Input() alt: string | any;
  @Input() headerclass: boolean | any;
  @Input() logoclass: boolean = false;

  ngOnInit(): void {}
}
