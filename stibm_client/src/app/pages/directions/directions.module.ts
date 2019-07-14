import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DirectionsPage } from './directions.page';
//import { SimpleFunctionModule } from 'src/app/components/simple-function/simple-function.module';
import {AutoCompleteModule} from 'ionic4-auto-complete';

const routes: Routes = [
  {
    path: '',
    component: DirectionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //SimpleFunctionModule,
    AutoCompleteModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DirectionsPage]
})
export class DirectionsPageModule {}
