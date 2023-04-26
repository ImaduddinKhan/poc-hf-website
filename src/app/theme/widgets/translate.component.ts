import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from 'src/app/common/services/settings.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-translate',
  template: `
    <!-- <button mat-icon-button class="matero-toolbar-button" [matMenuTriggerFor]="menu">
      <mat-icon>language</mat-icon>
    </button> -->
    <button
      *ngIf="!isSmallScreen; else small"
      mat-icon-button
      class="matero-toolbar-button"
      [matMenuTriggerFor]="menu"
    >
      <h3 style="">
        {{ language }}
        <span>
          <img src="../../../../../assets/images/globalize.svg" alt="" />
        </span>
      </h3>
      <!-- <mat-icon style="color: green">language</mat-icon> -->
    </button>

    <ng-template #small>
      <!-- <mat-sidenav-container class="container">
        <mat-sidenav #sidenav class="sidenav" mode="over" opened="false">
          <h2>test</h2>
        </mat-sidenav>
        <mat-toolbar class="toolbar">
          <button mat-icon-button (click)="sidenav.toggle()">
            <mat-icon>menu</mat-icon>
          </button>
        </mat-toolbar>
        <h2>testing</h2>
      </mat-sidenav-container> -->
      <mat-drawer class="fullscreen" #drawer>
        <!-- drawer content here -->
        <div class="drawercontents">
          <a
            class="link-animation"
            routerLink="../merchant"
            routerLinkActive="active"
            >For Merchants</a
          >
          <a
            class="link-animation"
            routerLink="../investors"
            routerLinkActive="active"
            >For Investors</a
          >

          <mat-divider></mat-divider>
          <a
            class="link-animation"
            routerLink="../merchant"
            routerLinkActive="active"
            >test2</a
          >
          <a
            class="link-animation"
            routerLink="../merchant"
            routerLinkActive="active"
            >test3</a
          >
          <a
            class="link-animation"
            routerLink="../merchant"
            routerLinkActive="active"
            >test4</a
          >
          <a
            class="link-animation"
            routerLink="../merchant"
            routerLinkActive="active"
            >test5</a
          >
        </div>
      </mat-drawer>
      <button
        mat-icon-button
        (click)="drawer.toggle(); isDrawerOpen = !isDrawerOpen"
      >
        <mat-icon>{{ isDrawerOpen ? 'close' : 'menu' }}</mat-icon>
      </button>
    </ng-template>

    <mat-menu #menu="matMenu">
      <button
        mat-menu-item
        *ngFor="let lang of langs | keyvalue"
        (click)="useLanguage(lang.key)"
      >
        <span style="font-family: Almarai;">{{ lang.value }}</span>
      </button>
    </mat-menu>
  `,
  styles: [
    `
      $breakpoint-sm: 600px;
      $breakpoint-md: 768px;
      $breakpoint-lg: 992px;
      $breakpoint-xl: 1200px;

      .mat-mdc-icon-button {
        --mat-mdc-button-persistent-ripple-color: Transparent;
        --mat-mdc-button-ripple-color: Transparent;
        /* 
        @media screen and (max-width: $breakpoint-sm) {
          display: none;
        } */
      }

      .mdc-icon-button,
      .mat-mdc-icon-button,
      .mat-unthemed,
      .mat-mdc-button-base,
      .ng-star-inserted {
        z-index: 1;
      }
      .container {
        height: 100%;
        width: 100%;
      }

      .toolbar {
        background-color: Transparent;
        color: #000;
      }

      .sidenav {
        width: 200px;
      }

      .fullscreen {
        width: 100%;
        height: max-content;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }

      .fullscreen mat-drawer-content {
        height: 100%;
      }

      .drawercontents {
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 10px;
      }

      .link-animation {
        text-decoration: none;
        color: #000;
        transition: transform 0.3s ease-in-out;
      }

      .link-animation:hover {
        transform: scale(1.1);
      }

      .link-animation:visited {
        color: #009476;
      }

      .mat-mdc-icon-button.mat-mdc-button-base {
        width: 39px;
        color: #5b0e9f;
        height: 41px;
        padding: 0;
      }

      .mat-icon {
        height: 34px;
        width: max-content;
      }

      .material-icons {
        font-size: 34px;
      }

      h3 {
        font-family: Almarai;
        display: flex;
        width: 91px;
        height: 27px;
        margin: 0;
        position: relative;
        gap: 6px;
        justify-content: center;

        @media screen and (max-width: 768px) {
          right: 63px;
        }
      }
    `,
  ],
})
export class TranslateComponent implements OnInit {
  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });
  }
  isSmallScreen = false;
  isDrawerOpen = false;
  langs = {
    'en-US': 'English',
    'ar-SA': 'العربية',
  };

  language = this.langs['en-US'];

  constructor(
    private translate: TranslateService,
    private settings: SettingsService,
    private breakpointObserver: BreakpointObserver
  ) {
    translate.addLangs(['en-US', 'ar-SA']);
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.settings.setLanguage(language);
    language == 'en-US'
      ? (language = this.langs['en-US'])
      : (language = this.langs['ar-SA']);
    this.language = language.valueOf();
  }
}
