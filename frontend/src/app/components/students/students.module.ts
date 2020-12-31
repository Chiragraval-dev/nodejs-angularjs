import { AngularMaterialModule } from './../../angular-material.module';
import { StudentsService } from './../../services/students.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { MessageModule } from './../../shared/components/message/message.module';
import { CreateStudentModule } from './create-student/create-student.module';

@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    CreateStudentModule,
    MessageModule,
    AngularMaterialModule
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule { }
