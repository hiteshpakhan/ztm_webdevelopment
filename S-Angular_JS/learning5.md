# how to listen for events in template
normally we will listen an event by selecting an element with query function then add eventlistener to the element

but in angular we can use the event with ease for that go to teh app.component.html

        <input (keyup)="changeImage($event)">  
        <!-- the value of the event will an expression we dont have to put it inside the {{}} -->
        <!-- here we are going to listen to an event of key up -->
        <!-- we have to wrap the event attribute with () -->
        <!-- normally event are start with the on_____ like onKeyUp but in angular we dont have to do it -->
        <!-- here we have used the method changeImage with the $event object pass in -->
        <!-- angular will provide us with the with the event object we can pass it to the class -->

        <img [src]="imgUrl" >   
        <p> hi {{ name }} and also you can use various property {{ name.toUpperCase() }} </p>
        <h1> {{ sampleName() }} </h1>


# type assertion
priviosly we have used the method but we have not created it inside the component file for that we have to go to app.component.ts and create the changeImage() method

        changeImage(e:KeyboardEvent) {
                // this.imgUrl = e.target.value  //this will give error 
                // because we are using typescript not js 
                // so for this problem typescript provide a solution called type assertion it allows to change the type to the compiler wise
                
                // type assertion
                this.imgUrl = (e.target as HTMLInputElement).value
                // as keyword will force the typescript compiler to assume different type to object or property       
        }

now if you run teh app it will show the image and if you change url inside the input it will change the image 
