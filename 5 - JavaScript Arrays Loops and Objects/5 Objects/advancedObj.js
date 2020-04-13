// The this keyword
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    _energyLevel: 100,
    _numOfSensors: 15,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
    },
    checkEnergy () {
        console.log(`Energy is currently at ${this.energyLevel}%`)
    },
    recharge () {
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%`);
    },
    get energyLevel () {
        if (typeof this._energyLevel === 'number') {
            return `My current energy level is ${this._energyLevel}`;
        } else {
            return 'System malfunction: cannot retrieve energy level';
        }
    },
    get numOfSensors(){
        if(typeof this._numOfSensors === 'number'){
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
    set numOfSensors (num) {
        if (typeof num === 'number' && num >= 0) {
            this._numOfSensors = num;
        } else {
            return 'Pass in a number that is greater than or equal to 0'
        }
    },
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};
console.log(robot.provideInfo());


// Arrow Functions and this
robot.checkEnergy();


// Privacy
robot._energyLevel = 'high';
robot._energyLevel = 100;
// Getters
console.log(robot.energyLevel);

// Setters
robot.numOfSensors = 100;
console.log('The numbers of sensor:', robot.numOfSensors);


// Factory Functions
/*
const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();
*/

//Property Value Shorthand
const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        }
    };
};
const newRobot = robotFactory('P-501', false);
console.log(newRobot.model);
console.log(newRobot.mobile);
newRobot.beep();


// Destructured Assignment
const {functionality} = robot;
console.log(functionality);
functionality.beep();

const robotKeys = Object.keys(robot);
console.log(robotKeys);


const robotEntries = Object.entries(robot);
console.log(robotEntries);

const newRobot2 = Object.assign(robot, {
  laserBlaster: true,
  voiceRecognition: true
});
console.log(newRobot2);