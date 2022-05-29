const btn1 = document.querySelector("button:nth-of-type(1");
//console.log(btn1.outerText);

////

function btnMsg(e) {
  console.log(`kliknięto ${e.target.textContent}`);
}
btn1.addEventListener("click", btnMsg);
// robienie tego dla np. 100 prycisków jest bez sensu

const btns = document.querySelectorAll("button");
// powstała tablica (obiekt tablicopodobny) przycisków

btns.forEach((btn) => {
  btn.addEventListener("click", btnMsg);
});

/*
Metody na tablicach


*/
const numbers = [1, 2, 3, 4, 5, 6];
const fruits = ["jabłko", "gruszka"];

numbers.unshift(-1, 0);
fruits.unshift("pomarańcza");
console.log(numbers);
console.log(fruits);
// dodanie dwóch cyfr (-1, 0) na początku tablicy
// metoda nie najlepsza, ponieważ zmieniają się indexy (teraz 1 nie ma indexu 0 tylko 2)

numbers.shift(); //
fruits.shift();
console.log(numbers);
console.log(fruits);
// wycina pierwszy element (z indexem 0) z tablicy

numbers.push(-1, 0);
fruits.push("pomarańcza", "wiśnia");
console.log(numbers);
console.log(fruits);
// dodanie dwóch cyfr (-1, 0) na końcu tablicy

numbers.pop(); //
fruits.pop();
console.log(numbers);
console.log(fruits);
// wycina ostatni element (z indexem 0) z tablicy

function multiply(x) {
  return x * 2;
}
const newNumbers = numbers.map(multiply);
console.log(numbers);
console.log(newNumbers);
// Metoda map() tworzy NOWĄ TABLICĘ wypełnioną
// wynikami wywołania podanej funkcji (multiply)
// na każdym elemencie
// w wywołującej (numbers) tablicy.

const newAbc = numbers.concat(fruits);
console.log(newAbc);
// łączenie tablic

// ... <- spread (używany na tablicach) / rest (używany przy funkcjach) operator
console.log(...fruits);
// zwrócono osobne stringi (nie tablicę)
//

const drinks = ["cola", "sprite", "coffe", "wine"];
const meals = ["schabowy", "spagetti", "zupa"];

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
const colors = ["red", "green", "blue", true, 123];
const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"];

const numbers2 = numberss.slice(0, 2);
console.log(numbers2);

// dwa sposoby
const numbers3 = numberss.slice(4, 7);
console.log(numbers3);
const numbers33 = numberss.slice(-3);
console.log(numbers33);

// dwa sposoby
////const randomStuff = colors.splice(3,2);
//console.log(randomStuff);
const randomStuff2 = colors.splice(-2);
console.log(randomStuff2);

const newCars = cars.splice(2, 4, "test");
console.log(newCars);
console.log(cars);

/*
metoda filter();
*/
const numbers4 = [0, 23, 48, 175, 2, 34, 11];

function number(x) {
  return x % 2 === 0;
  // czy x jest liczbą parzystą, czy nie
}
// filter - metoda, które filtruje tablicę i wypisuje tylko te elelemnty, które spełniają nasze warunki
// filter(callback);
// callback - funkcja, którą przekazujemy jako warunek do innej funkcji

console.log(numbers4.filter(number));
// tablica.forEach(callback);
numbers4.forEach((num) => console.log(num * 5));

/* metoda include() */

console.log(numbers4.includes(0)); // true
console.log(numbers4.includes(10)); // false

/* metoda indexOf() */
// sprawdza, jaki index ma dany element tablicy

console.log(numbers4.indexOf(0)); // 0
console.log(numbers4.indexOf(175)); // 3
console.log(numbers4.indexOf(10)); // -1 <- w ten sposób sprawdza się, czy nasza tablica zawiera/nie zawiera dany element
// jeśli nie zawiera, zawsze będzie -1

console.log("------------------");
/* map vs forEach */
//

const numbers5 = [0, 1, 2, 3];
const newNumbers5 = numbers5.forEach((number) => console.log(number * 2));
// metoda forEach() niczego nie zwraca; wykonuje tylko pętle na danej tablicy
// tak więc do zmiennej newNumbers5 nie przypisaliśmy żadnej wartości
console.log(newNumbers5); // undefined

const newNumbers6 = numbers5.map((n) => n * 2);
// metoda map() działa tak samo jak forEach, jednak zwraca nam nową tablicę z wyniku wykonania pętli
console.log(newNumbers6); // array[0,2,4,6]

/*
pętla forEach() świetnia nadaje się do stworzenia menu
no to spróbujmy

*/

const menuSite = [
  ["Strona główna", "/"],
  ["O mnie", "o-mnie.html"],
  ["Projekty", "projekty.html"],
  ["Kursy", "kursy.html"],
  ["Kontakt", "kontakt.html"],
];

const menuComponent = menuSite.forEach((menu) => {
  console.log(
    `<li><a href="${menu[1]}" title="${menu[0]}">${menu[0]}</a></li>`
  );
  //return `<li><a href="${menu[0]}" title="${menu[1]}">${menu[1]}</a></li>`;
});

console.log("------------------");

/*
ZADANIA

1) Stwóz tablicę const letters = ['c','d']
2) za pomocą odpowiednich metod dodaj na początku litery a i b a na końcu e i f. Wyloguj teblicę w konsoli
3) za pomocą metod sprawdź, czy tablica zawira literę c i wynik wyloguj w konsoli
*/

const letters = ["c", "d"];
letters.unshift("a", "b");
letters.push("e", "f");
console.log(letters);

console.log(letters.includes("c"));

/*
1) stwórz tablicę z cyframi
2) stwóz drugą tablicę z jedzeniem
3) stwóz nową zmienną i za pomocą metody przypisz do niej połączone tablice
nową tablice wyloguj
wykonaj to zadanie z operatorem spread
*/
const numbers6 = [1, 3, 5, 7, 9];
const meals2 = ["jajko", "jabłko", "łosoś"];
const newArray = numbers6.concat(meals2);
console.log(newArray);

const newArray2 = [...numbers6, ...meals2];
console.log(newArray2);

/*
1) stwórz tablicę z cyframi const numbers7 = [1,5,13,26,48]
2) za pomocą forEach lub map  (wybierz najlepszą metodę) wydrukuj w konsoli wszystkie liczby pomnożone przez 5
nową tablicę przypisz do zmiennej
3) za pomocą instrukcji warunkowej if oraz pętli przejdź po nowo utworzonej tablicy i sprawdź, które liczby są parzyste.
wyniki wyloguj w koncoli wg wzoru 'Liczba parzysta: xx / Liczba nieparzysta: xx'

*/
console.log("------------------");

const numbers7 = [1, 5, 13, 26, 48];
//numbers7.forEach((n) => console.log(n * 5));
const numbers8 = numbers7.map((n) => n * 5);
console.log(numbers8);

numbers8.forEach((m) => {
  if (m % 2 === 0) {
    console.log(`Liczba parzysta: ${m}`);
  } else {
    console.log(`Liczba nieparzysta: ${m}`);
  }
});
// lub tak
for (const m of numbers8) {
  if (m % 2 === 0) {
    console.log(`Liczba parzysta: ${m}`);
  } else {
    console.log(`Liczba nieparzysta: ${m}`);
  }
}
/*
1) stwórz tablicę z jednym kolorem (zapisz go małymi kolorami) 
2) za pomocą odpowiednich metod dodaj nowy kolor na początku i na końcu tablicy
3) przeiteruj po tablicy za pomocą pętli for. W konsoli wypisz zdanie:
Mój ulubiony kolor to: [nazwa_koloru]
Nazwa koloru powinna być zapisana wielkimi literami

za pomocą odpowiednich metod na stringu wypisz w konsoli kolory tak, aby zaczynały się od wielkiej litery (zamiast całego wrazu wypisanego wielkimi literami)

np. Niebieski, Czerwony itd
*/
console.log("------------------");
const colours = ["czarny"];
colours.unshift("biały");
colours.push("czerwony");
console.log(colours);

for (let i = 0; i < colours.length; i++) {
  console.log(`Mój ulubiony kolor to: ${colours[i].toUpperCase()}`);
}

for (let i = 0; i < colours.length; i++) {
  console.log(colours[i].charAt(0).toUpperCase() + colours[i].slice(1));
}

for (const c of colours) {
  console.log("Mój ulubiony kolor to", c.charAt(0).toUpperCase() + c.slice(1));
}

/*

*/
console.log("------------------");
const carsString = "Audi, Mercedes, BMW, Nissan, Dodge";
const carsArray = carsString.split(", "); // !! ',spacja '
console.log(carsArray);

/* if (carsArray.length > 3) {
  console.log("Jest OK");
} else {
  console.log("Nie jest OK");
} */
// operatorem warunkowym
carsArray.length > 3 ? console.log("Jest OK") : console.log("Nie jest OK");

if (carsArray.includes("Audi")) {
  carsArray.push("Toyota");
} else {
  carsArray.pop();
}
// lub tak
carsArray.includes("Audi") == 1 ? carsArray.push("Fiat") : carsArray.pop();

console.log(carsArray);
