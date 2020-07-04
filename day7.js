//Dog Years

/*Dogs mature at a faster rate than human beings. 
We often say a dog’s age can be calculated in “dog years” to 
account for their growth compared to a human of the same age. 
In some ways we could say, time moves quickly for dogs — 8 years in a human’s life 
equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.*/

//declare age
const myAge = 29;

//decalre for dog's early years
let earlyYears = 2;

earlyYears *= 10.5;

//later years
let laterYears = myAge - 2;

//calculate the number of dog years accounted for by later years.
laterYears *= 4;

//Add earlyYears and laterYears together,
const myAgeInDogYears = earlyYears + laterYears;

//Write your name as a string
const myName = 'AYO'.toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
