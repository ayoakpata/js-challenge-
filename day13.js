/* Write a function, finalGrade(). It should:
take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ 
if any of the three grades are less than 0 or greater than 100

0-59 should return: ‘F’
60-69 should return: ‘D’
70-79 should return: ‘C’
80-89 should return: ‘B’
90-100 should return: ‘A’ */

// Write your function here:
function finalGrade(test, midTerm, exam) {
  //check if grades are < 0 || > 100
  if (
    test < 0 ||
    test > 100 ||
    midTerm < 0 ||
    midTerm > 100 ||
    exam < 0 ||
    exam > 100
  ) {
    return 'You have entered an invalid grade.';
  }

  let average = (test + midTerm + exam) / 3;

  if (average > 0 && average <= 59) {
    return 'F';
  } else if (average >= 60 && average <= 69) {
    return 'D';
  } else if (average >= 70 && average <= 79) {
    return 'C';
  } else if (average >= 80 && average <= 89) {
    return 'B';
  } else if (average >= 90 && average <= 100) {
    return 'A';
  }
}

console.log(finalGrade(40, 40, 40)); // Should print 'F'
console.log(finalGrade(400, 4000, -40)); // You have entered an invalid grade.
console.log(finalGrade(90, 90, 90)); // Should print 'A'
console.log(finalGrade(70, 70, 70)); // Should print 'C'
console.log(finalGrade(60, 60, 60)); // Should print 'D'
