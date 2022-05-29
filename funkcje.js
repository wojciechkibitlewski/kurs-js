/*
FUNKCJE
funkcje podlegają hoistingowi

hoisting - w js oznacza, że wszystkie dekleracje funkcji wynoszone sa na samą górę (do zasięgu globalnego)
Oznacza to, że możesz użyć funkcji lub zmiennej przed jej zadeklarowaniem lub innymi słowy: funkcje lub zmienne mogę być deklarowane po ich użyciu.
W js tylko deklaracje są windowane, nie inicjalizacje. Jeśli zmienna zostanie zadeklarowana i zainicjalizowana po jej użyciu, 
wartość zmiennej będzię niezdefiniowana (undefined).

console.log(num); // zwróci undefined
let num;
num = 6;

*/

// hoisting powoduje ża zadziała zarówno to:
function test() {
  console.log("Cześć");
}
test();

// jak i to:
test();

function test() {
  console.log("Cześć!!");
}
// dodatkowo js pozwolił nam stworzyć dwie funkcje o tej samej nazwie ( ta druga dekleracja nadpise pierwszą)
// można tak zapisywać, ale trzeba trzymać strukturę kodu

// innym rozwiązaniem jest taki zapis

const helloWorld = function () {
  console.log("Cześć świecie");
};
helloWorld();

const hiWorld = (e) => {
  console.log(`Hello ${e}!`);
};
hiWorld("Wojtek");

/*
funkcja z parametrami
*/
function add(parametr) {
  console.log(`Podany argument to ` + parametr);
}
add("test");
const hiWorld2 = (e) => {
  console.log(`Hello ${e}!`);
};
hiWorld2("Wojtek");

// argument - podajemy podczas wywołania funkcji
// parametr - podajemy w dekleracji funkcji

const add2 = (e, f) => {
  //console.log(e, f);
  //console.log(e + f);
  return e + f;
  // return kończy nam działanie funkci
};
/* 
add2(5, 4); // 9
add2(); // Nan <- ponieważ nie podaliśmy argumentów
add2(5); // Nan <- ponieważ jeden argument jest, ale drugi to undefined
 */
console.log(add2(5, 6));

/* zadanie */

const nameAge = (name, age) => {
  console.log(`Cześć, mam na imię ${name} i mam ${age} lat.`);
};
nameAge("Wojtek", 47);

/* Funkcja anonimowa */

const heading = document.querySelector("h1");
heading.addEventListener("click", function () {
  console.log("Kliknięto mnie");
});
// taki zapis funkcji jest dobry przy bardzo krótkich zadaniach (np. wydrukuj coś)
// ale w przypadku dłuższej funkcji nie wiemy, co ona robi, jest nienazwana
// drugi minus - jeśli chcielibyśmy z niej skorzytsać w innym miejscu - musimy napisać ją na nowo
// tak więc funkcje anonimowe istnieją i można ich uzywać, ale
// powinno to wyglądać tak (czyli nie anonimowo)
function clickMe() {
  console.log("Kliknięto mnie");
}
heading.addEventListener("click", clickMe);

/* Funkcja strzałkowa */

const arrowFunction = () => {
  // szkielet funkcji strzałkowej od nowego ES6 (2015 roku)
};

function test(name) {
  console.log(`Mam na imię ${name}!`);
}
const test2 = (name) => {
  console.log(`Mam na imię ${name}!`);
};
const test3 = (name) => console.log(`Mam na imię ${name}!`);

test("Wojtek");
test2("Adaś");
test3("Misiek");
// wszystkie trzy zapisy są prawidłowe, najlepszy jest trzeci lub drugi

const test4 = (name, age) => {
  console.log(`Mam na imię ${name} i mam ${age} lat!`);
};
test4("Róża", 7);

function add3(num1, num2) {
  return num1 + num2;
}
// lub tak
const add4 = (num1, num2) => num1 + num2;
const add5 = (num1, num2) => {
  return num1 + num2;
};

console.log("-----------------------");
///
const days = ["poniedziałek", "wtorek", "środa", "czwartek"];
// można tak
const days1 = days.forEach(function (day) {
  console.log(day);
});
// lepiej tak przy jednej linijce
const days2 = days.forEach((day) => console.log(day));

tabs = ["aa", "bb", "cc"];
const tabs2 = tabs.forEach((tab) => console.log(tab));

const printValue = (e) => console.log(e);
printValue("mumu");
