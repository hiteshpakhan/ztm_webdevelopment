// variable anotation 
// following types are allowed
// string
// number 
// boolen 
// null 
// undefined
const myName: string = "";




// Type Infrence
// typescript is able to detect the datatype of our variable this feature is called TYPE INFRENCE
// if the variable is initialized with teh value it wil automatically set the type infrence of the vaiable 
// you can assume the following example

let myName2 = "";
myName2 = "hi there";
// this feature is not work with teh function parameters



// any
let myName3 : any ; 
//but this is not a good practice to use this
// this shoud be a last resort 



// Union Types
// we can assume this like an alternate of the any type
// they gives more flexibility with anotation data 
// like when we want a variable to be of different type
let MyName4 : string | null = null;
// you can also use this on the function, objects, arrays, etc



