import { AngularMaterialModule } from './../../../angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateStudentRoutingModule } from './create-student-routing.module';
import { CreateStudentComponent } from './create-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateStudentComponent],
  exports: [CreateStudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateStudentRoutingModule,
    AngularMaterialModule
  ]
})
export class CreateStudentModule { }
