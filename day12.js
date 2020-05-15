/* 
    The most common minimum age to vote is 18. 
    Write a function canIVote() that takes in a number, 
    representing the person’s age, and returns the boolean true 
    if they are 18 years old or older, 
    and the boolean false if they are not.
*/

//using ternary operator
function canIVote() {
  let age = 18;
  let voteI = age >= 18 ? true + ' - age appropriate' : false + ' - under age';

  return voteI;
}
canIVote();

//using if/else
function canIVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
canIVote(19); //returns true
canIVote(16); //returns false
