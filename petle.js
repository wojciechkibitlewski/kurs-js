/*
PĘTLE
pętle są po to, by nie powtrzć tego samego kodu

for

*/

/* for( let i = 0; i < 6; i++){
    console.log(i);
}; */

const letters = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h'];
//console.log(letters[2]);

for ( let i = 0; i < letters.length; i++) {
    //console.log(letters[i]);
}

/*
Zadanie
1) stwórz tablicę i umieść w niej kolory
2) za pomocą pętli wypisz wszystkie kolory
*/

const colors = ['white', 'black', 'red', 'yellow', 'grey', 'green', 'blue', 'pink'];

for( let i = 0; i< colors.length; i++){
    //console.log(colors[i]);
}


/*
while
for i while to pętle zamienne, jednak w większości przypadków korzystamy z for

*/

let i = 0;
while (i < 5){
    //console.log(i);
    i++;
}


/*

do ... while
*/
let a = 0;
do {
    a++;
    //console.log(a);
} while (a < 8);

/*
pętla 
FOR OF

*/
const numbers = [1,2,3,4,5,6,7,8]


// kiedy musimy pracować z indeksami użyjemy pętli for
// w pozostałych przypadkach lepiej użyć "for of"

/* for( let b= 0; b < numbers.length; b++ ) {
    console.log(numbers[b] * 2);
} */

for ( const number of numbers) {
    console.log(number * 2);
} 

/*
ZADANIA

1. Stwórz tablicę z nazwami miast
2. wypisz w konsoli "To miasto nazywa się [nazwa_miasta]"
*/
const cities = ['Katowice', 'Tychy', 'Mysłowice', 'Bytom', 'Chorzów'];
for (let i = 0; i < cities.length; i++){
    console.log(`To miasto nazywa się ${cities[i].toUpperCase()}`);
}

/*
1) stwórz zmienną x i przypisz do niej wartość 0
2) stwórz pętle while która będzie powiększała x o 2
3) pętle ma się wykonywać do momentu, kiedy x >=10

*/

let x = 0;
while (x <= 10){
    //console.log(x);
    //x = x+2;
    x += 2;
};

/*

1) stwórz zmienną x i przypisz do niej wartość 20
2) stwórz pętle do.. while, która będzie zmniejszała x o 3
3) pętla ma się wykonywać do momentu, kiedy x > 0

w konsoli wypisz tylko ostatnią ct=yfrę, którą zwróci pętla
*/

let xx = 20;
do {
    xx -= 3
    //xx = xx - 3;
    
} while (xx > 0);
console.log(xx);

/*
1) stwó tablicę z liczbami 5,8,10,23,48,60
2) stwórz pętlę for of, która podzieli liczby przez 5 i wypisze je w konsoli

dla ambitnych:
za pomocą for of oraz instrukcji warunkowej if sprawdź, 
które cyfry i liczby w oryginalnej tablicy są parzyste a które nie
w konsoli wypisz:
liczba [liczba] jest parzysta
liczba [liczba] nie jest parzysta
*/


const numbers2 = [5,8,10,23,48,60];
for ( const number of numbers2) {
    console.log(number / 5);
} 

for (let i = 0; i < numbers2.length; i++) {
    if(numbers2[i] % 2 === 0) {
        console.log(`%cLiczba ${numbers2[i]} jest parzysta`, 'background-color:gold; color:black');
    } else {
        console.log(`Liczba ${numbers2[i]} jest nieparzysta`);
    }
};
console.log("----------------- lub tak -----------")
for ( const number of numbers2) {
    if(number % 2 === 0) {
        console.log(`%cLiczba ${number} jest parzysta`, 'background-color:gold; color:black');
    } else {
        console.log(`%cLiczba ${number} jest nieparzysta`, 'background-color:tomato; color:black');
    }
}
