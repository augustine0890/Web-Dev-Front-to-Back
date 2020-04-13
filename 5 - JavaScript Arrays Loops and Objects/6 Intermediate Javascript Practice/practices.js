// reverseArray()
const reverseArray = (Array) => {
    let reversed = [];
    for (i = 0; i < Array.length; i++) {
        reversed.unshift(Array[i]);
    };
    return reversed;
};
const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];


// greetAliens()
const greetAliens = (Array) => {
    for (let name of Array) {
      console.log(`Oh powerful ${name}, we humans offer our unconditional surrender!`)
    };
};
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens);


// convertToBaby()
const convertToBaby = Array => {
    let newAnimals = [];
    for (let animal of Array) {
        newAnimals.push('baby ' + animal);
    };
    return newAnimals;
}
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals)) 
  

// Fix The Broken Code!
// const numbers = [5, 3, 9, 30];
const numbers = [5, 3, 9, 30];
const smallestPowerOfTwo = arr => {
    return arr.map(x => 2 ** Math.ceil(Math.log2(x)));
}
console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]


// declineEverything() and acceptEverything()
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];
const politelyDecline = veg => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}
const declineEverything = arr => {
    arr.forEach(politelyDecline);
}
declineEverything(veggies);

const acceptEverything = arr => {
    arr.forEach(e => {
      console.log(`Ok, I guess I will eat some ${e}.`)
    })
}
acceptEverything(veggies);


// squareNums()
// const numbers = [2, 7, 9, 171, 52, 33, 14];
const numbers2 = [2, 7, 9, 171, 52, 33, 14];
const toSquare = num => num * num

const squareNums = arr => {
  return arr.map(x => x ** 2);
}
console.log(squareNums(numbers2));


// shoutGreetings()
const shoutGreetings = arr => {
    return arr.map(x => x.toUpperCase() + '!');
}
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]


// sortYears()
const sortYears = arr => {
    return arr.sort(function(a, b) {return b - a});
}
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]


// justCoolStuff()
const justCoolStuff = (arr1, arr2) => {
    return arr1.filter(a1 => arr2.includes(a1));
}
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]


// isTheDinnerVegan()
const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
console.log(isTheDinnerVegan(dinner));


// sortSpeciesByTeeth()
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => {
  return arr.sort(function(a, b) {return a.numTeeth - b.numTeeth});
}
console.log(sortSpeciesByTeeth(speciesArray))


// findMyKeys()
const findMyKeys = arr => {
    return arr.findIndex(x => x === 'keys');
}
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
console.log(findMyKeys(randomStuff))
// Should print 4


// dogFactory()
const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name () {
            return this._name;
        },
        set name (nameIn) {
            return this._name = nameIn;
        },

        get breed () {
            return this._breed;
        },
        set breed (breedIn) {
            return this._breed = breedIn;
        },

        get weight () {
            return this._weight;
        },
        set weight (weightIn) {
            return this._weight = weightIn;
        },

        bark () {
            return 'ruff! ruff!';
        },

        eatTooManyTreats () {
            this.weight++;
        }
    };
}

dog = dogFactory('Joe', 'Pug', 27);
console.log(dog.name); 
console.log(dog.bark());
console.log(dog.weight);
console.log(dog.eatTooManyTreats());
console.log(dog.weight);





