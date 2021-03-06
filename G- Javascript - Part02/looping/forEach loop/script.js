// forEach (new in ECMAScript 5) 
// 
// just understand the loop you dont have to use it for many times
// 
// for example:-
var a = [
    "item_1",
    "item_2",
    "item_3",
    "item_4",
    "item_5"
];
a.forEach(function(i){
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
a.forEach(function(a){
    console.log(a);
});
// even if i replace the i with the list_arr1 it gives us the same output
//  item_1
//  item_2
//  item_3
//  item_4
//  item_5



a.forEach(function(a, i){
    console.log(a, i);
});
// it will give you the output
// item_1 0
// item_2 1
// item_3 2
// item_4 3
// item_5 4



a.forEach(function(a, i, j){
    console.log(a, i, j);
});
// it will give you output:-
// item_1 0 (5) ["item_1", "item_2", "item_3", "item_4", "item_5"]
// item_2 1 (5) ["item_1", "item_2", "item_3", "item_4", "item_5"]
// item_3 2 (5) ["item_1", "item_2", "item_3", "item_4", "item_5"]
// item_4 3 (5) ["item_1", "item_2", "item_3", "item_4", "item_5"]
// item_5 4 (5) ["item_1", "item_2", "item_3", "item_4", "item_5"]




// a.forEach(function(i, a){
//     console.log(i, a);
// });
// guess the answere:-


