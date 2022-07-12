// Simple and Complex pieces of Data:
/**
 * Simple(Primitive) Data Types:
 * 
 * String
					represents textual data
					'hello', "hello world!" etc
			
Number
					an integer or a floating-point number
					3, 3.234, 3e-2 etc.
			
BigInt
					an integer with arbitrary precision
					900719925124740999n , 1n etc.
			
Boolean
					Any of two values: true or false
					true and false
			
undefined
					a data type whose variable is not initialized
					let a;
			
null
					denotes a null value
					let a = null;
			
Symbol
					data type whose instances are unique and immutable
					let value = Symbol('hello');
 * 
 */
// Complex Data Types:
// Complex data types are usually a composites of primitive data.
// Complex data types are functions, objects, or arrays.
// Object Example:
let zMM = {
    firstName: "Zach",
    lastName: "Marullo",
    middleName: "Michael"
};
//Array Example:
let array1 = [1, 2, "Hello", 3, "Dog"];

// function example
function loop(array) {
    for (let i = 0; i < array.length; i++) {
        return array[i];
    }
};
//console.log(loop(array1));

//Boolean Expressions: expressions that will resolve to true or false
//Example:

var isGreater = 5 > 10;
console.log(isGreater); //this will print false to the console because 5 is less than 10
var isLesser = 5 < 10;
console.log(isLesser); // this will print true to the console because 5 is less than 10

//NaN description: NaN is short for "Not-A-Number"
// In JavaScript, NaN is a number that is not a legal number. For example, trying to add a number to a string value will
// result in NaN being logged to the console
var notNumber = 5 + "a";
console.log(notNumber); // prints NaN to the console because 5 and "a" cannot be added together.
//Number.isNaN() will return true if a NUMBER is not a number, however just using isNan() will convert the value 
// into a number before testing it.
//Examples:
isNaN("hello") // This returns true because "hello" is converted to a number before testing.
Number.isNaN("hello") // will return false because "hello" itself is not a number

/**
 * Copy by value vs. copy by reference:
 * Primitive data types such as strings or numbers will be copied by value, which is opposite to complex data types
 * such as objects and arrays being copied by a reference. This means that even if two objects contain the exact same
 * data they will not resolve to true when compared because the two objects have different reference points.
 */
//Example:
var five = 5;
var six = five;
console.log(five === six); // prints true to the console because the value of the variable 5 was copied by value, not reference

//Example2:
var zmm = {
	firstName: "Zach"
};
var zmm2 = {
	firstName: "Zach"
};
var zmm3 = zmm;
console.log(zmm === zmm2); // will print false to the console because even though they contain the same data, they point
						   // to different references.

console.log(zmm === zmm3); // will print true to the console because they point to the same reference of the object