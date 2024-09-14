// if else statement in java script


const myAge = document.getElementById("myAge");
const mySubmit = document.getElementById("mySubmit");
const myRes = document.getElementById("myRes"); 
let age;

mySubmit.onclick = function(){

    age = myAge.value;

    age = Number(age);

    if (age >= 50){
        myRes.textContent = "You've enter to this website but your too OLD";
        console.log("You've enter to this website but your too OLD");

    }
    else if(age >= 19){
        myRes.textContent = "You've enter to this website thank you.";
        console.log("You've enter to this website thank you.");
    }
    
    else{
       myRes.textContent = "You are under age to this Website";
       console.log("You are under age to this Website");
    }
}
