
const text11 = 'powiększ mnie!'
const text22 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text33 = '$#%#^ wytnij te dziwne znaki na początku!'
const text44 = 'sprawdź, czy zawieram słowo "czy"'
const text55 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text66 = 'pies zamień każde słowo pies, na słowo kot pies'
const text77 = 'podziel, ten, string, od, przecinków'

console.log(text11.toUpperCase());
console.log(text22.toLowerCase());
console.log(text33.slice(6));
console.log(text44.includes("czy")); // !!!
console.log(text55.charAt(2));
console.log(text66.replaceAll('pies', 'kot'));
console.log(text77.split(','));

console.log("---------------------------------");


// TYPY DANYCH
// String

const text = "abcd";
const text2 = "abcd";
const text3 = `abcd`;
const text4 = `123`;

//console.log(typeof text4);

const msg ='Jegomość rzekł: "Kocham schabowe"';
console.log(msg);


// metody w js
// czyli wbudowane w js funkcje, z których możemy skorzystać

// właściwość lenght
console.log(msg.length); // 33 znaki
const msgNew = msg.toUpperCase();
console.log(msgNew); //
console.log(msg.toLowerCase()); 

const date = new Date();
console.log(date.toLocaleDateString('pl'));
console.log(date.toLocaleDateString('en'));

const userName = 'wojciech';
// wybieram pierwszy znak [charAt(0)] i zamieniam go na wielką literę [toUpperCase()]
//  następnie dodaję pozostałe znaki od drugiego do końca [slice(1)]
const newUsername = userName.charAt(0).toUpperCase()+userName.slice(1);
console.log (userName.slice(1));
console.log (newUsername);

// iterator

const iterator = msg[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
  // expected output: "T"
  //                  "h"
  //                  "e"
}

//charAt()
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

//concat()
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2));
// expected output: "Hello World"
console.log(str2.concat(', ', str1));
// expected output: "World, Hello"


//endsWith()
const str11 = 'Cats are the best!';
console.log(str11.endsWith('best!'));
// expected output: true
console.log(str11.endsWith('best', 17));
// expected output: true
const str22 = 'Is this a question?';
console.log(str22.endsWith('question'));
// expected output: false

//includes()
const sentence2 = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence2.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

// indexOf()
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"

//match()
const paragraph2 = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph2.match(regex);

console.log(found);
// expected output: Array ["T", "I"]

//matchAll()
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];

console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]

//padEnd()
const str1a = 'Breaded Mushrooms';

console.log(str1a.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"
const str2a = '200';
console.log(str2a.padEnd(5));
// expected output: "200  "

//padStart()
const str1b = '5';

console.log(str1b.padStart(2, '0'));
// expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// expected output: "**********

//raw()
// Create a variable that uses a Windows
// path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`The file was uploaded from: ${filePath}`);
// expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"

//repeat()
const chorus = 'Because I\'m happy. ';
console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);
// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "

// replace()
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
const regex2 = /Dog/i;
console.log(p.replace(regex2, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

//search()
const paragraph1c = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex1c = /[^\w\s]/g;

console.log(paragraph1c.search(regex1c));
// expected output: 43

console.log(paragraph1c[paragraph1c.search(regex1c)]);
// expected output: "."


//slice()
const str3a = 'The quick brown fox jumps over the lazy dog.';
console.log(str3a.slice(31));
// expected output: "the lazy dog."
console.log(str3a.slice(4, 19));
// expected output: "quick brown fox"
console.log(str3a.slice(-4));
// expected output: "dog."
console.log(str3a.slice(-9, -5));
// expected output: "lazy"

//split
const str4a = 'The quick brown fox jumps over the lazy dog.';

const words = str4a.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str4a.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str4a.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

//substring()
const str5a = 'Mozilla';

console.log(str5a.substring(1, 3));
// expected output: "oz"

console.log(str5a.substring(2));
// expected output: "zilla"


//trim()
const greeting = '   Hello world!   ';
console.log(greeting);
// expected output: "   Hello world!   ";
console.log(greeting.trim());
// expected output: "Hello world!";


//valueOf()
const stringObj = new String('foo');
console.log(stringObj);
// expected output: String { "foo" }
console.log(stringObj.valueOf());
// expected output: "foo"

