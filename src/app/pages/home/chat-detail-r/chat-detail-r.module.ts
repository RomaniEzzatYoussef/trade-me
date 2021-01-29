import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatDetailPageRoutingModule } from './chat-detail-r-routing.module';

import { ChatDetailRPage } from './chat-detail-r.page';
import { AutosizeModule } from 'ngx-autosize';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatDetailPageRoutingModule,
    AutosizeModule
  ],
  declarations: [ChatDetailRPage]
})
export class ChatDetailPageModule {}
