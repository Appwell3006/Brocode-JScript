const pi = 3.14159;
let radius;
let circumference;

//pi = 420.232 === hindi ito pwede baguhin dahil naka const ito na variable

/* radius = window.prompt("Enter the raduis of a circle");

radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference); */



document.getElementById("submit").onclick = function (){

    radius = document.getElementById("radiusInput").value;

    radius = Number(radius);

    circumference = 2 * pi * radius;

    console.log(circumference);

    document.getElementById("printmo").textContent = `This is the answer ${circumference}`;
}