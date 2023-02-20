// array
// to declare an array you can follow the following method

let items: string[] = [];
let items2 : number[] = [2,3,4565,778,6];

// it will also take the type automatically if you declare it by following method

let items3 = ["hi there","hippy birthday"]


// union type 
let items4: (string | number)[] = ["aef","sf"];
let items5: (string | number)[] = [2,2,54,67,3];

// if you want to store different type of data then you can use the following method 
let items6: (string | number)[] = ["aef","sf",4];