// for loop:-
var todo_list = [
    "item_1",
    "item_2",
    "item_3",
    "item_4",
    "item_5"
];
// 
// lets say you want an explanation mark with all the string then in such case you can use the for loop
// and to declare you have the syntax : for(conditions){values};
// for example:-
for (var i = 0; i < todo_list.length; i++){
    // here we created the for loop
    // where i start of with the zero
    // the next statement is if the i is less than the length of an the length of the todo_list array
    // and we have the array length of 5 and we have the i which have the value of 0
    // so if the condition(i < todo_list.length) true than execute these loop and done the i++
    console.log(todo_list[i] + "!");  
};
// it will give you the output:-
// item_1!
// item_2!
// item_3!
// item_4!
// item_5!
// as you can see that the all the strings have the explation mark in the end of the strings


// but if you see the original todo_list array now
console.log(todo_list);
// it will give you the output:-
// ["item_1", "item_2", "item_3", "item_4", "item_5"]
// as you can see that the main array not chang a littlebit
// and to make the changes in the main array you have to reassign the main array
// for example:-
// 
// var todo_list2 = for (var i = 0; i < todo_list.length; i++){   | its very important that you can not change the hole array by this way
//     console.log(todo_list[i] + "!");                           | it will give you an error!
// };                                                             | so you have to assign the each item one by one
// console.log(todo_list);                                        | this example is just for the warning do not repet this mistake
// 
// actual correct code for making the changes in the main Array:-
for (var i = 0; i < todo_list.length; i++){
    todo_list[i] = todo_list[i] + "!";  
}
console.log(todo_list);
// and now if we check the main array now it will givew an output:-
// ["item_1!", "item_2!", "item_3!", "item_4!", "item_5!"]
// now you can see that the main list also changed



// if you want to remove all the (!) marks you can do that by 
// for example:-
for (var i = 0; i < todo_list.length; i++){
    todo_list[i] = todo_list[i].slice(0, -1);
}
console.log(todo_list);
// it will give output:-
// ["item_1", "item_2", "item_3", "item_4", "item_5"]
// now you can see that we have been successfully removed the (!)mark from the array





// you can face such problem in the future
// if you want to remove the items one by one
// for example
// for (var i = 0; i < todo_list.length; i++){
//     todo_list.pop();
// }
// console.log(todo_list);
// it will give the output:
// ["item_1", "item_2"]
// but we suppose to empty the array
// then where is the problem occore then
// 
// explanation:-
// because after each the pop operation perform the length of the string is gatting reduced by one
// 
//  and the correct programe code of to remove the each item is
// code:-
var len1 = todo_list.length;
for (var i = 0; i < len1; i++){
    todo_list.pop();
};
console.log(todo_list);
// it will give the output:-
// []
// finally we get our empty array









