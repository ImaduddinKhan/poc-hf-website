import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes,
  ExtraOptions,
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/landing-page-routing.module').then(
        (m) => m.LandingPageComponentRoutingModule
      ),
  },
];

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  // relativeLinkResolution: 'legacy',
  enableTracing: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
