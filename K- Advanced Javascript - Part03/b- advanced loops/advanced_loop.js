//1
const basket = ["apples", "oranges", "grapes"];
for (let i=o;i < basket.length;i++){
    console.log(basket[i]);
}      
// op-
// apples
// oranges
// grapes    //we already seen this for loop before


//2
const basket = ["apples", "oranges", "grapes"];
basket.forEach(item => {
    console.log(item);
})
// op-
// apples
// oranges
// grapes   //we already seen this for loop before

//we also seen the while and dowhile loop

//--------------------------------------------------------------------

//3                       //it is the new feature to the javascript
// for of loop            //we can iterating go one by one to each item and look at it
// arrays are iterating so we used the for of loop
const basket = ["apples", "oranges", "grapes"];
for(item of basket){
    console.log(item);
}
// op-
// apples
// oranges
// grapes

// you can not use for of loop on the object it will give an error
// for example:-
const db = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}
for(item of db){
    console.log(item);
}
// op-
// error VM174:7 Uncaught TypeError: db is not iterable
// at <anonymous>:7:13

//-----------------------------------------------------------------

//4                         //it is also new feature to the javascript
// for in loop      //work with object
// objects are enumerating not iterating so we used for in loop
const db = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}
for (item2 in db){       //it allow us to loop over and see the object propertyes
    console.log(item2);
}
// op-
// apples
// oranges
// grapes     


//  we can use the for in loop on the arrays also
const basket = ["apples", "oranges", "grapes"];
for (item2 in basket){       
    console.log(item2);
}
// op-
// 0
// 1
// 2     //it will give us the indexes because it will use the array like the objects and try to catch the propertyes of the object 
yuayudcg