// forEach (new in ECMAScript 5) 
// 
// just understand the loop you dont have to use it for many times
// 
// for example:-
var list_arr1 = ["item_1",
"item_2",
"item_3",
"item_4",
"item_5"
];
list_arr1.forEach(function(i){
    // here the function recives the argunment value of i that will forward by the forEach
    console.log(i);
});
// it will give the output:-
// item_1
// item_2
// item_3
// item_4
// item_5
// 
// there is the one another way 
// 
list_arr1.forEach(function(list_arr1){
    console.log(list_arr1);
});
// even if i replace the i with the list_arr1 it gives us the same output
//  item_1
//  item_2
//  item_3
//  item_4
//  item_5



list_arr1.forEach(function(list_arr1, i){
    console.log(list_arr1, i);
});
// it will give you the output
// item_1 0
// item_2 1
// item_3 2
// item_4 3
// item_5 4










