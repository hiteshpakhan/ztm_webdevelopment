// to install the typescript you can use the following command 
// npm install typescript --save-dev

// to un any typescript code we have to comnvert it ino the javascript code we can do that by 
// npx tsc file_name.ts


// even we change the extention of a javascript file from .js to the .ts than it will still works without any problem
// typescript introduces static typing to the language
console.log("hi there javascript is the subset of typescript")

// type annotations
// type annotationsare a way to describe the data in our application
// we can anotate variable functions arrays objects etc.


// function anotation
function addShipping(price: number, shipping: number) : number {
    return price + shipping;
}

addShipping(10, 5);


