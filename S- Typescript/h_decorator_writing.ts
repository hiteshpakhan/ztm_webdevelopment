function MenuItem(itemID: string){
    return (target: Function) => {
        target.prototype.id = itemID;
    }  
} 

@MenuItem("abc")
class Pizza{
    id: string;
}

@MenuItem("xyz")
class Hamburger{
    id: string;
}

console.log(new Pizza().id);

// npx tsc      //this is the command that will convert all the available files into the js files
// and to run the h_decorator_writing file we can use the following command
// node h_decorator_writing.ts