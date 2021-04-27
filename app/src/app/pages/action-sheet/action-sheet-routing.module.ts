import { AlertPageModule } from './../alert/alert.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ActionSheetPage } from './action-sheet.page';
import { Route } from '@angular/compiler/src/core';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetPage,
    children: [
      {
        path: 'alert',
        loadChildren: () => import('../alert/alert.module').then( m => m.AlertPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ActionSheetPageRoutingModule {}
