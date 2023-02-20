
# STRING INTERPOLATION  - imp
to add any ts/js expression in template we can directly add it inside the {{ ...... }} it will process and return output of expression,
this process is called as STRING INTERPOLATION

for example:
open the file app.component.ts file and inside the class create the property name with the value

        export class AppComponent{
            name = "hitesh"
        }

component can store data that will isolated with other component

now we will try to render the name value in the template html go to the app.component.html

        <p> hi {{ name }} and also you can use various property {{ name.toUpperCase() }} </p>

it will show the value of the name 

# method
also you can use the method to render for example go to the app.component.ts

        export class AppComponent{
            name = "hitesh"
            sampleName() {  //this is the sample method create to showcase how to use method
                return this.name.toUpperCase();
            }
        }

and to render it we can go to the html template file app.component.html

        <p> hi {{ name }} and also you can use various property {{ name.toUpperCase() }} </p>
        <h1> {{ sampleName }} </h1> <!-- it will show the name value in upper case -->

it will show the value by using method


------------------------------

# property binding
it used to minipulate attribute on an element,
property binding is being able to change the document with propertyes from a class : if the property of class is changes angular will update the document with the new value this is also called change detection system

we will continue working on app.component.ts inside its class we will create the property imageurl and give it the image as value

        export class AppComponent{
        name = "hitesh"

        imgUrl = "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r5.png"

        sampleName() {
                return this.name.toUpperCase();
        }
        }

now we will load our image inside template file app.component.html

        <img [src]="imgUrl" >   
        <!-- square brackets to any attribute means this is property binding  -->
        <!-- and the value of the [] attribute is treted as an expression we do not have to give it {{}} -->

        <p> hi {{ name }} and also you can use various property {{ name.toUpperCase() }} </p>
        <h1> {{ sampleName() }} </h1> <!-- it will show the name value in upper case -->

square brackets to any attribute means this is property binding 
and the value of the [] attribute is treted as an expression we do not have to give it {{}}
