// part1
var s_trings=["tiger", "cat", "bear", "bird"];
// this is the way you can create the array 
// hear the variable animals are the name of the array
// and all the content between thos two [] are the content of the array
console.log(s_trings[1]);
// op:-"cat"
// it will give the output cat
// because it start to counting from 0
console.log(s_trings[0]);
console.log(s_trings[2]);
console.log(s_trings[3]);
// op:-"tiger"
// op:-"bear"
// op:-"bird"
// now you get all the output

// we can not just hold strings but we can contain other also for example the function or numbers
var n_umbers=[1,2,3,4,5,6];
// this is the number function

var b_ooleans=[true,false,true];
// this is the boolean function

var f_unctions=[
    function a1() {
        console.log("a1");
        console.log("hi everyone this is the first function in the f_unction arrray");
    },
    function a2(){
        console.log("hi this is the 2nd function");
    }
];
// and this is the array of the function

// and also we can create the array collection of the all items in one array
// for example:-
var mess=[1, "string", true, undefined, function f(){console.log("we created the array"); }, 2];








// part2
// we can also make an array within an array
var fun=[ ["one","two","three"], ["one.1", "two.1", "three.1"], ["one.2", "two.2", "three.2"] ];
// we have an array fun which have contains 3 arrays it an array of arrays
// to call the specific data in an arrays you can use the syntax:- array_name[ [specific_no_of_array] [specific_no_of_data] ];
// for example:-
console.log(fun[0][1]);
// it will givethe output:-
// two
console.log(fun[2][0]);
// it will give the output:-
// one.2 




// part3
// there are functions that we can used on arrays to put an array element or to pick an array element
// for example:-
var alphabats=["A","B","C","D","E","F","G","H"]
// so hear we created the array named alphabats which contain some data
// suppose we have to get the first data in an array then we can use
// array_name.shift();
console.log(alphabats.shift());
// the output you get is:-
// "A"
// but now if you look at the list
console.log(alphabats);
// it will give an output:-
//   ["B", "C", "D", "E", "F", "G", "H"]
// hear we find that the a is errased
// tip:- .shift() is not just hold the data_element but it totaly remove the data_element too


















