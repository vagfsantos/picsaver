import { Picture } from './picture/picture.interface';
import { Component, OnInit } from '@angular/core';

import { PictureService } from './picture/picture.service';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit{
  pictureList: Picture []

  constructor(private pictureService: PictureService) {

  }

  ngOnInit() {
    this.pictureService.getImages()
      .then( (pics: Picture[]) => this.pictureList = pics )
      .catch( error => console.log(error) )
  }

  addNewImage(event) {

  }

  saveImage(picture: Picture[]) {
    this.pictureService.saveImages(picture)
  }
}
