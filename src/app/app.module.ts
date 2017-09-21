// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// libs
import { MaterializeModule } from 'angular2-materialize';

// components
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/header.component';
import { AddPictureButtonComponent } from './add-picture-button/add-picture-button.component';

// modules
import { MainContentModule } from './main-content/main-content.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AddPictureButtonComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    MainContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
