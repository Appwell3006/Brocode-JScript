
let name = window.prompt("Enter your name here:");

//eto ang tinatawag na method chaining hindi na keylangan gumawa ng mga bagong variable at hindi mahabang gamitin

name = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();

console.log(name);