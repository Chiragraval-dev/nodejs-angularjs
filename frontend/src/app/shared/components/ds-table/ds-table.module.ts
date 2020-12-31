import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsTableRoutingModule } from './ds-table-routing.module';
import { DsTableComponent } from './ds-table.component';


@NgModule({
  declarations: [DsTableComponent],
  exports: [DsTableComponent],
  imports: [
    CommonModule,
    DsTableRoutingModule
  ]
})
export class DsTableModule { }
