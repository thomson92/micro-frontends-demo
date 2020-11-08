import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionalDataComponent } from './additional-data/additional-data.component';
import { AdditionalDataRoutingModule } from './additional-data-router.module';



@NgModule({
  declarations: [AdditionalDataComponent],
  imports: [
    CommonModule,
    AdditionalDataRoutingModule
  ]
})
export class AdditionalDataModule { }
