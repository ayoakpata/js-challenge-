/* 

Create a function, tipCalculator(), that has two parameters, 
a string representing the quality of the service received 
and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%

*/
// Write your function here:
function tipCalculator(quality, total) {
  if (quality === 'bad') {
    return (5 / 100) * total;
  } else if (quality === 'ok') {
    return (15 / 100) * total;
  } else if (quality === 'good') {
    return (20 / 100) * total;
  } else if (quality === 'excellent') {
    return (30 / 100) * total;
  } else {
    return (18 / 100) * total;
  }
}

//how to make this code more reusable

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('ok', 100)); //should return 20

// We encourage you to add more function calls of your own to test your code!
