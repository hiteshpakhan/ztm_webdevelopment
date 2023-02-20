# descovering lifecycle hooks
they are functions that run during events in our component or we can say they run when somthings changes about the commponent

there are many lifecycle hooks we will start from following 

* constructor function 

this is not technically hook but its a default hook in js, it will get call during initiallization of our component, constructor function will run automatically whenever we will run our component

so go to file post.component.ts and make the constructor

        export class PostComponent {
            @Input("img") postImg = ""
            @Output() imgSelected = new EventEmitter<string>()  

            constructor(){
                console.log("constructor component has been called")
            }
        }

there another hook that runs when our comoponent is iniatilized

* OnInit()

we will use it inside our post.component.ts

        import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';     // here we have imported the interface named OnInit

now you can apply interface to object by implements keyword 

when we are defining the hook interface function we need to put ng____ prefix in front of them

        export class PostComponent implements OnInit {       // here we have implemented the OnInit function 
            @Input("img") postImg = ""
            @Output() imgSelected = new EventEmitter<string>()  

            constructor(){
                console.log("constructor component has been called")
            }

            ngOnInit(){     //when we are defining the hook interface function we need to put ng____ prefix in front of them
                console.log("ngOnInit has been called")
            }
        }


* if you want the list of the all lifecycle hooks of the angular you can go to the following link

        https://angular.io/guide/lifecycle-hooks#lifecycle-event-sequence


* OnChanges, DoCheck
we will import interfaces

        import { Component, Input, EventEmitter, Output, OnInit, DoCheck, OnChanges } from '@angular/core';     //here we have imported the OnCheck and OnChange hooks

now we will implement these to the class if you are implementing more than one interfaces you can use of quama to seprate them

        export class PostComponent implements OnInit, OnChanges, DoCheck {
            .
            .
            .
        }

now we will define both function 


# view vs content

view : all the conent inside the templet html file called view 

        for example :
        all the data inside ___.component.html file

content : projected content from parent component 

        for example :
        <app-post>
            <p>some caption</p>
        </app-post>
        <!-- here all the content inside app-post means hole p tag refers as content -->

* there are 4 another lifecycle hooks 2 for view and 2 for content :AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked

first we will import them on top of the post.component.ts file

        import { Component, Input, EventEmitter, Output, OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

now we will implemente this interfaces to the class

        export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {       
            .
            .
            .
        }

now we will declare thise functions inside class

        export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {       
                @Input("img") postImg = ""                
                @Output() imgSelected = new EventEmitter<string>()

                constructor(){
                console.log("constructor component has been called", this.postImg)
                }

                ngOnInit(){
                console.log("ngOnInit function has been called", this.postImg)
                }

                ngOnChanges(){
                console.log("ngOnChanges function has been called")      
                }

                ngDoCheck(){
                console.log("ngDoCheck function has been called")         
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
        }

* there still last one hook that we will see called OnDestroy

we will first import this interface

        import { Component, Input, EventEmitter, Output, OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

then we will implement this on class

        export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {       
                .
                .
                .
        }

after this we will define it inside class

        export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {        
                @Input("img") postImg = ""                
                @Output() imgSelected = new EventEmitter<string>()

                constructor(){
                console.log("constructor component has been called", this.postImg)
                }

                ngOnInit(){
                console.log("ngOnInit function has been called", this.postImg)
                }

                ngOnChanges(){
                console.log("ngOnChanges function has been called")      
                }

                ngDoCheck(){
                console.log("ngDoCheck function has been called")         
                }

                ngAfterContentInit(){
                console.log("ngAfterContentInit function has been called")
                } 
                
                ngAfterContentChecked(){
                        console.log("ngAfterContentChecked function has been called")
                } 
                
                ngAfterViewInit(){
                        console.log("ngAfterViewInit function has been called")
                }
                
                ngAfterViewChecked(){
                        console.log("ngAfterViewCheckedhas function has been called")
                }

                ngOnDestroy(){
                        console.log("ngOnDestroy has been call")  //unfortunatly we havent learn how to destroy function yet so we will use this in future
                }    
        }