/* 
    a function, calculateWeight(). It should:

have two parameters: earthWeight and planet
expect earthWeight to be a number
expect planet to be a string
return a number representing what that Earth-weight would equate to on the planet passed in.
Handle the following cases:
'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
*/

// Write your function here:

function calculateWeight(earthWeight, planet) {
  if (planet === 'Mercury') {
    return earthWeight * 0.378;
  } else if (planet === 'Venus') {
    return earthWeight * 0.907;
  } else if (planet === 'Mars') {
    return earthWeight * 0.377;
  } else if (planet === 'Jupiter') {
    return earthWeight * 2.36;
  } else if (planet === 'Saturn') {
    return earthWeight * 0.916;
  } else {
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
}

// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, 'Jupiter')); // Should print 236

//add more function calls to display other planets

//use switch statement instead of if/else
switch (expression) {
  case 'firstCase':
  // Do something
  case 'secondCase':
  // Do something
  default:
  // Do something
}
