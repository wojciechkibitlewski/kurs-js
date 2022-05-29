/*
Boolean - zwraca wartosć True albo False

te wartości zawsze zwrócą nam False:
- false
- undefined
- null
- 0
- NaN
- '' (pusty string)
*/

if (2-2) {
    console.log ("true");
} else {
    console.log ("false");
}

/*
Null & undefined

undefined - to js informuje nas, że jakaś zmienne nie  ma żadnej wartości
null - to my przypisujemy pustą wartość

*/
let a;
console.log(a); //undefined

let b=null;
console.log(b); //null
