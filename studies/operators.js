/**
 * Equal operator: also called the assignment operator because it assigns value to a variable.
 */
//Example: 
var x = 5;
// Equal/Assignment operator sets the value of "x" to 5 in this example.


/**
 * Plus operator: the plus operator can be used to do basic arithmetic or to concatenate strings.
 */
//Example2:
var myString = "Hello ";
var myString2 = "World";
var myNewString = myString + myString2;
console.log(myNewString);
//This example will print "Hello World" to the console.
//Example3:
var numberOne = 1;
var numberTwo = 4;
var newNumber = numberOne + numberTwo;
console.log(newNumber);
// This example will print 5 to the console. numberOne(1) + numberTwo(4) = newNumber(result = 5);

// NOTE: Concatenating a number and a string will result in a string being returned. 
// noteExample1: 
var numberEx = 5;
var stringEx = "5";
var exampleResult1 = numberEx + stringEx;
console.log(typeof exampleResult1);
// This will print string to the console, showing that the concatenation resulted in a string being returned.

/**
 * Subtraction Operator: -
 *_________________________________________________________________________________________________________
 * Used to perform basic arithmetic 
 */
//Example3:
var subtractResult = numberTwo - numberOne;
console.log(subtractResult);
// This will print 3 to the console because numberTwo(4) - numberOne(1) = subtractResult(result = 3)

/**
 * Multiplication Operator: *
 * 
 * Used to perform arithmetic on numbers
 * 
 */
//Example4:
var newNumOne = 2;
var newNumTwo = 5;
var multiplyProduct = newNumOne * newNumTwo;
console.log(multiplyProduct);
// this will print 10 to the console because newNumOne(2) * newNumTwo(5) = multiplyProduct(result = 10)

/**
 * Exponentiation Operator: **
 * 
 * Used to perform arithmetic on numbers.
 */
//Example5:
var newExponentResult = newNumTwo ** newNumOne;
console.log(newExponentResult);
// this will print 25 to the console because newNumTwo(5) ** newNumOne(2) = newExponentResult(result = 25)

/**
 * Division Operator: /
 * 
 * Used to perform arithmetic
 */
//Example6:
var divNumOne = 10;
var divNumTwo = 5;
var divisionResultNum = divNumOne / divNumTwo;
console.log(divisionResultNum);
// This will print 2 to the console because 10/5 = 2

/**
 * Modulus Operator: %
 * 
 * Used to find out if numbers are even, odd, a factor of another number, or a combination of them.
 * Modulus operator will return the value of the REMAINDER
 */
//Example7:
var newMod = 10 % 2;
console.log(newMod);
// this will print 0 to the console because 10 divided by 2 has no remainder. For example, 10 % 3 would return a 1 because
// 3 goes into 10 three times with a remainder of 1.

/**
 * Increment/Decrement Operators: ++ or --
 * 
 * Used to increment or decrement a variable by 1.
 */
//Example8:
var i = 1;
i++;
console.log(i);
// this example will print 2 to the console because var i = 0 then it is incremented by 1 in the line below, giving a result
// of 2. If there were more "i++" lines or it were in a loop for example, this would increment by 1 as many times as necessary

/**
 * MORE ASSIGNMENT OPERATORS:
 * OPERATOR             Ex              SameAs
 *  = 	                x = y 	        x = y
 * += 	                x += y 	        x = x + y
 * -= 	                x -= y 	        x = x - y
 * *= 	                x *= y 	        x = x * y
 * /= 	                x /= y 	        x = x / y
 * %= 	                x %= y 	        x = x % y
 * **= 	                x **= y 	    x = x ** y
 */
//NoteEx2:
var xEx = 5;
xEx += 10;
// this is the same as saying xEx = xEx(5) + 10 => returns 15

// Other notes:
// The + operator can be used on numbers or strings or a combination of the two, but if a number and string are added,
// you will be returned a string.
//Example9:
let text1 = "What a very ";
text1 += "nice day"; 
console.log(text1);
// This will print "What a very nice day" to the console because text1 += "nice day" is the same as text1 = text1 + "nice day"




/**
 * COMPARISON OPERATORS:
 * OPERATOR             DESCRIPTION
 * == 	                equal to/loose comparison
 * === 	                equal value and equal type/strict comparison
 * != 	                not equal
 * !== 	                not equal value or not equal type
 * > 	                greater than
 * <                    less than
 * >= 	                greater than or equal to
 * <= 	                less than or equal to
 * ?                    ternary operator
 * !                    NOT operator
 */

//Comparison operators are used in logical statements to determine equality or difference between variables or values.
// Using comparison operators will return a boolean value.
//Example10:
var compareVar = 1;
var compareVar2 = "1";
console.log(compareVar == compareVar2);
// prints "true" to the console because 1 = "1" as far as VALUE is concerned

//Example11:
console.log(compareVar === compareVar2);
// prints false to the console because even though 1 is LOOSELY equal to "1" their types are different because "1" is a
// string while 1 is a number

/**
 * NOTES ABOUT COMPARISON OPERATORS:
 * When comparing a string with a number, JavaScript always converts the string to a number when doing the comparison.
 * An empty string converts to 0 which is a falsey value.
 * A non-numeric string converts to NaN which is also a falsey value.
 * 
 * Comparing data of different types may give unexpected results:
 * Comparison:              Result:
 * 2 < 12 	                true
 * 2 < "12" 	            true
 * 2 < "John" 	            false
 * 2 > "John" 	            false
 * 2 == "John" 	            false
 * "2" < "12"               false <-- this is because in string form "alphabetically" 2 is greater than 1.
 * "2" > "12" 	            true
 * "2" == "12" 	            false
 */


/**
 * LOGICAL OPERATORS:
 * Operator:                Description:
 * &&                       Logical AND operator
 * ||                       Logical OR operator
 * !                        Logical NOT operator
 * 
 */
//Examples of Logical Operators:
function doSomething(){
    if (1 < 10 && 2 > 1){  // both conditions here are TRUE, so "This is true" prints to the console
        console.log("This is true")
    }
};

function doAnotherThing(){
    if (1 < 10 || 2 < 1){ //only one condition here is true(1<10), but since we used the logical OR operator, it will still print
        console.log("Also true")
    }
};

function lastOne(){
    if (1 != 2){ //prints "This prints" to the console because 1 is NOT EQUAL to 2
        console.log("This prints")
    }
};

/**
 * 
 * Unary Operators: A unary operation is an operation with only one operand.
 *This operand comes either before or after the operator.
 *Unary operators are more efficient than standard JavaScript function calls. 
 *Additionally, unary operators can not be overridden, therefore their functionality is guaranteed.
 */

 //Examples:
 // Unary plus Operator:
 let x = 10;
 let y = +x;
 //If you place the unary plus before a numeric value it does nothing, but when applied to a non-numeric value, it 
 //performs a number conversion using the Number() function, which follows a specific set of rules.
/**
 * Value	        Result
boolean	            false to 0, true to 1
string	            Convert the string value based on a set of specific rules
object	            Call the valueOf() and/or toString() method to get the value to convert into a number
 */
//Example 2:
let s = '10';
console.log(+s); //prints the number 10 to the console
//This will also coerce a boolean value into a number, false to 0 and true to 1
//Example 3:
let f = false;
let t = true;
console.log(+f); // console logs a 0
console.log(+t); // console logs a 1

//Unary minus: if you apply the unary minus to a number it will negate the number, for example:
let xyz = 10;
console.log(-xyz); // will print -10 to the console
// Note: if you use the unary minus on a non-numeric value, it converts the value into a number and then negates the value

//Increment/Decrement Operators

let age = 30;
age++;
console.log(age); //prints 31 to the console here because age = 30 & "age++" increments the age variable by 1.
//The inverse works for the decrement operator.
//Example 2:
let age2 = 41;
age2--;
console.log(age2); // prints 40 to the console because 41 - 1 (from the decrement operator) results in 40

/**
 * Notes:
    Unary operators work on one value.
    Unary plus (+) or minus (-) converts a non-numeric value into a number. The unary minus negates the value after the conversion.
    The prefix increment operator adds one to a value. The value is changed before the statement is evaluted.
    The postfix increment operator adds one to a value. The value is changed after the statement is evaluted.
    The prefix decrement operator subtracts one from a value. The value is changed before the statement is evaluted.
    The postfix decrement operator subtracts one from a value. The value is changed after the statement is evaluted.
 */

/**
 * Ternary Operator: The conditional(ternary) operator is the only JavaScript operator that takes three operands: 
 * a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed
 * by a colon(:), and finally the expression to execute if the condition is falsy. This operator is often used as an alternative
 * to an "if...else" statement.
 */
 function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00'); // will resolve to either $2.00(if isMember = true) or $10.00(if isMember = false)
  }
  console.log(getFee(true));
  // expected output: "$2.00"
  
  console.log(getFee(false));
  // expected output: "$10.00"
  
  console.log(getFee(null));
  // expected output: "$10.00"
  
//Notes: Besides false, falsy expressions are: null, NaN, 0, "", and undefined

const greeting = (person) => {
    const name = person ? person.name : "stranger"; // will return "Howdy" followed by name if a name is given.
    return `Howdy, ${name}`;                        // if no name is given this returns "Howdy stranger"
  }
  
  console.log(greeting({ name: "Alice" }));  // "Howdy, Alice"
  console.log(greeting(null));             // "Howdy, stranger"
  
