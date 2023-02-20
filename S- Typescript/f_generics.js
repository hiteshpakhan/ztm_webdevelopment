// generics
// generics function similar to the parameter but with data types 
// we will use the generic in following class because we need to pass the string value in first object but the number value in the second object 
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function () {
        this.data.shift();
    };
    return Queue;
}());
var name_Queue = new Queue();
name_Queue.add("hitesh");
// name_Queue.add("pakhan");
var number_Queue = new Queue();
number_Queue.add(5);
// genericsalso use with functions and class methods
// functions
function someFunction(paramOne) {
    return paramOne;
}
// class method
var SomeClass = /** @class */ (function () {
    function SomeClass() {
    }
    SomeClass.prototype.someMethod = function (items) {
        return items;
    };
    return SomeClass;
}());
