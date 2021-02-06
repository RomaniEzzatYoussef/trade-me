import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneSignPageRoutingModule } from './phone-sign-routing.module';

import { PhoneSignPage } from './phone-sign.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PhoneSignPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [PhoneSignPage]
})
export class PhoneSignPageModule {}
