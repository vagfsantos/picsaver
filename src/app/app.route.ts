import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PictureSectionComponent } from './main-content/picture-section/picture-section.component';
import { PictureFormComponent } from './main-content/picture-form/picture-form.component';

const RoutingSetting: Routes = [
  {path: '', component: PictureSectionComponent },
  {path: 'new', component: PictureFormComponent },
  {path: 'edit/:id', component: PictureFormComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(RoutingSetting)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouteModule {}
