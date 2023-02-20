import { Component, Input, EventEmitter, Output, OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {       
  @Input("img") postImg = ""     // here we are calling the Input decorator as a function we dont need to pass in configuration options to decorator
  @Output() imgSelected = new EventEmitter<string>()  //here we are creating an event but we are inside angular so that we dont have to put the prefix on_____ as we always use for events outside the angular

  constructor(){
    console.log("constructor component has been called", this.postImg)
  }

  ngOnInit(){     //it will run when the component will initialized with the data
    console.log("ngOnInit function has been called", this.postImg)
  }

  ngOnChanges(){
    console.log("ngOnChanges function has been called")      // this function will run whenever changes are made to the component
  }

  ngDoCheck(){
    console.log("ngDoCheck function has been called")        // this will run after change detection cycle has occoure    //the purpose of this ngDoCheck function to perform updates that angular may miss 
  }

  ngAfterContentInit(){   //it will run after content has been initialized
    console.log("ngAfterContentInit function has been called")
  } 
  
  ngAfterContentChecked(){  //this function will run after the content has been chacked for changes
    console.log("ngAfterContentChecked function has been called")
  } 
  
  ngAfterViewInit(){    //this will run when the conponents template has been initialized
    console.log("ngAfterViewInit function has been called")
  }
  
  ngAfterViewChecked(){   //this function will run when the components template has been checked
    console.log("ngAfterViewCheckedhas function has been called")
    // note : here the ContentInit and ViewInit functions will run only once
    // note : but the viewChecked and ContentChecked can run multiple times they will be called whenever the changedetection system will run
  }        

  ngOnDestroy(){
    console.log("ngOnDestroy has been call")  //unfortunatly we havent learn how to destroy function yet so we will use this in future
  }

}