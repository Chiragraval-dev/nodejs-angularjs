import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'create', loadChildren: () => import('./create-student/create-student.module').then(m => m.CreateStudentModule) },
  { path: 'update/:id', loadChildren: () => import('./update-student/update-student.module').then(m => m.UpdateStudentModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
