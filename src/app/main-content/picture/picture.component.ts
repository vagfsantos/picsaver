import { Component, Input } from '@angular/core';
import { Picture } from './picture.interface';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})

export class PictureComponent {
  @Input() picture: Picture
}
