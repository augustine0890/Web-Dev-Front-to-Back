let input = 'a whale of a deal';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
      if (vowels[j] === 'e') {
        resultArray.push('e');
      } else if (vowels[j] === 'u') {
        resultArray.push('u');
      }
    }
  }
};
// input = 'urpentine and turtles'
console.log(resultArray.join('').toUpperCase());