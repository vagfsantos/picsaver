import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainContentComponent } from './main-content.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import { PictureComponent } from './picture/picture.component';
import { NoPicutureFoundComponent } from './no-picture-found/no-picture-found.component';

@NgModule({
  declarations: [
    MainContentComponent,
    PictureListComponent,
    PictureComponent,
    NoPicutureFoundComponent
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
