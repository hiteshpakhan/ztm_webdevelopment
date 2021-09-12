// # reference type

const object1 = { value: 10 };  //object is created
const object2 = object1;        // here the main thing is
                                //object2 got not assign the values of the boject1 its just referes the values of objectsss
                                //object2 got refer values of the object1
const object3 = { value: 10};  

object1 === object2;  //true
object1 === object3;  //false
object1.value = 15;
object2.value;        //15
object3.value;        //10
// -------------------------------------

// # contact        //contact tels you which object are we in with the use of *"this"* keyword

    
    console.log(this);  
    //op:- Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
    //it will give you the location 
    //basically if you are not in any object it will show you the window object because all the page made inside window object
    
    console.log(this === window);
    // op:- true

    //if you do "window.alert()" or you do "this.alert()" both are the same

    const a = () => {
        console.log(this);
    }
    a();
    // op:-Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}

    const o = {
        a: function(){
            console.log(this);
        }
    };
    o.a();
    // op:- {a: ƒ}       //now as you can see as we are in the second object it shows the loaction of the second object that we are in 


// # instantiation type
