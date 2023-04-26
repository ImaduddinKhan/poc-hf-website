import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppSettings, defaults } from '../settings';
import { AppDirectionality } from './directionality.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  get notify(): Observable<Record<string, any>> {
    return this.notify$.asObservable();
  }
  constructor(
    @Optional() @Inject(DOCUMENT) private document: Document,
    @Inject(Directionality) public dir: AppDirectionality
  ) {}
  private notify$ = new BehaviorSubject<Record<string, any>>({});

  getOptions() {
    return this.options;
  }

  setOptions(options: AppSettings) {
    this.options = Object.assign(defaults, options);
    this.notify$.next(this.options);
  }

  private options = defaults;

  getLanguage() {
    return this.options.language;
  }

  setLanguage(lang: string) {
    this.options.language = lang;
    this.options.dir =
      this.dir.value =
      this.document.body.dir =
        lang == 'ar-SA' ? 'rtl' : 'ltr';
    this.notify$.next({ lang });
  }
}
