
// * 
// JAVASCRIPT TYPES
// -----------------
// 1. Number 
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// <!-- 6. Symbol (new in ECMAScript 6) -->
// 7. Object


// STRING
// you can create string by the doublequots ("") or the singlequots ('')
// on string you can access the feature like (.lenght), (.slice()), (.toUpperCase()/.toLowerCase())

// (.length)
// for example:-
var tweet = prompt("compare your tweet:");
alert("you have written " + tweet.length +" characters, you have " + (150 - tweet.length) + " characters remaning");
// in the upper example we create the program that will tell the user how many charactes he written and how many characters remaning of the limit of 150

// (.slice())
// for example:-
var name = "hitesh";
name.slice(0,1);
// it will give us the output:-
// "h"
// meansits start reading from 0 and stops at 1
// and here the letter h is start from 0 and its end at 1
// hence we get the "h" among the string
// another example:-
name.slice(0,4);
name.slice(2,4);
// it will give us the output:-
// "hite"
// "te"
// now you can use this in the sutions like when you have to cut any string 
// for example:-
var paragraph = prompt("put your paragraph:");
alert(paragraph.slice(0,151));
// it will cou your paragraph that are more than 150 words

// (.toUpperCase())/(.toLowerCase())
// when we use the .toUpperCase() or .toLowerCase() it change the string but not in the main variable to chang it we have to assign it to the next variable or we can assign it to the same variable
// for example:-
var ul_case = "hi there hows it going"
ul_case = ul_case.toUpperCase();
console.log(ul_case);
// noe it will give us the output:-
//     HI THERE HOWS IT GOING
// and second the example of .toLowerCase()
ul_case = ul_case.toLowerCase();
console.log(ul_case);
// now it will give us the output:-
// hi there hows it going





// Number:-
// you can create the number very easly
// you just have to create it with any semicolon or anything 
// for example:-
var a=2;
// hear we assign the variable named by a with the number value of 2


// BOOLEAN
// true and false are the boolen values
true + true // 2
true + false // 1
false + true //  1
false - true //  -1

// NAN
"Bob" - "bill" // NAN
// when you tries to substract the string to the string it gives the NaN
// NaN means not a number

// undefined
var hitesh;
hitesh; 
// OP:- it will give you the result undefined because the hitesh variable has not given any value

















