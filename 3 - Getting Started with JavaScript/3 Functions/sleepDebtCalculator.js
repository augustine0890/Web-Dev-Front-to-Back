const getSleepHours = day => {
    day = day.toLowerCase();
    if (day === "monday") {
      return 7.5;
    } else if (day === 'tuesday') {
      return 6.5;
    } else if (day === 'wednesday') {
      return 7;
    } else if (day === 'thursday') {
      return 6.5;
    } else if (day === 'friday') {
      return 6;
    } else if (day === 'saturday') {
      return 9;
    } else if (day === 'sunday') {
      return 9;
    }
};

// console.log(getSleepHours('Saturday'));

const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

// console.log(getActualSleepHours());
/*
const getIdealSleepHours = () => {
  let idealHours = 7.5;
  return idealHours * 7;
}
*/
const getIdealSleepHours = idealHours => idealHours * 7;

// console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(7.5);
  if (actualSleepHours === idealSleepHours) {
    console.log('You got a perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed.');
  } else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less than you needed this week. You should get some rest.');
  }
};
calculateSleepDebt();