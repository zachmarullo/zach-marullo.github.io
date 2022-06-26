//Types of loops:
/**
 * For Loop:
 * Iterates through each individual item of an array. For loops will execute a block of code as long as a condition
 * is true. The condition expression is reevaluated on every loop and will continue to execute as long as the condition
 * remains true. A for loop contains 3 parts, the initialization, the condition, and the iteration.
 * 
 */
// Syntax of for loop:
for(let i = 0; i < 10; i++){
    //conditional code goes here
}
// This loop initializes the counting variable, i, at 0 and increments i by 1 every time it reaches the end of the loop.
// The loop will continue to run and execute whatever code is in the curly braces below it as long as i is less than
// 10 in this case. (Will execute until i meets condition in second part of loop).

/**
 * For in Loop:
 * Loop used to iterate through objects and their key-value pairs. This loop allows you to access values 
 * inside of an object.
 */
// Syntax of For in loop:
for (property in object) {
  // code goes here
}
//Example:
const capitals = {
    a: "Athens",
    b: "Belgrade",
    c: "Cairo"
  };
  
  for (let key in capitals) {
    console.log(key + ": " + capitals[key]);
  }
  // Output:
  // a: Athens
  // b: Belgrade
  // c: Cairo
  // Note: for...in loops can be used to iterate over arrays, but it is not reccomended because
  // for...in loop may not iterate over the array in correct order.

  /**
   * While Loop:
   *The while loop starts by evaluating condition. 
   *If condition evaluates to true, the code in the code block gets executed.
   *If condition evaluates to false, the code in the code block is not executed and the loop ends.
   */
  //Example:
  let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

/**
 * Do...while Loop:
 * This loop is closely related to a while loop, but the condition is checked at the end of each iteration
 * rather than the beginning, meaning that a do...while loop will always execute at least one time.
 */
//Example:
const myArray = [];
let k = 10;

do {
  myArray.push(i);
  k++;
} while (k < 10);

console.log(myArray);
// Output:
// [10] because even though k is already 10, the loop does not check the value until the first iteration has completed
