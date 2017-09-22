import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Picture } from './../picture/picture.interface';
import { PictureService } from './../picture/picture.service';

@Component({
  selector: 'app-picture-form',
  templateUrl: './picture-form.component.html',
  styleUrls: ['./picture-form.component.scss']
})

export class PictureFormComponent implements OnInit {
  picture: Picture
  editMode: boolean

  constructor(
    private pictureService: PictureService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    this.picture = new Picture;
  }

  savePicture(e) {
    e.preventDefault()
    let promise;

    if( this.editMode ) {
      promise = this.pictureService.updateImage(this.picture)
    } else {
      this.picture.id = new Date().getTime()
      promise = this.pictureService.saveImage(this.picture)
    }

    promise.then(newPics => {
      this.router.navigate(['/'])
    })
  }

  ngOnInit() {
    this.activedRoute.params
      .subscribe( (params: Params) => {
          if( params.id ) {
            let picked = this.pictureService.getImageById(params.id)
            this.editMode = true
            this.picture = picked
          }
        })
  }
}
