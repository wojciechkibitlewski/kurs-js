/*
DOM
window <- obiekt globalny
document

document.getElementById
document.getElementsByTagName
document.getElementsByClassName

*/

const test = document.getElementById('item');
const test2 = document.getElementsByTagName('li');
const test3 = document.getElementsByClassName('test');


console.log(test);
console.log(test2);// html collection
console.log(test3);// html collection


// nowsze metody na pobieranie elementow, ES6
// document.querySelector();
// document.querySelectorAll();

const test4 = document.querySelector('li'); // wyszukuje pierwszy element, kończy działanie
const test41 = document.querySelector('#item'); // wyszukuje element o id #item
const test42 = document.querySelector('.test'); // wyszukuje element o id #item
console.log (test4);
console.log (test41);
console.log (test42);

const ulList = document.querySelector('ul'); // 
console.log (ulList);

const liItem = ulList.querySelector('li'); // 
console.log (liItem);


const test5 = document.querySelectorAll('li'); // wyszukuje wszystkie elementy
console.log (test5); // nodeList
