/* 
Race Day

You have been hired to write a program that will register runners for the race 
and give them instructions on race day.

Here’s how our registration works. There are adult runners (over 18 years of age) 
and youth runners (under 18 years of age). They can register early or late. 
Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
*/

//Race numbers are assigned randomly
let raceNumber = Math.floor(Math.random() * 1000);

//variable that indicates whether a runner registered early or not.
let registeredEarly = true;

//variable for the runner’s age
let runnerAge = 18;

//control flow statement that checks whether the runner is an adult AND registered early.
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Your race number is ${raceNumber}, race starts 11:00 am`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber}, race starts 12:30 pm`);
} else {
  console.log(` see the registration desk`);
}

//control flow statement that checks age and registration time to determine race time.
if (runnerAge > 18 && registeredEarly) {
  console.log(`Your race number is ${raceNumber}, race starts 9:30 am`);
}
