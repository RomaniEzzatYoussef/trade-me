import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneSignPage } from './phone-sign.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneSignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneSignPageRoutingModule {}
