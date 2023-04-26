import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() footerTop: string | undefined;
  @Input() footerTopLg: string | undefined;
  @Input() footerTopMd: string | undefined;
  @Input() footerTopSm: string | undefined;
}
