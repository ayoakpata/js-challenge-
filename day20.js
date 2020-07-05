/* a function, numImaginaryFriends(), 
that takes in the total number of friends a person has and 
returns the number of imaginary friends they have.

Since friends can only come in whole numbers, 
be sure to round your result before returning it. */

function numImaginaryFriends(totalFriends) {
  let imaginaryFriends = Math.round(totalFriends * 0.33);
  return imaginaryFriends;
}

// Uncomment the line below when you're ready to try out your function
//console.log(numImaginaryFriends(200)); // Should print 66

//add more function calls of your own to test your code!
