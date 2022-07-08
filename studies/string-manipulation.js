// 3 examples of string methods
let exampleString = "Balloons";
/**
 * Slice Method: Extracts a part of a string and returns a new string:
 * Example of Slice Method:
 */
// exampleString.slice(1); <= slices 1 character off the beginning of a string
// console.log(exampleString); <= prints "alloons" to the console, the "B" has been sliced from the string
/**
 * Split method: Splits a string into an array of substrings.
 * Example of Split method:
 */
// exampleString.split('') <=splits string between every character when an empty string is inserted.
// Split can also split words into an array using a string of a space
let exampleTwo = "The lazy dog jumped over the fox";
// exampleTwo.split(' ');
// this will split the string(exampleTwo) into an array of:
// ["The", "lazy", "dog", "jumped", "over", "the", "fox"]



// Note: String indexes are zero-based, like arrays, so you can access individual characters of a string using bracket
// notation.

// toLowerCase() & toUpperCase() methods: <= I'm gonna call these "LoUcase"(Lower or Uppercase) to save typing but they
// must be called on a string as seen on the beginning of line 25
/**
 * LoUcase will take an input string and return it to you in either lowercase or uppercase depending
 * on which method is called
 */
// console.log(exampleString.toUpperCase()); <= this will return "BALLOONS"
// console.log(exampleString.toLowerCase()); <= this will return "balloons"
// Note: Strings are immutable, or unable to be changed, so all string methods will return a new value.
// (THEY DO NOT CHANGE THE ORIGINAL VARIABLE)