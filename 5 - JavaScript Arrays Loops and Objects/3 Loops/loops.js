// Repeating Tasks Manually
/*
const vacationSpots = ['Swiss', 'France', 'Italy'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);
*/

// The For Loop
for (let i = 5; i <= 10; i++) {
    console.log(i);
}

// Looping in Reverse
for (let counter = 3; counter >= 0; counter--) {
    console.log(counter);
}

// Looping through Arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

// Nested Loops
const bobsFollowers = ['John', 'Max', 'Trump', 'Taylor'];
const tinasFollowers = ['Taylor', 'Bill', 'Trump'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(tinasFollowers[j]);
        }
    }
};
console.log(mutualFollowers);

// The While Loop
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
};

// Do...While Statements
let countString = '';
let i = 0;
do {
    countString = countString + i;
    i++;
} while (i < 5);
console.log(countString);

const cupsOfSugarNeeded = 5;
let cupsAdded = 0;

do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);
console.log(cupsAdded);

// The break Keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  if (rapperArray[i] === 'Notorious B.I.G.') {
    console.log(rapperArray[i]);
    break;
  }
  console.log(rapperArray[i]);
};
console.log("And if you don't know, now you know.");
