let userName = 'Augustine';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'What\'s the Magic Eight Ball?';
console.log(`The user asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
// console.log(randomNumber);

let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'Do not count on it.';
    break;
  case 7:
    eightBall = 'Signs point to yes.';
    break;
  case 4:
    eightBall = 'It is certain.';
    break;
  default:
    eightBall = 'Cannot predict now.';
    break;
}
console.log(eightBall)