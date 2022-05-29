/*
INSTRUKCJE WARUNKOWE

if, else if & else

*/

const pass = "bgrt6537&^h!s";

if (pass.length > 10 && pass.includes("!")) {
  console.log("rewelacyjnie długie  hasło");
} else if (pass.length > 10) {
  console.log("dobre hasło");
} else {
  console.log("zbyt krótkie hasło");
}

console.log("--------------");
const color = "red";

if (color == "red") {
  if (10 > 20) {
    console.log("true true");
  } else {
    console.log("true false");
  }
} else {
  console.log("false");
}
console.log("--------------");
/*
Switch
*/

const day = "sobota";

if (day === "poniedziałek") {
  console.log("Dziś jest poniedziałek");
} else if (day === "wtorek") {
  console.log("Dziś jest wtorek");
} else if (day === "środa") {
  console.log("Dziś jest środa");
} else if (day === "czwartek") {
  console.log("Dziś jest czwartek");
} else if (day === "piątek") {
  console.log("Dziś jest piątek");
} else if (day === "sobota") {
  console.log("Dziś jest sobota");
} else if (day === "niedziela") {
  console.log("Dziś jest niedziela");
}

switch (day) {
  case "poniedziałek":
    console.log("Dziś jest poniedziałek");
    break;
  case "wtorek":
    console.log("Dziś jest wtorek");
    break;
  case "środa":
    console.log("Dziś jest środa");
    break;
  case "czwartek":
    console.log("Dziś jest czwartek");
    break;
  case "piątek":
    console.log("Dziś jest piątek");
    break;

  default:
    console.log(`Mamy weekend`);
}

console.log("--------------");
/*
Operator warunkowy

*/

const x = 140;
// można zapisać tak...
if (x > 20) {
  console.log(`${x} > 20`);
} else {
  console.log(`${x} < 20`);
}
// ale lepiej pewnie tak:
const newX = x > 20 ? `${x} > 20` : `${x} < 20`;
console.log(newX);

// używamy go tylko do takiego prostego kodu
// przy większej ilości rzeczy do wykonania: zawsze if

const isloggedIn = false;

function loggedIn(){
    console.log("Uzytkownik zalogowany");
}
function loggedOut(){
    console.log("Uzytkownik wylogowany");
}

isloggedIn ? loggedIn() : loggedOut();

console.log("--------------");
/*
Zadania
*/

/*
1. Stwórz zmienną x = 50 oraz y = 30
2. Stwórz IF'a, który sprawdzi, czy X jest większe od Y
3. Wynik wypisz w konsoli za pomocą template string, np.
"50 jest większe niż 30"
(wartość 50 oraz 30 umięść za pomocą zmiennych)
W zadaniu nie potrzebujemy ELSE
*/

const xx = 50;
const yy = 30;

if(xx > yy) {
    console.log(`${xx} jest większe niż ${yy}`);
}

/*
1. Stwórz zmienną color i przypisz do niej wartość BLUE
2. Stwóz zmienną newColor i przypisz do niej wartość green
3. za pomocą if'a sprawdź, czy zmienna color przechowuje tą samą wartość co zmienna newColor

jeśli tak: kolory zgadzają się
jeśli nie: kolory się nie zgadzają

*/
const color2 = "blue";
const newColor = "green";

if(color2 === newColor) {
    console.log("kolory zgadzają się");
} else {
    console.log("kolory nie zgadzają się");

}

/*
1. stwórz zmienną x i przypisz do niej wartość 100
2. stwórz zmienną y i przypisz do niej wartość 50
3. za pomocą instrukcji warunkowej sprawdź:
- czy x jest większy niż y
- czy x jest równy y
- czy x jest mniejszy od y 
*/

const x2 = 100;
const y2 = 50;

if(x2 > y2) {
    console.log("x>y");
} else if(x2 === y2) {
    console.log("x=y");
} else {
    console.log("x<y");
}

/*
zadanie ze switchem
*/
const promo = "40%";

switch (promo) {
    case "10%":
        console.log("Dziś mamy 10% promocji");
        break;
    case "20%":
        console.log("Dziś mamy 20% promocji");
        break;
    case "30%":
        console.log("Dziś mamy 30% promocji");
        break;
    default:
        console.log (`Dziś mamy ${promo} promocji`);            
}


/*
zadanie z operatorem warunkowym
*/

const x3 = 11;

const wynik = (x3 % 2 === 0) ? 'wartosć parzysta' : 'wartość nieparzysta';
console.log(wynik);

/*
zadanie kolejne 

*/

const x4 = 10;

if (x4 >= 100){
    let r = ("x>100").toLocaleUpperCase(); 
    console.log(r);
} else if ( x4> 30 && x4 < 100) {
    let r = ("X jest średniakiem").toLocaleUpperCase(); 
    console.log(r); 
} else if ( x4 <= 30) {
    let r = ("x jest mały").toLocaleUpperCase(); 
    console.log(r); 
} else {
    console.log("error");
}


// lub
const x5 = 10;
let text;

if (x5 >= 100){
    text = "x>100"; 
} else if ( x5> 30 && x4 < 100) {
    text = "X jest średniakiem"; 
} else if ( x5 <= 30) {
    text = "x jest mały"; 
} else {
    console.log("error");
}
console.log(text.toUpperCase());