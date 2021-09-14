// # pass by values   
// (whenever we declare the variable this is called as the pass by values)
//pass by values :- when we copy the values it takes the value copy it and stores into the new memory location
//so that we can perform any values on it 

var a = 5;
var b = a;         //it copy the value becauswe it is the pass by values
b++;   //5+1       //because the pass by values it can perform the operation the values
console.log(a);
//op-5
console.log(b);
//op-6


// # pass by reference  
// (objects are the best example of the pass by reference)
// whenever we copy one object into another object ,it gives the same memory location of the both object
// so if we perform operations on any one of the object it will affect both of them same


let obj1 = {name: "name1", pass: "pass1"};
let obj2 = obj1;
console.log(obj1);
//op-  {name: 'name1', pass: 'pass1'}
console.log(obj2);
//op-  {name: 'name1', pass: 'pass1'}
//here the object looks the same but it only refer to the object2 not copy


let obj1 = {name: "name1", pass: "pass1"};
let obj2 = obj1;
obj2.pass = "new pass";
console.log(obj1);
// {name: 'name1', pass: 'new pass'}
console.log(obj2);
// {name: 'name1', pass: 'new pass'}
//as you can see we made changes in the object 2 but it changes the both object values
//and this is because of the pass by reference









































