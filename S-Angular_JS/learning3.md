# mvc {model view controler}
model     = data 

view      = html (page)

controler = (act when somthing change inside the page and change the data it control the logic of the controler)

# spliting components into many files
in angular control code will be written in the method of the component class

now we are working inside the app.component.ts file

inside the configuration object we are going to add the property called templateUrl we can pass the externel html file here

this file will act as the template for the component here we can pass the default html file that we get when creating the component app.component.html

also just like the templateUrl there is another property called styleUrls and imp note is tht the value for this property is in []

here we can pass multiple filesheet if you want here we are passing the default app.component.css file  

        import { Component } from "@angular/core";
        @Component({
            selector:"app-root",
            templateUrl: "./app.component.html",    //this is html file
            styleUrls: ["./app.component.css"]      //this is css file
        })
        export class AppComponent{}

also now we can change the html file data we will empty the file and put a ptag 

        <p>hi there we are inside app component html file</p>

also we will change the style file content with 

        p {
            color: blue;
        }

here we have seprated the html from component in another world we have seprated the view from controler


# last few files in the source directory
in the src directory we have a folder called assets this folder can store static asset files it will copid over when filal build will happen this is perfect folder to store any img , fonts or any other static file we want to include in our project

next we have the file called pollyfills.ts its a file which check the browser compitebility of our project

next file is style.css its a global css file if we want any global css in our app we can put in it

next we have text.ts file its for testing

another test file is in each component like inside app component app.component.spec.ts 


* tip : there is a property of configuration object inside the app.module.ts file called { providers: [] } that we will learn in future 
