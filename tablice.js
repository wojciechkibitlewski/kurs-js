const btn1 = document.querySelector("button:nth-of-type(1");
//console.log(btn1.outerText);

////

function btnMsg(e) {
    console.log(`kliknięto ${e.target.textContent}`);
}
btn1.addEventListener('click', btnMsg );
// robienie tego dla np. 100 prycisków jest bez sensu


const btns = document.querySelectorAll("button");
// powstała tablica (obiekt tablicopodobny) przycisków

btns.forEach(btn => {
    btn.addEventListener('click', btnMsg );
})


/*
Metody na tablicach


*/
const numbers = [1,2,3,4,5,6];
const fruits = ['jabłko', 'gruszka'];

numbers.unshift (-1,0); 
fruits.unshift ('pomarańcza'); 
console.log (numbers);
console.log (fruits);
// dodanie dwóch cyfr (-1, 0) na początku tablicy
// metoda nie najlepsza, ponieważ zmieniają się indexy (teraz 1 nie ma indexu 0 tylko 2)

numbers.shift(); // 
fruits.shift(); 
console.log (numbers);
console.log (fruits);
// wycina pierwszy element (z indexem 0) z tablicy

numbers.push (-1,0); 
fruits.push ('pomarańcza', 'wiśnia'); 
console.log (numbers);
console.log (fruits);
// dodanie dwóch cyfr (-1, 0) na końcu tablicy

numbers.pop(); // 
fruits.pop(); 
console.log (numbers);
console.log (fruits);
// wycina ostatni element (z indexem 0) z tablicy


function multiply (x) {
    return x*2;
};
const newNumbers = numbers.map(multiply);
console.log (numbers);
console.log (newNumbers);
// Metoda map() tworzy NOWĄ TABLICĘ wypełnioną 
// wynikami wywołania podanej funkcji (multiply) 
// na każdym elemencie 
// w wywołującej (numbers) tablicy.

const newAbc = numbers.concat(fruits);
console.log (newAbc);
// łączenie tablic


// ... <- spread (używany na tablicach) / rest (używany przy funkcjach) operator
console.log (...fruits); 
// zwrócono osobne stringi (nie tablicę)
// 

const drinks = ['cola', 'sprite', 'coffe', 'wine'];
const meals = ['schabowy', 'spagetti', 'zupa'];

const menu = [...drinks, ...meals]; // częściej stosowane niż concat
const menu3 = drinks.concat(meals);
const menu2 = [drinks, meals];

console.log(menu);
console.log(menu3);
console.log(menu2);
console.log("--------------------");
// rozsmarowanie tablicy (...) działa tak samo jak concat

/*
slice() i splice()
*/
const numberss = [0, 0, 1, 1, 2, 2, 2];
const colors = ['red', 'green', 'blue', true, 123];
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀'];

const numbers2 = numberss.slice(0,2);
console.log(numbers2);

// dwa sposoby
const numbers3 = numberss.slice(4,7);
console.log(numbers3);
const numbers33 = numberss.slice(-3);
console.log(numbers33);


// dwa sposoby
////const randomStuff = colors.splice(3,2); 
//console.log(randomStuff);
const randomStuff2 = colors.splice(-2); 
console.log(randomStuff2);


const newCars = cars.splice(2,4,'test');
console.log(newCars);
console.log(cars);


