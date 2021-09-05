# ES5/ES6/ES7 
    it is called as the ECMAScript 5,6,7 are some of its versions 


JAVASCRIPT VARIABLES
-----------------
* var
* let (new in ECMAScript 6)  
* const (new in ECMAScript 6)

we have already seen the -var 
now we are going to see the -let and -const

# const

    CONST:
        const is a value that can never change or reassign in the entire programe

    const example:-

    const z = "hitesh";  //you assign the name as hitesh now it can not change in that programe 
    z="pakhan";

    output:-
    Uncaught TypeError: Assignment to constant variable.    //it will give the error because the const can not be changed
    at <anonymous>:2:2
    --------------------------

    but if iot is an object you can not reassign the object values but you can assign or change the propertyes of that object values
    for example:-
    const obj = {
        player : "bobby",
        experience : 100,
        wizardlevel : false
    }
    obj.wizardlevel = true;         //it is the property of the value of the const object it will changed
    console.log(obj.wizardlevel);   
    obj = 5;                        //it is the const object it will give an error

    output:-
    true                                                    //it is the ouytput of the obj.wizardlevevl
    Uncaught TypeError: Assignment to constant variable.  //and it is the error because we try to reassign the const obj
    at <anonymous>:8:9


# let

let is just like the var (variable) but it has some different features 

    example1:

    let a =100;
    let b="one";
    if(a>90){
        let b="two";
        console.log("inside",b);
    }
    console.log("outside",b);
    
    output:-
    inside two
    outside one
    -------------------------
    example2:-
    
    let a =100;
    let b="one";
    if(a>90){
        b="two";
        console.log("inside",b);
    }
    console.log("outside",b);

    output:-
    inside two
    outside two

    




