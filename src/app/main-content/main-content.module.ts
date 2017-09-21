import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainContentComponent } from './main-content.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import { PictureComponent } from './picture/picture.component';
import { NoPicutureFoundComponent } from './no-picture-found/no-picture-found.component';
import { PictureSectionComponent } from './picture-section/picture-section.component';
import { PictureFormComponent } from './picture-form/picture-form.component';

import { PictureService } from './picture/picture.service';

import { RoutingSetting } from './../app.route';

@NgModule({
  declarations: [
    MainContentComponent,
    PictureListComponent,
    PictureComponent,
    NoPicutureFoundComponent,
    PictureSectionComponent,
    PictureFormComponent
  ],

  imports: [
    CommonModule,
    RoutingSetting
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
