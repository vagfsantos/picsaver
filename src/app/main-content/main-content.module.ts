import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainContentComponent } from './main-content.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import { PictureComponent } from './picture/picture.component';
import { NoPicutureFoundComponent } from './no-picture-found/no-picture-found.component';

import { PictureService } from './picture/picture.service';

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

  providers: [
    PictureService
  ],

  exports: [
    MainContentComponent
  ]
})

export class MainContentModule {

}
