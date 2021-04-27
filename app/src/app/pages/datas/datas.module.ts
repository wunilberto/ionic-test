import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatasPageRoutingModule } from './datas-routing.module';

import { DatasPage } from './datas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatasPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [DatasPage]
})
export class DatasPageModule {}
