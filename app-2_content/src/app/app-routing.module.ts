import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
  { path: '**', component: EmptyRouteComponent },
  // {
  //   path: '/app1/additional-data',
  //   canActivate: [CanShowAdditionalDataGuard],
  //   component: AdditionalDataComponent,
  //   loadChildren: () => import('./sub-module-demo/additional-data.module').then((m) => m.AdditionalDataModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
})
export class AppRoutingModule { }
