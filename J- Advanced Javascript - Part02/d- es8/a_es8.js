// # 1

//  .padStart()
// it used to give spaces in front of the string

"turtle".padStart(12);
// op-
// '      turtle'     //as you can saee we gave no 12 inside the .padStart so it gave us 12 spaces before the string we have given


// .padEnd()
// it used to give spaces in end of the string

"turtle".padEnd(12);
// op-
// 'turtle      '     //as you can saee we gave no 12 inside the .padEnd so it gave us 12 spaces after the string we have given

//---------------------------------------------------------------------

// # 2

const fun = (a,b,c,d,) => {
    console.log(a);
}

fun(1,2,3,4,)      //it will not give an error if you give the quoma at the end

//---------------------------------------------------------------------

// # 3


// *1 Object.keys
//it allow us to do something similer to arrays but on objects
let obj = {
    username0: "santa",
    username1: "redolf",
    username2: "Mr.grinch"
}
// to ettrate over them you can do 
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})
// op-
// username0 santa
// username1 redolf
// username2 Mr.grinch


// *2 Object.values
let obj = {
    username0: "santa",
    username1: "redolf",
    username2: "Mr.grinch"
}
// to ettrate over them you can do 
Object.values(obj).forEach(value => {
    console.log(value);
})
// op-
// santa
// redolf
// Mr.grinch


// *3 Object.entries
let obj = {
    username0: "santa",
    username1: "redolf",
    username2: "Mr.grinch"
}
// to ettrate over them you can do 
Object.entries(obj).forEach(value => {
    console.log(value);
})
// op-
// ['username0', 'santa']
// ['username1', 'redolf']
// ['username2', 'Mr.grinch']








































