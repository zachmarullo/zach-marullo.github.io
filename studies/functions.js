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
 * Function expression allows you to created an anonymous function which doesn't have any function name. This is
 * the main difference between function expression and function declaration.
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
