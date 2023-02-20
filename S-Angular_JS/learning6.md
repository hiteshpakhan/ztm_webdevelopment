# how to create a component
there are two types of creating a component you can create it by manually or you can use the cli command to create a component

you can use the following command to create the component 

        syntax:
        ng generate component Component_Name
        example:
        ng generate component post

now when you see inside the src inside the app you will see the name of the component folder post that is created with the new files

and also the app.module.ts file inside the app folder has been update , 
inside the app.module.ts file you will see that it has imported the new post component
        
        import { PostComponent } from './post/post.component';

and also it has register the component to the module inside the declarations array

        declarations:[  
            AppComponent, PostComponent  
        ],

# now we are going to render image inside the post component

now we are going to remove the img tag from app.component.html and past it into the post.component.html

        <img [src]="postImg" >   <!-- here we have just change the name of the variable so it will not confuse us but if you want you can let it be the same -->

in the app component it will remain the imgUrl both the imgUrl and postImg will hold the same value

now inside the app.component.ts file inside teh class we will add the property postImg and provide it with "" empty string and now we have to update this value by the value pass down by the parent component

        export class PostComponent {
          postImg = ""
        }

to get the value by parent component we have to first give the permission to accept the values

for giving permission we can tell angular to permit parent component by adding a decorator 

for that we have to add a another library feature called Input, Input is a decorator, decorator is not only for the classes it can also be applied for properties

        import { Component, Input } from '@angular/core';

 and now we are gona apply this decorator to the postImg property

        export class PostComponent {
          @Input() postImg = ""     // here we are calling the Input decorator as a function we dont need to pass in configuration options to decorator
        }

now we ahve to attach post component inside the app component template for that we first check the value of the selector property from post.component.ts file

        selector: 'app-post',

now we have to put app-post named html tag inside the parent component app.component.html

        <input (keyup)="changeImage($event)" [value]="imgUrl">  
        
        <app-post></app-post>     <!-- here we have attach the post component inside app template file -->

        <p> hi {{ name }} and also you can use various property {{ name.toUpperCase() }} </p>
        <h1> {{ sampleName() }} </h1>

now we have to pass down the value to the post component for this we will use the property binding and pass the imgUrl value to the postImg

        <input (keyup)="changeImage($event)" [value]="imgUrl">  
        
        <app-post [postImg]="imgUrl" ></app-post>

        <p> hi {{ name }} and also you can use various property {{ name.toUpperCase() }} </p>
        <h1> {{ sampleName() }} </h1>


# alias 
its not that important for now but its a cool feature if you want you can learn it 

when we are importing the data by Input decorator to the property inside the class we can use the different name for the data for using it without change the actual property name

inside the post.component.ts we have give the data another name "img"

        export class PostComponent {
          @Input("img") postImg = ""     // here we given the img name to the data that we get from the parent component without changing the name of the property
        }

so now we can print the data from the alias given name so inside the post.component.html file we will not use the name postImg insted will use the img for binding

        <app-post [img]="imgUrl" ></app-post>
