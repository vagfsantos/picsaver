import { Picture } from './picture.interface';
import { Injectable } from "@angular/core";

@Injectable()
export class PictureService {
  private localStoreId: string = 'pictures'

  getImages(): Promise<Object> {
    return new Promise( (resolve, reject) => {
      let pictures = window.localStorage.getItem( this.localStoreId )
      if( pictures ) resolve(JSON.parse(pictures))
      else reject(pictures)
    })
  }

  saveImages( pictures: Picture[] ): Promise<Object> {
    return new Promise( (resolve, reject) => {
      let picturesInStr = JSON.stringify(pictures)
      window.localStorage.setItem( this.localStoreId, picturesInStr )
      let newArray = window.localStorage.getItem( this.localStoreId )
      resolve( JSON.parse(newArray) )
    })
  }
}
