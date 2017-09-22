import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Picture } from './../picture/picture.interface';
import { PictureService } from './../picture/picture.service';

@Component({
  selector: 'app-picture-form',
  templateUrl: './picture-form.component.html',
  styleUrls: ['./picture-form.component.scss']
})

export class PictureFormComponent {
  picture: Picture

  constructor(private pictureService: PictureService, private router: Router) {
    this.picture = new Picture;
  }

  savePicture(e) {
    e.preventDefault()
    this.picture.id = new Date().getTime()
    this.pictureService.saveImage(this.picture)
      .then(newPics => {
        this.router.navigate(['/'])
      })
  }
}
