import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {}
