import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidePageRoutingModule } from './slide-routing.module';

import { SlidePage } from './slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidePageRoutingModule,
    ComponentsModule
  ],
  declarations: [SlidePage]
})
export class SlidePageModule {}
