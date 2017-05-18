import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FuckingPage } from './fucking';

@NgModule({
  declarations: [
    FuckingPage,
  ],
  imports: [
    IonicPageModule.forChild(FuckingPage),
  ],
  exports: [
    FuckingPage
  ]
})
export class FuckingPageModule {}
