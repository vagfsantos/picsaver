import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainContentComponent } from './main-content.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import { PictureComponent } from './picture/picture.component';

@NgModule({
  declarations: [
    MainContentComponent,
    PictureListComponent,
    PictureComponent
  ],

  imports: [
    CommonModule
  ],

  exports: [
    MainContentComponent
  ]
})

export class MainContentModule {

}
