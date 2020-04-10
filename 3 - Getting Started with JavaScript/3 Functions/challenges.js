const canIVote = age => age >= 18;
// Uncomment the line below when you're ready to try out your function
console.log(canIVote(29)); // Should print true

const agreeOrDisagree = (str1, str2) => {
    if (str1 === str2) {
      return 'You agree!';
    } else {
      return 'You disagree!';
    }
};
// Uncomment the line below when you're ready to try out your function
console.log(agreeOrDisagree("yep", "yep"));
// Should print 'You agree!'

const lifePhase = age => {
  if (age >= 0 && age < 4) {
    return 'baby';
  } else if (age >= 4 && age < 13) {
    return 'child';
  } else if (age >= 13 && age < 20) {
    return 'teen';
  } else if (age >= 20 && age < 65) {
    return 'adult';
  } else if (age >= 65 && age < 141) {
    return 'senior citizen';
  } else {
    return 'This is not a valid age';
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(5)) //should print 'child'
// console.log(lifePhase(19))
// console.log(lifePhase(65))
// console.log(lifePhase(160))


const finalGrade = (s1, s2, s3) => {
  if ((s1 < 0 || s1 > 100) || (s2 < 0 || s2 > 100) || (s3 < 0 || s3 > 100)) {
    return 'You have entered an invalid grade.';
  }
  const avg = (s1 + s2 + s3)/3;
  if (avg >= 0 && avg < 60) {
    return 'F';
  } else if (avg >= 60 && avg < 70) {
    return 'D';
  } else if (avg >= 70 && avg < 80) {
    return 'C';
  } else if (avg >= 80 && avg < 90) {
    return 'B';
  } else if (avg >= 90 && avg < 100) {
    return 'A';
  }
}
// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)) // Should print 'A'


const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`;
// Uncomment the line below when you're ready to try out your function
console.log(reportingForDuty('Private', 'Fido')); // Should return 'Private Fido reporting for duty!'


const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random() * 6 + 1);
    let die2 = Math.floor(Math.random() * 6 + 1);
    return die1 + die2
}
console.log(rollTheDice());


const calculateWeight = (earthWeight, planet) => {
  planet = planet.toLowerCase();
  switch (planet) {
    case 'mercury':
      return earthWeight * 0.378;
    case 'venus':
      return earthWeight * 0.907;
    case 'mars':
      return earthWeight * 0.377;
    case 'jupiter':
      return earthWeight * 2.36;
    case 'saturn':
      return earthWeight * 0.916;
    default:
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
}
// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, 'Jupiter')) // Should print 236


const truthyOrFalsy = value => Boolean(value);
// Uncomment the line below when you're ready to try out your function
console.log(truthyOrFalsy(null))
// console.log(truthyOrFalsy(true)) // Should print false
// console.log(truthyOrFalsy(undefined))


// const numImaginaryFriends = total => Math.round(total/3);
const numImaginaryFriends = total => Math.round(total * 0.33);
// Uncomment the line below when you're ready to try out your function
console.log(numImaginaryFriends(18)) // Should print 6


const sillySentence = (adjective, verb, noun) => {
  return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`
};
// Uncomment the line below when you're ready to try out your function
console.log(sillySentence('excited', 'love', 'functions'));


const howOld = (age, year) => {
// The following two lines make it so that our function alwaysknows the current year.
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
// It is totally ok if your function used the current yeardirectly!
  
    const yearDifference = year - thisYear
    const newAge = age + yearDifference
    if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}

console.log(howOld(30, 2020));
/*
let date = new Date()
console.log(date.getFullYear());
*/


const whatRelation = percentSharedDNA => {
  if (percentSharedDNA === 100) {
      return 'You are likely identical twins.'
  }
  if (percentSharedDNA >= 35 && percentSharedDNA < 100) {
      return 'You are likely parent and child or full siblings.'
  }
  if (percentSharedDNA >=14 && percentSharedDNA < 35) {
      return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
  }
  if (percentSharedDNA >= 6 && percentSharedDNA < 14) {
      return 'You are likely 1st cousins.'
  }
  if (percentSharedDNA >= 3 && percentSharedDNA < 6) {
      return 'You are likely 2nd cousins.'
  }
  if (percentSharedDNA >= 1 && percentSharedDNA < 3) {
      return 'You are likely 3rd cousins'
  }
  return 'You are likely not related.'
}
console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'


const tipCalculator = (quality, total) => {
  switch (quality) {
    case 'bad':
      return total * 0.05;
    case 'ok':
      return total * 0.15;
    case 'good':
      return total * 0.2;
    case 'excellent':
      return total * 0.3;
    default:
      return total * 0.18;
  }
}
// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20
console.log(tipCalculator('ok', 115))


const toEmoticon = emo => {
  switch (emo) {
    case 'shrug':
      return '|_{"}_|';
    case 'smiley face':
      return ':)';
    case 'frowny face':
      return ':(';
    case 'winky face':
      return ';)';
    case 'heart':
      return '<3';
    default:
      return '|_(* ~ *)_|';
  }
}

// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever")) 
// Should print  '|_(* ~ *)_|'