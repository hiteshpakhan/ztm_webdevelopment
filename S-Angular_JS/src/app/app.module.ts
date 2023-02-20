// default code:-

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
// ****************************************************


import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PostComponent } from './post/post.component';

@NgModule({
  imports:[
    BrowserModule
  ],
  declarations:[  //for registration component we need declaration array
    AppComponent, PostComponent  //this will register our component to the module
  ],
  //   providers: [],    //we will learn this property in future
  bootstrap:[
    AppComponent  //inside this array we need pass the list of component for bootstraping other component 
  ]
})
export class AppModule {}