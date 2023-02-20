# understanding comoponents

our default project also give us app component at start and the component file will be inside the app folder inside the src

name of the component file will be app.component.ts

the file name for component is like following

        component_name.component.ts    //its not compulsury but its common practice

we can empty the component file and rebuild it 

creating a component is simillar to creating a module

a small tip anything in anguler is made up of classes with decorator attach to them

first inside the app.component.ts file first we will export a class called AppComponent

        export class AppComponent {}

then we need to import the decorator called component

        import { Component } from "@angular/core";

then we can apply this decorator to the class

        @Component()
        export class AppComponent{
        }

now we need to configure the component by passing it an object to the decorator there are to required option to the component we need to provide : selector and component

        @Component({
        selector:"app-root",    //this will be the custom tag name for our component
        //the shoud be in lower case seprate with the - and not simillar to any html tag
        
        template: ` <p>hi there</p> `   //or we will give the path of the html file here by providing templateUrl
        })

we have created the basic component now we have to load it , for that we need to do some steps

first we need to import it into the module so go to the app.module.ts

at the top of the file we are going to import the app.component.ts file

        import { AppComponent } from "./app.component";

now we need to register the component with our module
we can add the array called the declaration and pass the app component that we just imported

        import { NgModule } from "@angular/core";
        import { BrowserModule } from "@angular/platform-browser";

        import { AppComponent } from "./app.component";

        @NgModule({
        imports:[
        BrowserModule
        ],
        declarations:[  //for registration component we need declaration array
        AppComponent  //this will register our component to the module
        ]
        })
        export class AppModule {}

normmaly we coudent use the component right away but here the app component is consider the root component of our app 

we need to tell angular that this is the root component so we need to pass the bootstrap array

inside this array we need pass the list of component for bootstraping other component we will pass in app component class

the bootstrap component only apply to the root module and component

        import { NgModule } from "@angular/core";
        import { BrowserModule } from "@angular/platform-browser";
        import { AppComponent } from "./app.component";

        @NgModule({
        imports:[
        BrowserModule
        ],
        declarations:[  //for registration component we need declaration array
        AppComponent  //this will register our component to the module
        ],
        bootstrap:[
        AppComponent  //inside this array we need pass the list of component for bootstraping other component 
        ]
        })
        export class AppModule {}

now if you run the app we will see on the browser

        hi there

this was the line that we pass in p tag inside the app.component.ts file

