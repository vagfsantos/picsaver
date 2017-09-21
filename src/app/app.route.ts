import {RouterModule} from '@angular/router';
import { PictureSectionComponent } from './main-content/picture-section/picture-section.component';
import { PictureFormComponent } from './main-content/picture-form/picture-form.component';

export const RoutingSetting = RouterModule.forRoot([
  {path: '', component: PictureSectionComponent },
  {path: 'new', component: PictureFormComponent }
])
