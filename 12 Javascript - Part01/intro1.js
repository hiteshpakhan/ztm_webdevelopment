// this is just practice means it is not link with any file
// and also it it not in proper javascript way




// IMP STUF:-



// HOW TO LINK THE JAVASCRIPT FILE TO HTML
// there are two ways to add javascript
// step1
// to add javascript file there is a html tag 
inhtml:{      <script src="script.js"></script>     }
// hear the (script.js) is our name of javascript file
// step2
inhtml:{      <script>alert("hi there!")</script>    }
// you can directly add javascript content in between script tag
// imp tip:
// use javascript linking tags bottom of the body tag in html for better performance
// by that it will first load the html then css then it will load the javascript in the last




// Number()
// to convert any string into number
// for example
var first=prompt("enter first number");
var second=prompt("enter second number");
// the prompt() always read the value in the string if we want to add it we have to convert it into the integer noumber form
var sum= Number(first) + Number(second);  
// very imp here we convert the string into number
alert("the sum is:" + sum);
// now it will give us the addition of these two numbers 




// Make the string: "HI There! It's sunny out" by using the + sign.
"Hi There! " + "It\'s \"sunny\" out"
// op:- "HI There! It's sunny out"




// ALERT()
alert()
// aleart is used to pop up the message
// for example if i type
alert("hi there")
// it will pop up an alert along with the message "hi there" 





// prompt()
prompt()
// prompt is used to pop up the message along with to take some input message value
// for example if i type
prompt("type your name")
// then it will show you the message "type your name" along with it will show you a container in which you can send back a message value






// consol.log()
// MESSAGE IN THE CONSOLE LOG
// you can give message in consol log also by using the 
console.log("any message");
// for example:-
console.log("hi there!");
console.log("hope your doing well");
console.log("nice to meet you here");
// it will show these message in the console of the browser





// return






// Math.floor()
// Math.floore is used to round down the number
// if the number in points it will remove the point numbers and gives only the full number only
// for example
Math.floor(1.6);
// it will give you output:-
1





// Math.round()
// it will give the nerest integer
// 1
Math.round(2.6);
// output:-
3
// 2
Math.round(2.4);
// output:-
2




//Math.pow( number , the power of number means index of number that can be square(2) cube(3) etc );
Math.pow(7, 3);  //it means sevens cube
// output:-
343

Math.pow(4, 0.5); //it means 4 to the power 0.5
// output:-
2

Math.pow(-7, 0.5); //it means -7 to the index of 0.5
// output:-
NaN




// Math.random();
// it allow us to create different random number between 0 - to 0.999999999







// Semicolon ( ; )
// in javascript the semicolon means the end of the expression
// most of the cases you dont need it but you shoud used it sometimes it cause an !error! 




// *
// JAVASCRIPT KEYWORDS
// -----------------
// break
// case
// catch
// class
// const
// continue
// debugger
// default
// delete
// do
// else
// export
// extends
// finally
// for
// function            :- set of instruction
// if
// import
// in
// instanceof
// new
// return
// super
// switch
// this
// throw
// try
// typeof
// var
// void
// while
// with
// yield

// operations

5 + "34" // "534"
// here the 5 is an integer and 34 is a string 
// when you add a integer with the string the javascript act like you want to add two strings
// it is not mistake it is the neature of the javascript

5 - "4" // 1
// but when tries you substract the integer by an string it actually substrqact the way of an integer substractor
// it happens because the strings can never substracted
// only integer can be substracted
// hence here the javascript automatically converts the strings into the integer 

10 % 5 // 0
// % its a sign of a modula it always give the output in the reminder

5 % 10 // 5

"Java" + "Script" // "JavaScript"
// you can mearge the two strings by using the plus (+) sign

" " + " " //  "  "
" " + 0 //  " 0"
// when you mearging the int with the string it converts the int into the string automatically

3 - 4 //  -1