/**
 * 
 * 
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.
 * Variables are named identifiers that can point to values of a particular type,
 * like a Number, String, Boolean, Array, Object, or another data-type.
 * Variables are called so because once created, we can CHANGE the value (and type of value)
 * to which they point.
 * 
 * 1. To create a variable we use the keyword, var, let or const, followed by a name
 * (ID or alias) for our variable.
 * 
 * 2. There are 2 phases of using variables: declaration and initialization(or assignment).
 * 
 * Ex:
 * var myName;  <= var my name is declared but not set to any value yet, therefore the
 * variable will return undefined if console.log is used on it.
 * 
 * my name = "Zach" <= the variable declared on line 16 is now assigned to the 
 * string value of "Zach"
 * 
 * Declaration and initialization can be done on the same line as well.
 * 
 * Ex2:
 * var myName = "Zach" <= Variable is declared and initialized on the same line.
 * 
 * 
 * 
 */
var myName = "Zach" // => assigns variable myName to "Zach"
console.log(myName); // => prints Zach to the console
myName = "Bob" // => re-assigns variable myName to "Bob"
console.log(myName); // => prints Bob to the console because variable has been re-assigned

/**
 * Keywords:
 * _________________________________________________________________________________________
 * The var keyword CAN be reassigned &/or redeclared and has a global OR local scope.
 * 
 * 
 * The let keyword cannot be redeclared, but CAN be reassigned. The variable keyword
 * "let" naturally takes on a block scope.
 * 
 * 
 * The const keyword CANNOT be reassigned or redeclared. This keyword is meant for something
 * that will stay CONSTANT throughout your program.
 * 
 * Note: If you use let OR const in global scope the variable will still be global scope.
 * 
 * 
 * 
 * Hoisting:
 * _________________________________________________________________________________________
 * When reading a program, the compiler will "hoist" things, meaning bringing them to the
 * top of the file, so that your compiler is able to read global variables on lines
 * even before they are declared.
 * VAR:
 * _________________________________________________________________________________________
 * Var is the only hoisted variable keyword. This is because var naturally has global scope.
 * The keywords "let" and "const" naturally take on block scope, but can have global scope
 * if they are declared in the global scope of the program you're developing.
 * LET:
 * _________________________________________________________________________________________
 * Let is another variable keyword. Let naturally has "block scope", but can be global scope if it is written in the global
 * scope of your file. Let CANNOT be redeclared, but can be re-assigned.
 * 
 * CONST:
 * _________________________________________________________________________________________
 * 
 * The const keyword CANNOT be redeclared or re-assigned. Const, like let, also naturally takes on a block scope, unless it
 * is declared in the global scope of the file you are working in. The purpose of the const keyword is to declare CONSTANT
 * variables, or something that will never change throughout your program.
 * 
 * 
 * Block Scope = when you have a variable that is "block scoped", you can only use it
 * in THAT block of code it is written in.
 */

// Examples of LET and CONST:
function loopArray(array){
    for (let i = 0; i < array.length; i++){
    }
    return array[i];
}
// The "i" inside of the function has a "block scope" of that function and cannot be called outside of that function's scope.

const myName = "Zach";

// example of a constant variable, myName, which will not change.
// attempting to redeclare or reassign a const variable will cause a syntax error as seen below:
//SyntaxError: Identifier 'myName' has already been declared
