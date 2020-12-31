import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DsTableComponent } from './ds-table.component';

const routes: Routes = [{ path: '', component: DsTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsTableRoutingModule { }
