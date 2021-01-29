import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {HomePage} from '../pages/home/home.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: TabsPage,
  // },
  // {
  //   path: 'status',
  //   loadChildren: () => import('./status/status.module').then(m => m.StatusPageModule)
  // },
  // {
  //   path: 'calls',
  //   loadChildren: () => import('./calls/calls.module').then(m => m.CallsPageModule)
  // },
  // {
  //   path: 'chats',
  //   loadChildren: () => import('./chats/chats.module').then(m => m.ChatsPageModule)
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: '/tabs/status',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'status',
        children: [
          {
            path: '',
            loadChildren: () => import('./status/status.module').then(m => m.StatusPageModule)
          },
        ]
      },
      {
        path: 'calls',
        children: [
          {
            path: '',
            loadChildren: () => import('./calls/calls.module').then(m => m.CallsPageModule)
          },
        ]
      },
      {
        path: 'chats',
        children: [
          {
            path: '',
            loadChildren: () => import('./chats/chats.module').then(m => m.ChatsPageModule)
          },
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/status',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/status',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
