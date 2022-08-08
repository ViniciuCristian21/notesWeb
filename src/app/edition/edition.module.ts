import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditionPageRoutingModule } from './edition-routing.module';

import { EditionPage } from './edition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditionPageRoutingModule
  ],
  declarations: [EditionPage]
})
export class EditionPageModule {}
