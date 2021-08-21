var inside = document.querySelector("h1").innerHTML;

if(inside === "Hello Everyone"){
    document.querySelector("h1").innerHTML = "👇";
}
// -----

document.querySelector("input").click();
// -----

document.getElementsByTagName("li")[0].style.color="red";
// -----

var countitem = document.getElementsByTagName("li").length;
document.querySelector("p").innerHTML = "there are "+countitem+" items in the li tag";
// -----





