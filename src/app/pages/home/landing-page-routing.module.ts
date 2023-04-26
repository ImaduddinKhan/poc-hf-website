import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/common/shared-modules/shared.module';
import { ForInvestorsComponent } from './landing-page/for-investors/for-investors.component';
import { ForMerchantsComponent } from './landing-page/for-merchants/for-merchants.component';
import { ConsumerProtectionComponent } from './landing-page/consumer-protection/consumer-protection.component';
import { ContactUsComponent } from './landing-page/contact-us/contact-us.component';
import { InvestorsRelationsComponent } from './landing-page/investors-relations/investors-relations.component';

const routes: Routes = [
  { path: '', redirectTo: 'merchant', pathMatch: 'full' },

  {
    path: 'merchant',
    component: ForMerchantsComponent,
  },
  {
    path: 'investors',
    component: ForInvestorsComponent,
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
  },
  {
    path: 'cosumerprot',
    component: ConsumerProtectionComponent,
  },
  {
    path: 'inverelations',
    component: InvestorsRelationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class LandingPageComponentRoutingModule {}
