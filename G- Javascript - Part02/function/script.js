// TYPE 1: function declaration 
// syntax:  function_name(){}

function say_hello(){
    console.log("hello");
}
say_hello();

// it will give the output:-
// hello



// TYPE 2: function expression
// syntax: var variable_name = function () {}

var say_bye = function(){
    console.log("BYE");
}
say_bye();
// it will give the output:-
// BYE




// you can use the brackets () to provide the values inside the function
// for example:-

function example1(a,b){
    console.log(a + b);
}
example1(2,3)
example1("hello ","everyone")
example1(2," is the number")
// it will give the output:-
// 5
// script.js:31 hello everyone
// script.js:31 2 is the number




// TYPE 3 return
// for example:-
function multiply(a, b){
    return a * b;
}
// multiply(5, 10);
var c = multiply(5, 10);
console.log(c);
// it will give the output:-
// 50

// another example of return
function mul(a, b){
    if(a>10 || b>10){
        return "thats too hard";
    }else{
        return a*b;
    }
}
console.log(mul(5, 10));
console.log(mul(5, 20));
// it will give the output:-
// 50
// thats too hard


// but if in another case if you put return outside the if else then it never get to the outside return function
// for example:-
function mul2(a, b){
    if(a>10 || b>10){
        return "all set";
    }else{
        return "hi its me";
    }
    return a+b;           // but in any condition upper any return works then this return will never assigned
} 
console.log(mul2(32, 3));
// it will give the output:-
// all set
// and thats the output of first return 
// because the if else execute the return then the control automatically stops the execution



// you can also do:-
function mul3(a, b){
    return a+b;
}
alert(mul3(5, 4));
// it will give you the output in alert
// 9



// IMP there is two terms 1(parameter) 2(argument)
// 1(parameters):-
// and if you see the upper example you will see that we first assign the empty variable like terms to the function that are (a, b) this is called as parameters
// 2(argument):-
// and if you see when we called the function we give the value (5, 4) these are called as a argument