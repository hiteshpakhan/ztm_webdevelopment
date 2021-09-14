// .flat()
// is a method that we can used on arrays

const arr = [1,2,3,4,5]
arr.flat();
// op-
// [1, 2, 3, 4, 5]    //nothing has been changed

//but:-
const arr = [1,[2,3],[4,5]]
arr.flat();
// op-
// [1, 2, 3, 4, 5]     //it turn our array into flat array

//another example:-
const arr = [1,2,[3,4,[5]]]
arr.flat();
// op-
// [1, 2, 3, 4, Array(1)]   //it will show the array like this

//another example:-
const arr = [1,2,[3,4,[5]]]
arr.flat(2);     //if we put the 2 inside the brackets
// op-
// [1, 2, 3, 4, 5]       
//it gives us the flat array
// because the flat() cointains default value 1 inside the brackets
// if we had to put the value of the number of the array you want to make flat
// and it make array flat for you

// another example:-
const jp = [["a","b"],"c","d",["e","f"],[[[["g"]]],"h"],["i","j"]];
jp.flat(50);        //we can give big number if we want to it has no problem
// op-
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']   

//another example:-
const entries = ["bob","sally",,,,,,"candy"];
entries.flat();
// op-
['bob', 'sally', 'candy']























































