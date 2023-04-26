import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './form/buttons/button/button.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { FooterComponent } from './footer/footer.component';
import { ScorllComponent } from './scorll/scorll.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    LoadingComponent,
    FooterComponent,
    ScorllComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ButtonComponent,
    HeaderComponent,
    LoadingComponent,
    FooterComponent,
    ScorllComponent,
  ],
  providers: [],
})
export class BasicComponentsModule {}
