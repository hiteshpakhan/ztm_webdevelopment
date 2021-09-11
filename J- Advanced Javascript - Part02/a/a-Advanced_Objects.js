// reference type

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



// contact type
// instantiation
