const source = document.getElementById('eachHelper').innerHTML;

const template = Handlebars.compile(source);
const context = {
    newArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // newArray: ['a', 'b', 'c']
    // newArray: Array.from(Array(10).keys())
};

const compiledHtml = template(context);
const displayElements = document.getElementById('display');
displayElements.innerHTML = compiledHtml;