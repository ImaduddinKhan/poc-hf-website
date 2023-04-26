import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BasicComponentsModule } from 'src/app/basic-components/basic-components.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    TranslateModule,
  ],
  exports: [
    BasicComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    TranslateModule,
  ],
  providers: [],
})
export class SharedModule {}
