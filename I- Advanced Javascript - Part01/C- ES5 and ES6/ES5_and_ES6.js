// # ES5/ES6/ES7 
//     it is called as the ECMAScript. 5,6,7 are versions of javascript


// JAVASCRIPT VARIABLES
// -----------------
// * var
// * let (new in ECMAScript 6)  
// * const (new in ECMAScript 6)

// we have already seen the -var 
// now we are going to see the -let and -const

// # const

// const is a value that can never change or reassign in the entire expression
// but it can chang outside the const

// const example:-

    const z = "hitesh";  //you assign the name as hitesh now it can not change in that programe 
    z="pakhan";

    // output:-
    // Uncaught TypeError: Assignment to constant variable.    //it will give the error because the const can not be changed
    // at <anonymous>:2:2

// but if iot is an object you can not reassign the object values but you can assign or change the propertyes of that object values

// for example:-
    
    const obj = {
        player : "bobby",
        experience : 100,
        wizardlevel : false
    }
    obj.wizardlevel = true;         //it is the property of the value of the const object it will changed
    console.log(obj.wizardlevel);   
    obj = 5;                        //it is the const object it will give an error

    // output:-
    // true                                                    //it is the ouytput of the obj.wizardlevevl
    // Uncaught TypeError: Assignment to constant variable.  //and it is the error because we try to reassign the const obj
    // at <anonymous>:8:9

// best example:-
    
    var a = () => {
    var b = "hi";
    console.log(b);
    }
    a();
    var b = "hi there";
    console.log(b);

    // output:-
    // it will give an error
    // Uncaught SyntaxError: Identifier 'b' has already

// but if you use the const here

// for example:-

    var a = () => {
        const b = "hi";
        console.log(b);
    }
    a();
    const b = "hi there";
    console.log(b);

    // output:-
    // hi
    // hi there

// # let

// let is just like the var (variable) but it has some different features 

    // example1:

    let a =100;
    let b="one";
    if(a>90){
        let b="two";
        console.log("inside",b);
    }
    console.log("outside",b);
    
    // output:-
    // inside two
    // outside one
    // -------------------------
    // example2:-
    
    let a =100;
    let b="one";
    if(a>90){
        b="two";
        console.log("inside",b);
    }
    console.log("outside",b);

    // output:-
    // inside two
    // outside two

    
// # DESTRUCTOR
    
    const person = {
        firstName : "John",
        lastName  : "Doe",
        age       : 50,
        eyeColor  : "blue"
    };
    firstName;   //it will give an error because the right way to print it is :-   person.firstName;
    
    // output:-
    // Uncaught ReferenceError: aa is not defined

// but if we had to print the object value property we have to use the distructor

// for example:-

    const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
    };
    const { firstName, lastName, age, eyeColor } = person;   //it is the destructor by the help of these you can print the propertyes just like the variables
    firstName;
    lastName;
    age;
    eyeColor;

    // output:-
    // John 
    // Doe 
    // 50 
    // blue

// # object properties

    // example:-
    var name;
    let a = 50;
    if (a === 50){
        name = "hitesh";
    }else{
        name="h_i_t_e_s_h"
    }
    const obj = {
        [name] : "yes my name is hitesh",
        ["sur" + "name"] : "pakhan",
        [2+3] : "dont care"
    }
    obj.hitesh;
    obj.surname;

    // output:-
    // "yes my name is hitesh"
    // "pakhan"

// .
    
    // example2:-
    const a = "hitesh";
    const b = true;
    const c = {};
    const obj_d = {
        a,
        b,
        c
    };
    obj_d.a;
    obj_d.b;
    obj_d.c;


// # template strings  ``

    // example:-
    const name = "sally";
    const age = 34;
    const pet = horse;
    const a = "Hello " + name + " you seem to be doing " + age-10 +". what a lovely " + pet + "you have";
    const b = `Hello ${name} you seem to be doing ${age-10} . what a lovely ${pet} you have`;
    a;
    b;

    // output:-
    // "Hello sally you seem to be doing 34. what a lovely horseyou have"
    // "Hello sally you seem to be doing 24 . what a lovely horse you have"

// # default arguments
// when ever you use the default arguments it will use them when there no values pass they'll be the default 

    function a(name="", age=30, pet="cat"){                //this is the default arguments
        return `hello ${name} you seem to be ${age-10} . what a lovely ${pet} you have`;
    }
    a();  //i did not pass any values
    a("hitesh",40,dog);

    // output:-
    // "hello  you seem to be 20 . what a lovely cat you have"         //now as you can see that it print the default values
    // "hello hitesh you seem to be 30 . what a lovely dog you have"   //here it takes those values that pass as an arguments


// # symbol
// JAVASCRIPT TYPES

// 1. Number 
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol (new in ECMAScript 6)
// 7. Object
// we seen all of these types in javascript escape the one no 6 symbol

    // example:-
    let a = Symbol();
    let b = Symbol("foo");
    let c = Symbol("foo");
    a;
    b;
    c;
    b === c;             //it will give false because symboals can not be compair

    // output:-
    // Symbol()
    // Symbol(foo)
    // Symbol(foo)
    // false 

// # arrow function

//     by this the function coud be write in the different way but it works the same
    
//     syntax:- 
//     const fun_name = (fun_values/or_empty) => {operation-work}

// .

    // example:-
    function add(a, b){
        return a+b;
    }

    const add2 = (a, b) => a + b;

    add(4, 2); //it will give the value of first function
    add2(4, 2); //it will give the value of the second function
     
    // output:-
    // 6              //first
    // 6              //second