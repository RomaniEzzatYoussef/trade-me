import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MomentModule } from 'ngx-moment';

import { ChatGroupComponent } from './chat-group.component';
import { ChatItemComponent } from '../chat-item/chat-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentModule,
  ],
  declarations: [ChatGroupComponent, ChatItemComponent],
  exports: [ChatGroupComponent, ChatItemComponent]
})
export class ChatGroupModule { }
