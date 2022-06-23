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

