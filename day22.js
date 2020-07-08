/* 
 a function, howOld(), that has two number parameters, 
 age and year, and returns how old someone who is currently that age was (or will be) 
 during that year. 
 
 Handle three different cases:

If the year is in the future, you should return a string in the following format:
'You will be [calculated age] in the year [year passed in]'

If the year is before they were born, you should return a string in the following format:
'The year [year passed in] was [calculated number of years] years before you were born'

If the year is in the past but not before the the person was born, you should return a string in the following format:
'You were [calculated age] in the year [year passed in]'

*/

function howOld(age, year) {
  //current year
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  //difference in years
  const yearDifference = year - currentYear;
  const newAge = age + yearDifference;

  if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born`;
  } else {
    return `You were ${newAge} in the year ${year}`;
  }
}

console.log(howOld(22, 2022));
//add more function calls to test your code!
