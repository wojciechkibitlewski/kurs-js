// zmienne stałe
const userName = "Lisa"; //typ String
console.log (userName);

// jeżeli wiemy, że wartość tej zmiennej może się zmienić
// używamy let 
let userAge = 23; // typ Number
// let userAge = "23"; // typ String (tekst)
console.log(userAge);

userAge = 45; // zmieniając wartość zmiennej let nie deklarujemy już "let"
console.log(userAge);

let color;
color = "red;"
console.log(color);

/*
Utworzyć trzy zmienne
imię
wiek
ulubiona potrawa

i wypisać je w konsoli

*/
const myName = "Wojtek";
let myAge = 47;
const favFood = "czekolada";

console.log("Mam na imię ", myName);
console.log("W tym roku skończę ", myAge);
console.log("czyli za trzy lata będę miał ", myAge+3);
console.log("Najbardziej lubię jeść ", favFood);


// niestosujemy zmiennej var, NIGDY 

/*
Jak poprawnie nazywać zmienne w js?

- nie mieszamy języków angielskiego z polskim
- nie nazywamy zmiennych po polsku
- js jest językiem case-sensitive, rozróżnia wielkość znaków
- zmiennych nie zaczynamy od Wielkiej litery 
taki zapis zarezerwowany dla klas
- nazwy zmiennych nie zaczynamy od liczby
- w nazwie zmiennej nie stosujemy kropek, minusów itp
- zmienne z dwóch wyrazów możemy połączyć "podłogą" _
jednak najlepszą metodą jest korzystanie z camelCase (notacji wielbłądziej),
czyli "myName"
- mamy w js słowa zarezerwowane

/*


/*
template string
budowanie zdań za pomocą zmiennych
*/
const mySecondName = "Wojtek";
const favMeal = "schabowy";

// można tak
console.log("Cześć, jestem " +mySecondName+ " a moim ulubionym daniem jest " +favMeal);
// lepiej tak
// ` <- gravic, czyli ciapek
console.log(`Cześć, jestem ${mySecondName} i moim ulubionym daniem jest ${favMeal}!`);

/*
Zadanie:
1) stwórz zmienne, do których przypiszesz:
- Twoje imię
- imię zwierzaka
2) za pomocą template string wypisz w koncoli zdanie:
"Cześć, jestem {twoje imię}, a to jest {imię zwierzaka} - mój pies"
3) Stwórz kolejną zmienną, do której przypiszesz wiek zwierzaka
(typ Number), a następnie w osobnym console.log wypisz:
"{imię zwierzaka} ma już {wiek zwierzka} lat!"

Drugie zdanie wypisz za pomocą standardowej metody z plusami.

*/

const firstName = "Wojtek";
const petName = "Luna";
console.log(`Cześć, jestem ${firstName}, a to jest ${petName} - mój pies.`);

let petAge = 10;
console.log(petName +" ma już " +petAge+ " miesięcy!");

/*
Zadanie - poprawić poniższy kod (6 błędów)

const firstName = 'Tomek'
let age = 12
age = 18
 
var favColor = 'niebieski' <- (1) nie stosujemy var
const fav-meal = 'schabowy' <- (2) nie stosujemy minusa, powinno być favMeal
 
let current.Car <- (3) nie stosujemy kropek
current.Car = 'Audi' <- (4) nie stosujemy kropek
 
let firstName = 'Ania' <- (5) już mamy deklerację firstName
let age2 = 24
let ulubionyKolor = 'czerwony' <- (6) powinien być język angielski

prawidłowy kod
*/
const firstName2 = 'Tomek'
let age = 12
age = 18
 
const favColor = 'niebieski'
const favMeal2 = 'schabowy' 
 
let currentCar
currentCar = 'Audi'
 
let firstName3 = 'Ania'
let age2 = 24
let favColor2 = 'czerwony'
