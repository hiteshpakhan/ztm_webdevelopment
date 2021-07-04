
// *
// JAVASCRIPT COMPARISONS
// -----------------
// !==
// ===
// >=
// <=
// >
// <


5 >= 1 // true
// these are the javasvript comparison

0 === 1 //  false
// when you comparing the number you have to compare with three equal signs ( === )

4 <= 1 //  false

1 != 1 //  false
// this is the not sing (!)

"A" > "B" //  false
"B" < "C" //  true
"a" > "A" //  true
"b" < "A" //  false
true === false //  false
true != true // false


if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}