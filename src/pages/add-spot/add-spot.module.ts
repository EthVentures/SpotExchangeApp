import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSpotPage } from './add-spot';

@NgModule({
  declarations: [
    AddSpotPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSpotPage),
  ],
})
export class AddSpotPageModule {}
