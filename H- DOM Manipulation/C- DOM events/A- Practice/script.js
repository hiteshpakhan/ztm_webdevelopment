var inside = document.querySelector("h1").innerHTML;

if(inside === "Hello Everyone"){
    document.querySelector("h1").innerHTML = "👇";    
}
// -----

document.querySelector("input").click();   //it will on the click 
document.querySelector("input").click();   //it will off the click
// -----

document.getElementsByTagName("li")[0].style.color="red";   //it will set the color red of the frist li element  
// -----

var countitem = document.getElementsByTagName("li").length;
document.querySelector("p").innerHTML = "there are "+countitem+" items in the li tag";
// -----





