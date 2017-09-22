import { Picture } from './picture.interface';
import { Injectable } from "@angular/core";

@Injectable()
export class PictureService {
  private localStoreId: string = 'pictures'

  getStore() {
    return window.localStorage.getItem( this.localStoreId )
  }

  saveStore(picArray:Picture []) {
    window.localStorage.setItem( this.localStoreId, JSON.stringify(picArray) )
  }

  getImages(): Promise<Object> {
    return new Promise( (resolve, reject) => {
      let pictures = this.getStore()
      if( pictures ) resolve(JSON.parse(pictures))
      else reject(pictures)
    })
  }

  saveImage( pic: Picture ): Promise<Object> {
    return new Promise( (resolve, reject) => {
      let pictures = JSON.parse(this.getStore()) || []
      pictures.push(pic)
      this.saveStore(pictures)
      let newArray = this.getStore()
      resolve( JSON.parse(newArray) )
    })
  }

  getImageById(id: number) {
    let pictures = JSON.parse(this.getStore())
    let picked = pictures.find(pic => pic.id == id)
    return picked
  }

  updateImage(pic: Picture): Promise<Object> {
    return new Promise( (resolve, reject) => {
      let pictures = JSON.parse(this.getStore())
      let updatedArray = pictures.map(currentPic => {
        if( pic.id == currentPic.id ) {
          return pic;
        }
        return currentPic;
      })
      this.saveStore(updatedArray)
      let newArray = this.getStore()
      resolve( JSON.parse(newArray) )
    })
  }
}
