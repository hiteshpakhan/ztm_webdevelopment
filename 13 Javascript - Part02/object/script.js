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









