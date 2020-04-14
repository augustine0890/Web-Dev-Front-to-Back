// Create and Insert Elements
let newDestination = document.createElement('li');

newDestination.id = 'oaxaca';
newDestination.innerHTML = 'Oaxaca, Mexico';

document.getElementById('more-destinations').appendChild(newDestination);

// Remove an Element
let oaxaca = document.getElementById('oaxaca');

document.getElementById('more-destinations').removeChild(oaxaca);