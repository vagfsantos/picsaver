import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainContentComponent } from './main-content.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import { PictureComponent } from './picture/picture.component';
import { NoPicutureFoundComponent } from './no-picture-found/no-picture-found.component';
import { PictureSectionComponent } from './picture-section/picture-section.component';
import { PictureFormComponent } from './picture-form/picture-form.component';
import { PictureFormPreviewComponent } from './picture-form/picture-form-preview/picture-form-preview.component';

import { PictureService } from './picture/picture.service';

import { AppRouteModule } from './../app.route';



@NgModule({
  declarations: [
    MainContentComponent,
    PictureListComponent,
    PictureComponent,
    NoPicutureFoundComponent,
    PictureSectionComponent,
    PictureFormComponent,
    PictureFormPreviewComponent
  ],

  imports: [
    CommonModule,
    AppRouteModule,
    FormsModule
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
