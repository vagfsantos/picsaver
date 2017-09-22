import { Component, Input } from '@angular/core';

import { Picture } from './../picture/picture.interface';
import { PictureService } from './../picture/picture.service';

@Component({
  selector: 'app-picture-section',
  templateUrl: './picture-section.component.html'
})

export class PictureSectionComponent {
  pictureList: Picture []

  constructor(private pictureService: PictureService) {

  }

  ngOnInit() {
    this.pictureService.getImages()
      .then( (pics: Picture[]) => this.pictureList = pics)
      .catch( error => console.log(error) )
  }
}
