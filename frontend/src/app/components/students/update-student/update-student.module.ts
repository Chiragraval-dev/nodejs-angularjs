import { AngularMaterialModule } from './../../../angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateStudentRoutingModule } from './update-student-routing.module';
import { UpdateStudentComponent } from './update-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpdateStudentComponent],
  exports: [UpdateStudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UpdateStudentRoutingModule,
    AngularMaterialModule
  ]
})
export class UpdateStudentModule { }
