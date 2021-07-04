
// *
// JAVASCRIPT FUNCTIONS
// -----------------
// var a = function name() {}
// function name() {}
// return
// <!-- () => (new in ECMAScript 6) -->



// function name() {}
// function is like the container where you can store a block of code and you can access that block of code whenever you want
// if you have to write the same code at many times you can use functions insted
// to create the function you have to use keyword 
// function 
// and give it the name like f1
// function f1
// and then add the set of perenthesis
// function f1()
// then add all of the code in the qurly brackets
function f1(){
    // all of the code hear
    alert("hi congrats you create the first function in javascript");
    alert("now this code will repet whenever you call the function");
}
// to call the function you just have to type the function and add the set of perenthsis for example
f1();
// you sussfully call the function





// you can also add values through the function
// type1 
// to do that you habve to create a value name like example hear
function fun(a){
    console.log(a+5);
}
fun(5);
// it will give us output
10

// type2
// and you can declare more than one values in the function like next exampls
function fun(a,b,c){
    console.log(a+5);
    console.log(b+5);
    console.log(c+5);
}
fun(5,3,2);
// it will give us the output
10
8
7

// type3
// you can actually use return in the function
// because of return you are not just give input but you can also get output by it 
function main(money){
    var bottle=money/1.5;
    console.log("buy " + Math.floor(bottle) + " bottles of milk");
    return money % 1.5;
}
main(5);
// output:-
//    buy 3 bottles of milk
//    0.5 
//this 0.5 value we get it by using return





















