// ARRAYS

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
// everything is shifted to thr left now
// hear we find that the a is errased
// tip:- .shift() is not just hold the data_element but it totaly remove the data_element too

// array_name.pop();
// it is used to shift things to the right and errase the last element and shift the data to the right
// for example:-
console.log(alphabats.pop());
// it will give us the output:-
// "H"
console.log(alphabats);
// it will give us the output:-
//   ["B", "C", "D", "E", "F", "G"]
// see hears the last item in the array is been erresed
// and all items are shifted to the right


// array_name.push("data_u_want_to_push");
// to add any data element to an array
// you can used push element
// for example:-
console.log(alphabats.push("I"));
// this will give you output:-
//   7
// the output is 7 because the data was add at the 7th position but still its address is 6
console.log(alphabats);
// this will give us the output:-
//    ["B", "C", "D", "E", "F", "G", "I"]
// you can see that the data ("I") that we push has been successfully at added to the last position in the array



// array_name.length;
// you can use these to insure your lenght of the array
// it denont the no of data into your array
// for example:-
console.log(alphabats.length);
// it will give you the output:-
//   7


// array_name.sort();
// it used to make an array to the alphabetical order
console.log(alphabats.sort());
// it will give us the output:-
//    ["B", "C", "D", "E", "F", "G", "I"]
// but hear our array is already sorthe means it is alwaready at its alphabetical order
// so it dosent change much




// array_name.concat([array_that_you_want_to_add]);
// for example:-
console.log(alphabats.concat(["J","K","L","M"]));
// it will give you the output:-
// ["B", "C", "D", "E", "F", "G", "I", "J", "K", "L", "M"]
// here as you can see the both arrays are mearge together
// the array we concat is combine from the right side of the array
// MOST IMP:-
console.log(alphabats);
// this will give the output:-
//   ["B", "C", "D", "E", "F", "G", "I"]
// you can see the array we mearge is not mearge with the main array we have to assign that mearge array the different variable for use any more further
// to assgin the mearge values to the new variable
// for example:-
var alpha2 = alphabats.concat(["J","K","L","M"]);
// noe the two array are permantlly mearge into the variable alpha2
console.log(alpha2);
// now this will give the output:-
//    ["B", "C", "D", "E", "F", "G", "I", "J", "K", "L", "M"]
// now you can use this alpha2 array anywhere in the program







// you can also use the object inside the arrays
// for example:-
var experiment = [
    {
        username: "hitesh",
        password: "pakhan",
    },
    {
        username: "h",
        password: "p",
    },
];
// and if you see the experiment array now you see
console.log(experiment);
// it will show the output:-
// ---------------------
// [{…}, {…}]
// 0: {username: "hitesh", password: "pakhan"}
// 1: {username: "h", password: "p"}
// length: 2
// ---------------------
// and if you want to call specific item you can call like 
// for example:-
console.log(experiment[1].username);
// you will get the output:-
// h















