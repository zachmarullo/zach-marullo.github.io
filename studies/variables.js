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
 * 
 * Var is the only hoisted variable keyword. This is because var naturally has global scope.
 * The keywords "let" and "const" naturally take on block scope, but can have global scope
 * if they are declared in the global scope of the program you're developing.
 * 
 * Block Scope = when you have a variable that is "block scoped", you can only use it
 * in THAT block of code it is written in.
 * 
 */
