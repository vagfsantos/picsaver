import { Picture } from './picture/picture.interface';
import { Component } from '@angular/core';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent {
    pictureList: Picture [];

    constructor() {
        this.pictureList = [
            new Picture('sports', 'this is a description', 'http://lorempixel.com/400/200/sports'),
            new Picture('sports', 'this is a description', 'http://lorempixel.com/400/200/sports'),
            new Picture('sports', 'this is a description', 'http://lorempixel.com/400/200/sports'),
            new Picture('sports', 'this is a description', 'http://lorempixel.com/400/200/sports')
        ]
    }
}
