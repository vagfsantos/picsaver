import { Component, Input } from '@angular/core';
import { Picture } from './../../picture/picture.interface';

@Component({
  selector: 'app-picture-form-preview',
  templateUrl: './picture-form-preview.component.html',
  styleUrls: ['./picture-form-preview.component.scss']
})

export class PictureFormPreviewComponent {
  @Input() picture: Picture
}
