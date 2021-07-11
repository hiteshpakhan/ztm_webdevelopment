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





