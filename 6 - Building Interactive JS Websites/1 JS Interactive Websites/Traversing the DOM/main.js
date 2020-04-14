let first = document.body.firstChild;
first.innerHTML = 'I am the child!';

console.log(first.innerHTML);

first.parentNode.innerHTML = 'I am the parent and my inner HTML has been replaced!';
