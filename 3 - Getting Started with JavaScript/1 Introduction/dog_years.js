// My age
const myAge = 30;

// The first two years of a dog’s life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears = earlyYears * 10.5;

// Each year following equates to 4 dog years.
laterYears = myAge - 2;
laterYears *= 4;

// console.log(earlyYears)
// console.log(laterYears)

let myAgeInDogYears = earlyYears + laterYears;

myName = 'Augustine'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);