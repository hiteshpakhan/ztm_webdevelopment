// # forEach

    const arr = [1,2,3,4,5];
    const newarr = arr.forEach((num) => {
        num * 2;
    })
    console.log(newarr);

    // output:-
    // [2, 4, 6, 8, 10]


// # map, filter, reduce
// these are the most important one

//map

    const arr = [1,2,3,4,5];
    const newarr = arr.map((num) => {
        return num * 2;
        //you can also write in different way:-     const newarr = arr.map(num => num * 2);  
    })
    console.log(newarr);

    // output:-
    // [2, 4, 6, 8, 10]      //the same output as forEach but with map we dont have to assign the values sepreatly


// filter      //it is used to filter the array

    const arr = [1,2,3,4,5];
    const newarr = arr.filter(num => { 
        return num > 2;                    //you can put any condition you want it will filter it for you
    })   //also you can do this in the short form:- const newarr = arr.filter(num => num > 2);
    console.log(newarr);

    // output:-
    // [3, 4, 5]  


// reduce 
    
    const arr = [1,2,3,4,5];
    const newarr = arr.reduce((a, num) => {   //a is the accumulator here   //accumulator is where we can store the information that happen in the body of function
        return a + num; //accumulator always store there privious values
    },0);   //in reduce you have to define the accumulator start value after the function  //we assign the accumulator a value 0
    console.log(newarr);