import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProcurementCard} from "./procurement-card";

@NgModule({
  declarations: [ProcurementCard],
  imports: [
    CommonModule
  ],
  exports: [ProcurementCard]
})
export class CardModule { }
