// import { compile } from "handlebars";

const source = document.getElementById('ice-cream').innerHTML;

const template = compile(source);

const context = {
  flavor: 'chocolate'
};

const compiledHtml = template(context);

const iceCreamText = document.getElementById('scream');
iceCreamText.innerHTML = compiledHtml;
