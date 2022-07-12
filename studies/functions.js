/**
 * Function Declaration:
 * a function declaration introduces an identified that designates a function and optionally specifies the types of the
 * function parameters.
 *  
 */
//Example 1:
function add(x, y){
    return x + y;
};
console.log(add(1, 3));
//prints 4 to the console because 1 + 3 = 4
/**
 * In this case, "add" is the name of the function. X and Y are the parameters, when the function is invoked/called,
 * the parameters become arguments.
 * Statements are what comprise the body of the function, in this case "return x + y;"
 * Function declarations are "hoisted" to the top of the file in which you are working, which means calling them before
 * the line the function is declared on will not result in an error. Function declaration is considered the safest
 * method of writing functions as a beginner because there are the least side effects associated with this method.
 */

/**
 * Function Expression:
 * 
 * A function expression occurs when a function is assigned to a variable. See Example at bottom of page.
 * Function Expressions can be used as an IIFE, or Immediately Invoked Function Expression, meaning that it runs as soon as
 * it is defined.
 */
//Example 2:
const getRectArea = function(width, height){
    return width * height;
};
console.log(getRectArea(3, 4));
//Prints 12 to the console because the result of executing the area function defined (3 x 4) = 12
// Unlike function declarations, function expressions are not "hoisted" to the top, meaning you cannot use
// a function expression before(above) where it is created.
//Example of an IIFE:
!function(){
    console.log("This prints");
};
/**
 * Note: If you want to refer to the current function inside the function body, you need to create a named function expression. 
 */

//Function expression example:
let multiply = function(x, y) {  // function is stored in a variable called "multiply"
    return x * y;
}

// difference between parameters and arguments:
// A parameter is a placeholder that will take in arguments in a function in the future.
// For example, in the multiply function above, "x" and "y" are parameters because they are just signifying that values
// will be passed in to the function in the future. Parameters become arguments when actual values are passed into the function

multiply(2, 3); // 2 and 3 here are ARGUMENTS because they are actual values being passed into the multiply function
console.log(multiply(2, 3)); // prints 6 to the console

/**
 * Scope:
 * The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use.
 * Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.
 * JavaScript has the following kinds of scopes:

    Global scope: The default scope for all code running in script mode.
    Module scope: The scope for code running in module mode.
    Function scope: The scope created with a function.

In addition, variables declared with let or const can belong to an additional scope:

    Block scope: The scope created with a pair of curly braces (a block).

 */
//Example:
function exampleFunction() {
    let x = "inside example function"; 
    console.log(x); // prints "inside example function" to the console because the value of x is called INSIDE the function
}
console.log(x); // this will throw an error because x is not defined in the global scope, therefore the value cannot be
                // reached here
// Inversely, if the variable is declared in the global scope it CAN be accessed inside of a function
//Example:
var y = "outside of a function"

function exampleFunction2() {
    console.log(y); // will still print "outside of a function" to the console because y was declared in the global scope
}
//Note: blocks only will scope let and const declarations, but not var declarations.
// Scope is essentially the part of a program where a given binding is valid depending on its context/environment within
// the program.
// Functions can also access and or modify variables in the parent scope
let zzz = 1;

function doTheThing() {
    return zzz++;
}
doTheThing(); // calling function "doTheThing" do increment global variable "zzz" by 1
console.log(zzz); // results in 2 being printed to the console, because even though zzz is in global scope, it can be accessed
                  // and/or modified inside of the function
/**
 * Closure: A closure is the combination of a function bundled together with references to its surrounding state.
 * A closure gives access to an outer function's scope from an inner function. In JavaScript, closures are created every
 * time a function is created, at function creation time.
 */
//Example:
function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12
  // this is an example of a closure because the value of x is being held on to and used within the inner function which takes
  // a "y" parameter and returns the added value between the two.
// add5 and add10 are both closures because they share the same function body definition, but store different lexical
// environments. In add5's lexical environment, x is 5, while in add10 x is equal to 10 instead.