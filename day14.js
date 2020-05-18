/*

    Write a function, agreeOrDisagree(), 
    that takes in two strings, 
    and returns 'You agree!' if the two strings are the same 
    and 'You disagree!' if the two strings are different.

*/

const agreeOrDisagree = (strOne, strTwo) => {
  if (strOne === strTwo) {
    return 'You agree!';
  } else {
    return 'You disagree!';
  }
};

console.log(agreeOrDisagree('yep', 'yep')); //You agree!
console.log(agreeOrDisagree('yep', 'yup')); //You disagree!
