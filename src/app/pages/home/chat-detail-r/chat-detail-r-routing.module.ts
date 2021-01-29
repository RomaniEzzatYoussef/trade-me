import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatDetailRPage } from './chat-detail-r.page';

const routes: Routes = [
  {
    path: '',
    component: ChatDetailRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatDetailPageRoutingModule {}
