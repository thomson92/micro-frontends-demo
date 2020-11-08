import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionalDataModule } from './additional-data.module';


const routes: Routes = [
  { path: '', component: AdditionalDataModule },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdditionalDataRoutingModule { }
