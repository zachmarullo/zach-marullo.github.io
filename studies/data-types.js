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