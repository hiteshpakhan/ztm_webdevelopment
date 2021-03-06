// object
// to create an object first declare the variable and then assign the values in the {} qurlybrackets
// to assign the values to the properties you can use the : semicolon
// for example:-

var user = {
    name:"john",
    age:34,
    hobby:"soccor",
    is_married:false,
};
// hear name,age,hobby,is_married are the properties inthe object
// and the values in the object are john,34,soccor,false 
// here we create an object nameed as the : user
console.log(user);
// it will give us the output:-
//   {name: "john", age: 34, hobby: "soccor", is_married: false} 
// here you can see that the object has been created


// you can call the values by callint the properties of the same values
// for example:-
// if youwant the value john you can use:-
console.log(user.name);
// it will give you the output:-
// john
console.log(user.age);
console.log(user.hobby);
console.log(user.is_married);
// it will giveus the output:-
// 34
// soccor
// false



// to add any proerties and values you can use
user.favouritefood = "apple";
// now if you check the original object you will see the favouritefood:"apple" is been added to the object
console.log(user);
// it will give the output:-
//   {name: "john", age: 34, hobby: "soccor", is_married: false, favouritefood: "apple"}
// as you can see that the favouritefood is been added aqs an "apple"
// this way you can add as many properties and values into object


// you can change the values of an object properties very easily by just assigning the new values to it
// for example if you want to change the age and is_married tou can change it by:-
user.age=21;
user.is_married=true;
// if we now check the main object
console.log(user);
// it will give the output:-
//   {name: "john", age: 21, hobby: "soccor", is_married: true, favouritefood: "apple"}
// you can clearly see the difference between the first and now object 
// the age change to 21 and is_married status change to the true from false


// ARRAYS INSIDE AN OBJECT:-
// yes you can use arrays inside object
// for example here we are creating the same object as an user named user2 that will have contain 1 array
var user2={
    name:"john",
    age:34,
    hobby:"soccor",
    is_married:false,
    list: ["item1","item2","item3","item4"],
};
// so now if we see the user 2:-
console.log(user2);
// it will give the output:-
//    {name: "john", age: 34, hobby: "soccor", is_married: false, list: Array(4)}
// if we expand it
// ------------
// {name: "john", age: 34, hobby: "soccor", is_married: false, list: Array(4)}
// age: 34
// hobby: "soccor"
// is_married: false
// list: Array(4)
// 0: "item1"
// 1: "item2"
// 2: "item3"
// 3: "item4"
// length: 4
// __proto__: Array(0)
// name: "john"
// ------------
// you can see that the array is successfully created inside an object 
// YOU CAN ALSO CALLED THE ITEMS INSIDE THE ARRAY INSIDE THE OBJECT
// if we want to access the item2 inside the array
// for example:-
console.log(user2.list[1]);
console.log(user2.list[3]);
// you will get the output:-
//  item2
//  item4


// IMP
// AS ITIS YOU CAN ALSO USE THE {OBJECT} INSIDE AN [ARRAY] AS YOU USE [ARRAY] INSIDE THE {OBJECT}



// IMP
// but if you used function inside the object it called as an method of that object
var user3 = {
    name : "hitesh",
    fathar_name : "sanjay",
    last_name : "pakhan",
    roll_no : 29,
    f_1 : function(a){
        alert("hi there" + a);
    } 
}
// the main thing is that whan you want to call the function inside the object its little bit different
// for example
user3.f_1(33);
// as you can see that we declare the brackets() along with the function because we are calling the function 
// function always required the pair of brackets() along with them to execute the function
// it will ggive us the output:-
// hi there33






















