<!-- Question : what is the <pre> tag used for -->
# pipe
the purpose of the pipe is to transform the output following are the list of the pipes on following link 

        https://angular.io/api?type=pipe

pipe can imported through the two modules 
1. CommonModule
2. BrowserModule

if we go to the app.module.ts we can see the BrowserModule has been register already 

we will see our first pipe called titlecase

* titlecase:

this pipe is used to capatilize the first letter of the words inside the string

to apply this component to the name string inside the app.component.ts file inside this class we will give the name2 variable some string

        export class AppComponent{
            name2 = "luis ramirez"
            .
            .
            .
        }

next open the app.component.html file and you can use file by following


        <!-- for using the pipe titlecase -->
        <p> this value is get using pipe titlecase : {{ name | titlecase }} </p>      <!-- here we can apply the pipe by adding the pipe character | followd by the name of the pipe -->

note: pipe character is  |

the value inside the class will remein unchanged, the value for the name2 will always be lowercase and it will not change by pipe

_________________________________________
# how to customized pipes through parameters

pipes are function pipes can have argument/parameters to modefy the behaviour or output not all pipes can have parameters

for this demonstration we have looking new pipe called date

* date

date pipe will format a valid date object it gives full control on formating of a date

date pipe has a parameter to modefy the date format

open the app.component.ts lets create the new object name currentDate with new instance of the Date object

this instance will save the current date inside the object

        export class AppComponent{
            currentDate = new Date()        //here we can give value in 3 types numbers, strings, Date objects and here we are using the date object
            .
            .
        }

now go to the file app.component.html

        <p> {{ currentDate }} </p>      <!-- here it will show the current time like: Sun Feb 19 2023 15:34:21 GMT+0530 (India Standard Time) -->

now to add the date pipe 

        <p> {{ currentDate | date }} </p>      <!-- here it will show the current time like: Feb 19, 2023 -->

there are many formating opetions for date you can go to the link

        https://angular.io/api/common/DatePipe#custom-format-options

you can also pass the arguments to this pipe in the form of string only

        <p> {{ currentDate | date: "d MMMM" }} </p>      <!-- here you can pass the values and it will show the current time like: 19 February -->

_________________________
now we will see the 2 pipes for formating numbers: decimal pipes and currency pipes

* currency pipe
the currency pipe will formate a number by adding a currency symboal before the value

for this we will need to add new property inside the app.compoent.ts file

        export class AppComponent{
            cost = 2000
            .
            .
        }

now we will go to the template file

        <p> {{ cost | currency }} </p>      <!-- here it will show the dollar sign before the number: $2,000.00 -->

        <p> {{ cost | currency:"INR" }} </p>      <!-- here it will show the RUPEES sign before the number: ₹2,000.00 -->

* decimal pipes

inside the app.component.ts

        export class AppComponent{
            temperature = 24
        }

inside template file

        <p> {{ temperature | number:"1.2-5" }} </p>     <!-- here it will give us the output: 24.00 -->

        <p> {{ temperature | number:"1.0-0" }} </p>     <!-- here it will give us the output: 24 -->

__________________________________________________________________
imp
* json pipe

json pipe will output an objector array on to the page to learn more about this you can go to the following link

        https://angular.io/api/common/JsonPipe

to show this example lets create an object to output on template open app.component.ts create a property called pizza object it will have 2 values

        export class AppComponent{
            pizza = {
                toppings: ["pepperoni", "bacon"],
                size: "large"
            }
            .
            .
            .
        }

now go to the template file 

        <pre> {{ pizza | json }} </pre>         
        <!-- this will ggive us output: 
            {
            "toppings": [
            "pepperoni",
            "bacon"
            ],
            "size": "large"
        }  -->