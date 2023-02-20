// generics
// generics function similar to the parameter but with data types 

// we will use the generic in following class because we need to pass the string value in first object but the number value in the second object 


class Queue<T> {      //a generic is the placeholder for the data types
    private data: T[] = [];

    add(item: T){   //here we have give the datatype a placeholder T
        this.data.push(item);
    }

    remove() {
        this.data.shift();
    }
}

const name_Queue = new Queue<string>();
name_Queue.add("hitesh");
// name_Queue.add("pakhan");

const number_Queue = new Queue<number>();
number_Queue.add(5);



// genericsalso use with functions and class methods

// functions
function someFunction<T>(paramOne: T) : T {     //the third T is for the return data type
    return paramOne;
}

// class method
class SomeClass{
    someMethod<T>(items: T[]): T[]{
        return items;
    }
}