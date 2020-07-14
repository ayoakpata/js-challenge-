/* 

Write a function, reverseArray(), 
that takes in an array as an argument 
and returns a new array with the elements 
in the reverse order.

*/

function reverseArray(array) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    output.unshift(array[i]);
  }
  return output;
}

// When you're ready to test your code, uncomment the below and run:

//const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];
