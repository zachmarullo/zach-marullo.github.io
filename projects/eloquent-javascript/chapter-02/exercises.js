
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
for (let triangle = "#"; triangle.length <= num; triangle += "#"){
  console.log(triangle);
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  var i = 1;
  while( i <= 15){
    if (i % 5 === 0 && i % 3 === 0){
            console.log("fizzbuzz");
  } else if (i % 5 === 0){
      console.log("buzz")
  } else if (i % 3 === 0){
      console.log("fizz")
  } else{
    console.log(i);
  }  i++;
}}
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  let size = num;
  let board = "";
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x+y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      } 
    }
     board += "\n";
  }
  console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
