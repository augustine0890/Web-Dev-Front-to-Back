let raceNumber = Math.floor(Math.random() * 1000);

let isEarly = true; // false

let ageRunner = 30;

if (ageRunner >= 18 && isEarly) {
  raceNumber += 1000;
}

// console.log(raceNumber);

if (ageRunner > 18 && isEarly) {
  console.log(`Runners who are ${ageRunner} years and registered early run will start at 9:30 am. The Race Number is ${raceNumber}`);
} else if (ageRunner > 18 && isEarly === false) {
  console.log(`Runners who are ${ageRunner} years old and did NOT register early will run at 11:00 am. The Race Number is ${raceNumber}`);
} else if (ageRunner < 18 && isEarly) {
  console.log(`Runners who are ${ageRunner} years old and registered early will run at 12:30 pm. The Race Number is ${raceNumber}`);
} else if (ageRunner < 18 && isEarly === false) {
  console.log(`Runners who are ${ageRunner} years old and did NOT register early will run at 12:30 pm. The Race Number is ${raceNumber}`);
} else {
  console.log('Check the registration desk.')
}