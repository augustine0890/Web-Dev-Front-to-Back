// The forecast today is 293 Kelvin
const kelvin = 0;
// Convert Kelvin to Celsius
let celsius = kelvin - 273;
// Calculate Fahrenheit
let fahrenheit = celsius*(9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Newton scale
let newton = celsius*(33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);