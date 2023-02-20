interview imp question :

        what is cms
        waht is mvc
        what is pagination
        what is cli 
        what is compiler
        what is interpriter
        difference between java and c++
        what is DOM
        what is exception handling
        what object overriding
        what is palindrom
        find the factorial of a number 
        what is event handling
        what is event emmitor
        closure
        decorator
        higher order function



# two types of framework:

        1 configuration over convention
        2 convention over configuration

* configuration over convention :

        it focuses on providing you minimum setup for starting a new project 
        easy to learn
        you can add features in this type of framework like state management, routing
        example : React Js, View

* convention over configuration : 
        it has large learning curve
        features like state management, routing are not need to install seperately
        example : angular


# Angular ClI

angular cli can used to create the project, start the server, run test, deploy the app

cli is a tool which manages other tools

Example : Webpack, Bable, TypeScript, Sass, etc

to install the angular cli

        npm install -g @angular/cli

to check the angular version you can runthe following command

        ng version

to find the help you can use the following command

        ng help


# to upgread the angular project

you have to go to the Angular upgread guide following link just follow the instructions on the site and you r good to go

        https://update.angular.io/


# to create new project

        ng new project_name

# to start the project and start he server

you can use the following commands

        ng serve

        or

        npm start
# starter files that comes on creating angular project

* .editorconfig
this file stores the editor configuration file it will helpfull if we are working in

* .gitignore
this file store the files that you dont want to upload on the github

* angular.json
this file configur the workspace of our project

* karma.conf.js
it is for testing

* package.json
it contain list of dependencyes for our project

* tsconfig.******* files
this are necessary for running our application and testing

* src folder
it contains all the files that we will be using for coding the app

* main.ts entry file 
main entry file is the one which load the angular framework

and lode app code

main.ts is present inside the src file

# there are two types of compilation strategy 
compilation strategy is written inside the main.ts file

        Just-in-time
        Ahead-of-time

Just in time : 

        first server will compile our code  ..{this process will happen in just in time and ahead of time compilation }{in this compilation typescript will be convert into javascript}
        after this the browser will download our code include compiler which is very big
        then it will compile the templet, serves, module inside the browser and run the app

        larger file size
        lodes slow 
        catch errors in browser


Ahead of time :

        the cli will compile our code  ..{this process will happen in just in time and ahead of time compilation }
        then then it will compile the templet, serves, module 
        after compilation is complet then the browser will download and run our app {the compiler dosent get download in this method}

        smaller file size
        lodes faster
        catches error inside the server

        it is recomended 

# now to add the compilation platform into the main.ts file

there are two types of platform one is just in time and other is the Ahead of time 

        platformBrowser         -just in time
        platformBrowserDynamic  -Ahead of time  -default


# we are going to enable production mode

# es2015 modules

the files that you import from outside are called modules

every angular application has a module called app we can say this is a root module it can load other module

in the src directry we have the folder called app its common practice to store our module in folder 

inside the app folder we have the file app.module.ts which is imported inside the main.ts file and this file is being pass to the bootstrapModule() function

bootstrap world means to initialized a system

# app.module.ts

first inside the module there must be the way you will be export the class module

        export class AppModule {}

after exporting the class we need to tell the angular that this is a module

angular need help to identify the type of the class we are creating

we can use decorator

angular can annotiate the class as a module

at the top of the file we will import the 

        import { NgModule } from '@angular/core';

ngmodule decorator is a function to adding medidata to the class it will add necessary information to angular to understand we are creating a module 

then we will assign the decorator on top of the class 

        @NgModule()     //this decorator is a function like which is why we gave the () after the decorator
        export class AppModule { }

after this you need to import the another module which include the services that help to run browser - BrowserModule

        import { BrowserModule } from "@angular/platform-browser";

next step is to register the browser module that we imported

        @NgModule({     //here we have pass the object
           imports: [
             BrowserModule
           ]
        })