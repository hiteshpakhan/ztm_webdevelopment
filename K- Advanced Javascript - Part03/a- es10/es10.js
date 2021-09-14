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
// ['bob', 'sally', 'candy']

//-----------------------------------------------------------------

// flatMap()
const jp = [["a","b"],"c","d",["e","f"],[[[["g"]]],"h"],["i","j"]];
const jpnew = jp.flatMap(hp => hp + " hi");
console.log(jpnew);
// op-
// ['a,b hi', 'c hi', 'd hi', 'e,f hi', 'g,h hi', 'i,j hi']

//-----------------------------------------------------------------

// .trimStart()  //it will remove space from the start of the text
let useremail = "           hitesh5pakhan@gmail.com";
useremail.trimStart();
// op-
// 'hitesh5pakhan@gmail.com'   //as you can see it removes all the spaces from the front of the text


//.trimEnd()
let useremail = "hitesh5pakhan@gmail.com        ";
useremail.trimEnd();
// op-
// 'hitesh5pakhan@gmail.com'    //as you can see it removes all the blank space from the end of the text

//-------------------------------------------------------------------

//formEntries

up = [["ct",23],["dz",40],["h",18]]; //if we want to convert this into object
Object.fromEntries(up);
// op-
// {ct: 23, dz: 40, h: 18}         //it converts the array into object


//entries()   //it is just opposite of the fromEntries
up = {ct: 23, dz: 40, h: 18};
Object.entries(up);
// op-
// [Array(2), Array(2), Array(2)]    //it converts object into array

//----------------------------------------------------------------------------
// imp

// try{} catch{}       //it allow us to try a piece of codde and if there any errors it catch them

try{
    4+5;
}catch{
    console.log("you messed up");
}
// op-
//   9



try{
    bob + " hi";
}catch{
    console.log("you messed up");
}
// op-
// you messed up 



//before es10 we used this method

try{
    bob + " hi";
}catch (error) {
    console.log("you messed up"+error);
}
// op-
// you messed upReferenceError: bob is not defined  //it will show the error also
