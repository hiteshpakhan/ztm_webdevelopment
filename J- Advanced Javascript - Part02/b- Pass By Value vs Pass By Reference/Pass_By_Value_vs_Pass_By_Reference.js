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

// -------------------------------------------------------------------------

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


var c = [1,2,3,4,5];
var d = c;
d.push(621345);
console.log(c);
[1, 2, 3, 4, 5, 621345]
console.log(d);
[1, 2, 3, 4, 5, 621345]
//as you can see the both arrays are changed because of pass by the reference


// imp
// its vary important feature (pass by reference) of the javascript
// it can be used when we want to make same object or an array but we domt want to copy it so that it cant be access more memory

// but when you have to copy object or array for some reason 
// you can do as follows:-

//if you want to copy an object
var c = [1,2,3,4,5];
var d = [].concat(c);   //concat push all the element inside of c into the array d so it become 2 dofferent arrays
d.push(621345);
console.log(c);
// op- [1, 2, 3, 4, 5]
console.log(d);
// op- [1, 2, 3, 4, 5, 621345]    //noe the both array has the seprate memory location so it only affect the array d



// # now if you have to copy the object

// method 1
let obj1 = {a: "a", b: "b", c: "c"};
let obj2 = Object.assign({}, obj1);
obj1.c = "c has been changed";
console.log(obj1);
// op- {a: 'a', b: 'b', c: 'c has been changed'}
console.log(obj2);
// op- {a: 'a', b: 'b', c: 'c'}       //as you can see only one object has been changed



// method 2
let obj1 = {a: "a", b: "b", c: "c"};
let obj2 = {...obj1};
obj1.c = "c has been changed";
console.log(obj1);
// op- {a: 'a', b: 'b', c: 'c has been changed'}
console.log(obj2);
// op- {a: 'a', b: 'b', c: 'c'}      //as you can see we get same output but different method


//------------------------------------------------------------------------


//the upper methods will help you to copy array and object 
//but they can not copy the object inside the object


let obj1 = {
    a: "a",
    b: "b",
    c: {
        deep: "try to copy me"
    }
};
let obj2 = JSON.parse(JSON.stringify(obj1));   //it is deep clone and it coud affect your performance
obj1.c = "c has been changed";
console.log(obj1);
// op- {a: 'a', b: 'b', c: 'c has been changed'}
console.log(obj2);
// op- {a: 'a', b: 'b', c: {…}}

//it can copy object and their objects too 