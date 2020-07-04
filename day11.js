//get hours of sleep of a particular day
const getSleepHours = (day) => {
  switch (day) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 6;
      break;
    case 'Wednesday':
      return 3;
      break;
    case 'Thursday':
      return 4;
      break;
    case 'Friday':
      return 7;
      break;
    case 'Saturday':
      return 5;
      break;
    case 'Sunday':
      return 6;
      break;
    default:
      return 'day not found';
      break;
  }
};

//get the total sleep hours that you slept
const getActualSleepHours = () =>
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');

//get the ideal sleep hours that you prefer
function getIdealSleepHours() {
  let idealHours = 6;
  return idealHours * 7;
}

//console.log(getActualSleepHours(), 'actual sleep hours');
//console.log(getIdealSleepHours(), 'ideal sleep hours');

//to calculate sleep debt
function calculateSleepHours() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(`you had perfect amount of sleep`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`you had more amount sleep than desired`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`you had less amount sleep than desired`);
  } else {
    console.log('Error! Something went wrong. Please try again.');
  }
}

calculateSleepDebt();
