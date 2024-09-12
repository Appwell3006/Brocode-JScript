let age = window.prompt("How old are you?");


//ito ang convertion
age = Number(age); //kapg d ginawa ito magiging string ang matytype kahit number/ pero kapag meron nito magiging integer ang output ng prompt

age+=1;

console.log(age);

/*

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = number(x);
y = String(y);
z = boolean(z);

console.log(x, type of x); === NaN 
console.log(y, type of y); === pizza
console.log(z, type of z); === true

*/
