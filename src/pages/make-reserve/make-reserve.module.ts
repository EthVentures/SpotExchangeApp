import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeReservePage } from './make-reserve';

@NgModule({
  declarations: [
    MakeReservePage,
  ],
  imports: [
    IonicPageModule.forChild(MakeReservePage),
  ],
})
export class MakeReservePageModule {}
