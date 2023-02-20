# emitting event
if you want to send the data from child to parent component then you need emitting events

you can send data by @Output decorator

the first step to communicate with the parrent component is to emit an event 

and its even easy to work with the browser event, bowser will emit them on our behalf and we have to lission them

for this angular has a class for creating and managing a costum event called EventEmitter we will import this classfrom the @angular/core inside the post.component.ts

        import { Component, Input, EventEmitter } from '@angular/core';

and now we will create the event and the value for this property will be new instance from EventEmitter class by creating a new instance we have created an custom event also we will set the type of the event class to string

        export class PostComponent {
            @Input("img") postImg = ""
            imgSelected = new EventEmitter<string>()        //here we are creating an event but we are inside angular so that we dont have to put the prefix on_____ as we always use for events outside the angular
        }

through this instance we can emit an event whenever we want , events are the primary way for communicating from child to parent component 

there still one problem with our current event the event we created is only accessable to component itself parent component cannot lession to this event

same as bbefore angular will not let the data pass until we give the permission 

we can instruce angular to give permission to parent components by adding the @Output decorator

        import { Component, Input, EventEmitter, Output } from '@angular/core';

and we are assign the output decorator to the imgSelected property

        export class PostComponent {
          @Input("img") postImg = ""     
          @Output() imgSelected = new EventEmitter<string>()  //here we have assigned the @Output decorator
        }

now we will go to the post.component.html file 

        <img [src]="postImg" (click)="imgSelected.emit()" >  <!-- here we are going to listen for the click event remember to put event inside () -->
        <!-- now we will call the imgSelected.emit(), this .emit() is a method of EventEmmiter object by calling this we are triggering event -->

here we can send data to event listner by passing in the data to the emit() method , here we will send the postImg property

        <img [src]="postImg" (click)="imgSelected.emit(postImg)" >

now the post component is ready, the last step to listen for the event in parent component 

for this go the app.component.html file on the < app-post> component tag we have to add the custem event (imgSelected)="" now we assign the method called logImg 

        <app-post [img]="imgUrl" (imgSelected)="logImg()" ></app-post>

now we have to do two things we have to declare the method logImg() and we have to assign the data that we get by event and we can pass that data by $event

        <app-post [img]="imgUrl" (imgSelected)="logImg($event)" ></app-post>

now we will define the logImg() method for that go to the app.component.ts

        
        logImg(event: string){   //here we dont have to get event because we are only getting string
                console.log(event);
        }





* in next learning we will see he another method for passing the data between parent and child component