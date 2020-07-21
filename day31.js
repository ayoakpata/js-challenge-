/* Write a function, squareNums(), that takes in an array of numbers and, 
using .map(), returns an array with the square of each of the elements of 
that array.
*/

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

//function expression
const squareNums = (numbers) => {
  return numbers.map(toSquare);
};

//function declaration
function squareNums() {
  return numbers.map(toSquare);
}

console.log(squareNums(numbers));

//this really gave me a tough time but figured it out.
//Had to break the code into smaller simple steps to comprehend better
