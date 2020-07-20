/* Write a function, greetAliens(), 
that takes in an array of strings and uses a 
for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!” */

function greetAliens(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`
    );
  }
}

//  uncomment the below and run:

const aliens = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];

greetAliens(aliens);
