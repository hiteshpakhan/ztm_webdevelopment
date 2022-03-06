// build in module that come already with node

// here we are ging to install nodemon for learning purpose

// npm install nodemon --save-dev

// this will add the nodemon inside the devDependency in the json file

// we only use the devDependency when we are developing

const script2 = require("./script2.js")

const a = script2.large_number;
const b = 5;

console.log(a + b);
console.log("hi there")