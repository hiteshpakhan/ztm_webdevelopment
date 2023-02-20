# directive
you can think of directives as custom attribute for transforming content

browsers has various attribute that can affected the behaviour of element for example the target 

sometimes its easy to use custom attribute insted of creating intire component

we can apply directives to native html elements 

you can learn more about directive in the following link

        https://angular.io/api?type=directive

for now we will see the directive that can derived from the common package

and as we see before the common package is imported through the browser module so we can start directly

there are two types of derictive 
1. attribute directive   : changes the apperiance or behavior of an element
2. structural directive   : add or remove elements from the DOM

______________________________________

## attribute directive

* ngClass 

this is the first attribute directive

it allow us to change the class of an elenent based on condiation dianamically 

inside the app.component.html we will add the < hr> tag

        <hr>

and inside the app.component.css file we will add the following 

        hr{
            margin: 20px 0;
        }

        .blue{
            background-color: blue;
            color: white;
        }

now before we can toggle the class we shoud create the property to managing the state of the class so inside app.component.ts

        blueClass = false       //this will be used as a condition for toggling the class

to dinamically binding this element switch over to the template file and before the hr tag add the button element

        <button (click)="blueClass = !blueClass" [ngClass]="{ blue : blueClass }">    <!-- directive can be added like attributes -->
        <!-- dynamically binding class to an element requires property binding so will put the ngClass inside []  -->
        <!-- ngClass can have many types the most common type of format is an object, object syntax allows us to add multiple class dynamically -->
        <!-- property : value --><!-- the property name will be the name of the class that you wanna toggle and the value will the condition it will deside to toggle-->
        Change
        </button>

        <hr>
        .
        .
        .
        
_______________________________

* ngStyle

this is also attribute directive

this directive allows us to dynamically bind the css propertyes through the style attribute

for example: in the following steps we will change the font size of the button in our template

first we should store the font size in our component class inside app.component.ts

        export class AppComponent{
           fontSizeVariable = 16   //this is the font size we want to give to the button through the ngStyle diractive
        }

in next steps we will bind this property to the buttons font size with the help of ngStyle directive for that openthe app.component.html file

        <button (click)="blueClass = !blueClass" 
        [ngClass]="{ blue : blueClass }"
        [ngStyle]="{ 'font-size.px' : fontSizeVariable }"
        >    
        <!-- and here we will add the ngStyle directive with property binding means inside [] -->
        <!-- here in the ngStyle inside the object we will give the css property inside quots and assing the value we want to give -->
        <!-- here we will add the mesuarement to our css property name with the help of .  -->
        Change
        </button>

        <hr>
        .
        .
        .

______________________________________

## structural directive

under the hood angular relays on the ng-template elament for rendaring content manipulated by a structural directive

the purpose of the ng-template element is to store one or more elements in memory

for this example we will need to open the app.component.html file at top of the file we will add the ng-template element

        <ng-template>
           <p>button is blue.</p>
        </ng-template>    <!-- angular will not display the content of this element inside the browser it will detect that we have the ng-template element and emidiately hide it -->

now we will dynamically render our ng-template content with the ngIf directive
* ngIf

this is a structural directive means it can add or remove the element from document

ngIf works simillary like the if statement in javascript it will execute a code if the condition is true in this case we will display the content based on the condition

structural directive must be apply to the ng-template element

for this example go to the app.component.html file and attach ngIf

        <ng-template [ngIf]="blueClass">   <!-- just like attribute directive we will wrap ngIf inside [] for property binding other we wont be able to use an expression as a value -->
        <!-- and wewill bind this directive to the blueClass property that we have created before that holds a boolean value -->
        <!-- we will use the same condition if the button is blue the comtent message shoud appere -->
        <!-- in the button we are toggling the the value of the blueclass so we dont have to use it again -->
            <p>button is blue.</p>
        </ng-template>  

there is another short hand way to write the structral directive

        <p *ngIf="blueClass" >button is blue. simple way for strutral directive</p>
        <!-- here we have remove the ng-template element -->
        <!-- then we will replace the [] with the * before the directive name -->
        <!-- the * is used to perform 2 actions, 
        first it will automatically wrap the element inside the <ng-template> element,
        secondly the value will be interprited as an expression so that we dont have to wrap the directive inside []  -->
        <!-- its a short hand way to write the structral directive -->

even in the next learning we will use this short hand way for structral directive

* ngFor

it is structural directive

its an diective for looping through an element with an help of array 

if you think about this a majority of app is made up of list like list of users, post, product, menuitems, etc

if you want to output multiple postwe need to copy and post multiple component and the problem comes when you have to make changes in specific component 

it would be nice if the component can output the current number of post without updating it 

we can clearly loop through an array by using the ngFor directive

for this example we will try to loop through the array of images , we are going to reuse our post element

for this open the app.component.ts here we will create the array called images

        export class AppComponent{
                imgUrl = "https://picsum.photos/id/237/200/300"
                
                images = [          //here we have past the same link as image link we have use privously
                        "https://picsum.photos/id/237/200/300",
                        "https://picsum.photos/id/237/200/300",
                        "https://picsum.photos/id/237/200/300",
                        "https://picsum.photos/id/237/200/300"
                ]
                .
                .
                .
        }

next go to the app.component.html on the < app-post> we are going to add teh ngFor directive with * characters its a shortcut for wraping it inside the < ng-template>

        <app-post 
                *ngFor="let image of images"
                [img]="imgUrl" 
                (imgSelected)="logImg($event)" >  <!-- up until now we have given the value to the directives in the form of object or properties -->
                <!-- syntax for the ngFor is : let __ for __ , here let help to create a variable and of means it will ittrate through the data you provided
        -->
                <p>we are inside the app-post component tag inside of p tag and we will render it by the help of ng-content tag in our post html file</p>
        </app-post>

but here you will see stil the img is geting is imgUrl insted of this we need to pass the value of the variable that we created image

        <app-post *ngFor="let image of images"
        [img]="image" 
        (imgSelected)="logImg($event)" >
                <p>we are inside the app-post component tag inside of p tag and we will render it by the help of ng-content tag in our post html file</p>
        </app-post>

also we can assign the index variable to each component to identify easily and also we will write the index inside the paragraph tag

        <app-post *ngFor="let image of images; let i = index"
        [img]="image" 
        (imgSelected)="logImg($event)" >
                <p> {{ i }} we are inside the app-post component tag inside of p tag and we will render it by the help of ng-content tag in our post html file</p>
        </app-post>