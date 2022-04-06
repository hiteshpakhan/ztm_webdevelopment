// .style
// .background
// "input"         (event)



// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// color1.addEventListener("input", function(){
//     body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";
// })

// color2.addEventListener("input", function(){
//     body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";
// });


// now if you want you can short the upper code by using function



var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function a(){
    body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

    css.textContent = body.style.background + ";"    // textContent is just like the "innerhtml" or "addTextNode" and here the css is the variable that we define earlyer
}

color1.addEventListener("input", a);

color2.addEventListener("input", a);