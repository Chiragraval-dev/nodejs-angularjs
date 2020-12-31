import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { HttpErrorHandler, MessageService } from '../../services';


@NgModule({
  declarations: [MessageComponent],
  exports:[MessageComponent],
  imports: [
    CommonModule,
    MessageRoutingModule
  ],
  providers:[
    MessageService,
    HttpErrorHandler
  ]
})
export class MessageModule { }
