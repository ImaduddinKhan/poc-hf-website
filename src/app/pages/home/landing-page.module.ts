import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponentRoutingModule } from './landing-page-routing.module';
import { SharedModule } from 'src/app/common/shared-modules/shared.module';
import { ForMerchantsComponent } from './landing-page/for-merchants/for-merchants.component';
import { ForInvestorsComponent } from './landing-page/for-investors/for-investors.component';
import { TranslateComponent } from '../../theme/widgets/translate.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { NavItemsComponent } from './components/nav-items/nav-items.component';
import { ContactUsComponent } from './landing-page/contact-us/contact-us.component';
import { ConsumerProtectionComponent } from './landing-page/consumer-protection/consumer-protection.component';
import { InvestorsRelationsComponent } from './landing-page/investors-relations/investors-relations.component';

@NgModule({
  declarations: [
    ForMerchantsComponent,
    ForInvestorsComponent,
    TranslateComponent,
    CalculatorComponent,
    NavItemsComponent,
    ConsumerProtectionComponent,
    ContactUsComponent,
    InvestorsRelationsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LandingPageComponentRoutingModule,
    SharedModule,
  ],
})
export class LandingPageModule {}
