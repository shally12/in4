import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ActionSheetModule } from '../action-sheet/action-sheet.module';
import { AlertComponent } from './alert/alert.component';
import { from } from 'rxjs';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ActionSheetModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page, AlertComponent],
  exports: [AlertComponent]
})
export class Tab2PageModule {}
