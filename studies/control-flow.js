/**
 * Control Flow: The order in which the computer executes statements in a script. 
 * Code is run in order from the first line in the file to the last line, unless the computer runs across the
 *  (extremely frequent) structures that change the control flow, such as conditionals and loops.
 * 
 * 
 * Block Statements:
 * The most basic statements in a script, which is used to group statements. The block is denoted by a pair of curly braces.
 * These statements are commonly used with control flow statements, such as an if, for, or while loop.
 */
//Example 1:(if conditional)
if (1 === 1) { /// 1 === 1 resolves to "true" so "This prints" is logged to the console.
    console.log ("This prints");
};
//Example 2: (for loop)
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++){
//       ^ this statement sets a counting variable equal to some number to start the loop
//                     ^ middle statement tells the loop how long to keep looping for
//                                 ^statement increments the counting variable in order to keep a loop from running endlessly
    console.log(arr[i]); // prints each iteration's value
};
/**
 * multiple conditional statements can be chained in an if-else statement-chain
 * Ex:
 * if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
}
 * 
 * */
// Note: In the case of multiple conditions, only the first condition that evaluates to true will be executed.

/**
 * Falsy Values that will resolve to "false" (and keep a conditional from running)
 * - false
 * - undefined
 * - null
 * - 0
 * - NaN
 * - ""   <= (an empty string)
 */

/**
 * Another way to use control flow is a switch statement.
 * A switch statement allows a program to evaluate an expression and attempt to match the expression's
 * value to a "case" label. If a match is found, the program executes the associated statement.
 * 
 *
switch (expression) {
  case label_1:
    statements_1;
    break;
  case label_2:
    statements_2;
    break;
    …
  default:
    statements_default;
}
 */
// Note: If a "break" statement is omitted, the program will continue execution inside the switch statement.
// Example of Switch Statement:
switch (fruitType) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
      console.log('Mangoes are $0.56 a pound.');
      break;
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log(`Sorry, we are out of ${fruitType}.`);
  }
  console.log("Is there anything else you'd like?");
  