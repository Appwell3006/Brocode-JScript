const myText = document.getElementById("myText");
const myCelFar = document.getElementById("myCelFar");
const myFarCel = document.getElementById("myFarCel");
const mySubmit = document.getElementById("mySubmit");
const myresult = document.getElementById("myresult");

let input;

mySubmit.onclick = function(){
    input = myText.value;
    input = Number(input);

    if(myCelFar.checked){
        myresult.textContent =  (input * 9 / 5) + 32 +" Fahrenheit"
    }
    else if (myFarCel.checked){
        myresult.textContent =  ((input - 32) * 5 / 9)  +" Celsius"
    }
    else{
        myresult.textContent =  `Please check the procedure thank you`
    }
}

/* Temperature in degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32

Temperature in degrees Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9

*/

