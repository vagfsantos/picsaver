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

    saveImage(event) {
      this.pictureService.saveImages([{
        id: 10,
        title: 'title',
        description: 'description',
        imageUrl: 'Image Url'
      }])
    }
}
