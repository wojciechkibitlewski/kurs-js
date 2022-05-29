/*
OPERATORY
*/

// Operatory arytmetyczne

let x = 5;
const y = 8;

const add = x+y;
console.log(add);

const substract = x-y;
console.log(substract);

const multiply = x*y;
console.log(multiply);

const divide = x/y;
console.log(divide);

console.log('--------------------');

// ++ --

// inkrementacja
x++;
x++;
console.log(x); // 7

// dekrementacja
x--;
x--;
--x;
console.log(x); // 4

console.log('--------------------');
// modulo
// potrzebne np. przy sprawdzaniu, czy mamy liczbę pparzystą/nieparzystą


const modulo = 10%5; //reszta z dzielenia 10/5 ->0
const modulo2 = 10%7; //reszta z dzielenia 10/7 ->3
const modulo3 = 10%6; //reszta z dzielenia 10/6 ->4

console.log(modulo);
console.log(modulo2);
console.log(modulo3);

console.log('--------------------');
// operatory przypisania

// const name = "Lisa";
// to, co jest po prawej stronie przypisujemy do tego, co po lewej stronie (!)

let xx = 10;
let yy = 5;
console.log(xx); //10

xx = xx + yy;
console.log(xx); //15

xx += yy;
console.log(xx); // 15+5 = 20

xx = xx - yy; 
console.log(xx); // 20-5 = 15

xx -= yy; 
console.log(xx); // 15-5 = 10

xx = xx * yy; 
console.log(xx); // 10*5 = 50

xx *= yy; 
console.log(xx); // 50*5 = 250

xx = xx / yy; 
console.log(xx); // 250/5 = 50

xx /= yy; 
console.log(xx); // 50/5 = 10

xx = xx % yy; 
console.log(xx); // 10/5 = 0

xx %= yy; 
console.log(xx); // 0/5 = 0

console.log('--------------------');
// operatory porównania

// == porównuje zawartość
console.log(10 == '10'); // true
console.log('abc' == "abc"); // true

// === porównuje zawartość i typ danych
console.log(10 === '10'); // false
console.log("10" === '10'); // true

// != , !== negacja
console.log(10 != '10'); // false
console.log(10 !== '10'); // true

// > , < , >= , <=
console.log(10 > 10); // false

console.log('--------------------');
// operatory logiczne
// && - i <- zwróci TRUE tylko wtedy, kiedy wszystkie warunki logiczne są prawdziwe
// || - lub  <- zwróci FALSE tylko wtedy, kiedy wszystkie warunki logiczne są fałszywe
// ! - zaprzeczenie <-

if( true && true){
    console.log("true");
} else {
    console.log("false");
}
if( 10>4 && 12<13){
    console.log("true");
} else {
    console.log("false");
}
if( 10>1 || 12<10){
    console.log("true");
} else {
    console.log("false");
}
if( !(10==10)){
    console.log("true");
} else {
    console.log("false");
}

let b = '10'
const newNumber = b+=10;
console.log(newNumber)