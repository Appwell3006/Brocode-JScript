// ... allows an iterable such as an array or string to be expanded into separate elements (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum); // 5
console.log(minimum); // 1


let name = "Jimwell";
let letters = [...name];

console.log(letters); // {'J', 'i', 'm', 'w', 'e', 'l', 'l'}



let fruits = ["banana","orange","strawberry"];
let vegeis = ["carrots","tomatoe","onion"];

let food = [...fruits, ...vegeis, "egg", "pipino"];

console.log(food);


