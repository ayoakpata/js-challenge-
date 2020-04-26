/* Write a JavaScript function that compares two arrays 
and prints whether they are equal or not.

Note: Two arrays are considered equal if both arrays contain the same number 
of elements, and all corresponding pairs of elements in the two arrays 
are equal. In other words, two arrays are equal if they contain 
the same elements in the same order. */

function isEqual(arr1, arr2) {
  // checking if length is not equal
  if (arr1.length !== arr2.length) return false;
  else {
    // comparing each element of array
    for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

isEqual([1, 2, 3, 4, 10], [3, 5, 6, 1, 10]);
