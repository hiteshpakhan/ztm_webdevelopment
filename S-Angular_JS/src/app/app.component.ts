// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'basics';
// }

// ****************************************



import { Component } from "@angular/core";

@Component({
    selector:"app-root",    //this will be the custom tag name for our component
    //the shoud be in lower case seprate with the - and not simillar to any html tag
    
    // template: ` <p>hi there</p> `,
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
    
})
export class AppComponent{
    name = "Hitesh"
    name2 = "luis ramirez"
    
    imgUrl = "https://picsum.photos/id/27/200/300"
    
    images = [          //here we have past the same link as image link we have use privously
        "https://picsum.photos/id/23/200/300",
        "https://picsum.photos/id/37/200/300",
        "https://picsum.photos/id/227/200/300",
        "https://picsum.photos/id/7/200/300"
    ]

    currentDate = new Date()  //here we can give value in 3 types numbers, strings, Date objects and here we are using the date object

    cost = 2000

    temperature = 24

    pizza = {
        toppings: ["pepperoni", "bacon"],
        size: "large"
    }

    blueClass = false       //this will be used as a condition for toggling the class

    fontSizeVariable = 24


    sampleName() {
        return this.name.toUpperCase();
    }

    changeImage(e:KeyboardEvent) {
        // this.imgUrl = e.target.value  //this will give error 
        // because we are using typescript not js 
        // so for this problem typescript provide a solution called type assertion it allows to change the type to the compiler wise
        
        // type assertion
        this.imgUrl = (e.target as HTMLInputElement).value
        // as keyword will force the typescript compiler to assume different type to object or property    
    }

    logImg(event: string){   //here we dont have to get event because we are only getting string
        console.log(event);
    }
}
