
// *
// JAVASCRIPT DATA STRUCTURES
// -----------------
// Array
// Object


//* 1 arrays

//          Array Properties
// *Property	         *Description
// constructor	     Returns the function that created the Array object's prototype
// length	         Sets or returns the number of elements in an array
// prototype	     Allows you to add properties and methods to an Array object


//          Array Methods
// *Method	        *Description
// concat()	        Joins two or more arrays, and returns a copy of the joined arrays
// copyWithin()	    Copies array elements within the array, to and from specified positions
// entries()	    Returns a key/value pair Array Iteration Object
// every()	        Checks if every element in an array pass a test
// fill()	        Fill the elements in an array with a static value
// filter()	        Creates a new array with every element in an array that pass a test
// find()	        Returns the value of the first element in an array that pass a test
// findIndex()	    Returns the index of the first element in an array that pass a test
// forEach()	    Calls a function for each array element
// from()	        Creates an array from an object
// includes()       Check if an array contains the specified element
// indexOf()	    Search the array for an element and returns its position
// isArray()	    Checks whether an object is an array
// join()	        Joins all elements of an array into a string
// keys()	        Returns a Array Iteration Object, containing the keys of the original array
// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// map()	        Creates a new array with the result of calling a function for each array element
// pop()	        Removes the last element of an array, and returns that element
// push()	        Adds new elements to the end of an array, and returns the new length
// reduce()	        Reduce the values of an array to a single value (going left-to-right)
// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// reverse()	    Reverses the order of the elements in an array
// shift()	        Removes the first element of an array, and returns that element
// slice()	        Selects a part of an array, and returns the new array
// some()	        Checks if any of the elements in an array pass a test
// sort()	        Sorts the elements of an array
// splice()	        Adds/Removes elements from an array
// toString()	    Converts an array to a string, and returns the result
// unshift()	    Adds new elements to the beginning of an array, and returns the new length
// valueOf()	    Returns the primitive value of an array


// some array examples:-
// using this array, 
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift();

// 2. Sort the array in order. 
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" from the array.
array.splice(0, 1);

// 5. Sort the array in reverse order. 
array.reverse();

// using this array, 
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1][0];

// go to the folder array for more explanation




// ------------------------------------------------------------------------------------------

// ** 2 object
// objects are the colliction of properties

// for further explanation you can go to the object folder 




// --------------------------------------------------------------------------------------------

// different between arrayes and object in javascript
// everyt array is made of the index and values that the index start from the 0 and values starting to assign from that 0 but unlike object there is a system of properties and values where each value has there unique properties
















