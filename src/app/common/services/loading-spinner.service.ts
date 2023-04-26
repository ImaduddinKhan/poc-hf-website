import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingSpinnerService {
  constructor() {}
  public isLoading = false;

  // private showSpinnerSubject = new Subject<boolean>();
  // public showSpinner$ = this.showSpinnerSubject.asObservable();

  // private showOtherContentsSubject = new Subject<boolean>();
  // public showOtherContents$ = this.showOtherContentsSubject.asObservable();

  // private isSpinnerVisible = false;

  // showSpinner() {
  //   this.isSpinnerVisible = true;
  //   this.showSpinnerSubject.next(true);
  //   this.showOtherContentsSubject.next(false);
  // }

  // hideSpinner() {
  //   this.isSpinnerVisible = false;
  //   this.showSpinnerSubject.next(false);
  //   this.showOtherContentsSubject.next(true);
  // }

  // isOtherContentsVisible() {
  //   return !this.isSpinnerVisible;
  // }

  // public showSpinnerSubject: BehaviorSubject<boolean> =
  //   new BehaviorSubject<boolean>(false);
  // public showSpinner = this.showSpinnerSubject.asObservable();

  // show() {
  //   this.showSpinnerSubject.next(true);
  // }

  // hide() {
  //   this.showSpinnerSubject.next(false);
  // }
}
