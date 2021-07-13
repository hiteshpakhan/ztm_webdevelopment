// for loop:-
var todo_list = [
    "item_1",
    "item_2",
    "item_3",
    "item_4",
    "item_5"
];

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
    
}
// it will give you the output:-
// item_1!
// item_2!
// item_3!
// item_4!
// item_5!
// as you can see that the all the strings have the explation mark in the end of the strings






