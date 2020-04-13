// Creating Object Literals
let fasterShip = {
    'color': 'silver',
    'Fuel Type': 'Turbo Fuel'
};
console.log(fasterShip);


// Accessing Properties
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    'Active Mission': true,
    flightPath: ['Venus', 'Mars', 'Saturn'],
    'Secret Mission' : 'Discover life outside of Earth.'
};
  
let crewCount = spaceship.numCrew;
console.log(crewCount);
let planetArray = spaceship.flightPath;
console.log(planetArray);


// Bracket Notation
let propName =  'Active Mission';
let isActive = spaceship['Active Mission'];
console.log(isActive);
console.log(spaceship[propName]);


// Property Assignment
spaceship.color = 'glorious gold';
spaceship.numEngines = 7;
delete spaceship['Secret Mission'];
console.log(spaceship);


// Method
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};
alienShip.retreat();
alienShip.takeOff();


// Nested Objects
let spaceship2 = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  };
console.log(spaceship2)
let capFave = spaceship2.crew.captain['favorite foods'][0];
spaceship2.passengers = [{name: 'Space Dog'}];
let firstPassenger = spaceship2.passengers[0];
console.log(firstPassenger);


// Pass By Reference
const greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
};
  
const remotelyDisable = obj => {
    obj['disabled'] = true;
};
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
  

// Looping Through Objects
let spaceship3 = {
    crew: {
        captain: { 
            name: 'Lily', 
            degree: 'Computer Engineering', 
            cheerTeam() { console.log('You got  this!') } 
        },
        'chief officer': { 
            name: 'Dan', 
            degree: 'Aerospace Engineering', 
            agree() { console.log('I agree,     captain!') } 
        },
        medic: { 
            name: 'Clementine', 
            degree: 'Physics', 
            announce() { console.log(`Jets on!`) } }    ,
        translator: {
            name: 'Shauna', 
            degree: 'Conservation Science', 
            powerFuel() { console.log('The tank is  full!') } 
        }
    }
};
for (let crewMember in spaceship3.crew) {
    console.log(`${crewMember}: ${spaceship3.crew[crewMember].name}`)
};
  
for (let crewMember in spaceship3.crew) {
    console.log(`${spaceship3.crew[crewMember].name}: ${spaceship3.crew[crewMember].degree}`);
}