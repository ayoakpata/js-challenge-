/* 
    Write a function, convertToBaby(), that takes in an array 
    as an argument and, using a loop, 
    returns a new array with each string in the array prepended with 'baby '.
*/

function convertToBaby(arr) {
  let babyArr = [];
  for (let i = 0; i < arr.length; i++) {
    babyArr.push(`baby ${arr[i]}`);
  }
  return babyArr;
}

//const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

//console.log(convertToBaby(animals))

// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
