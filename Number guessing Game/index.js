
const myNumber = document.getElementById("myNumber");
const myRes = document.getElementById("myRes");
const mySubmit = document.getElementById("mySubmit");
let numero;



let randomNum;
const max = 100;
const min = 1;
let attemps = 0;


randomNum = Math.floor(Math.random() * (max-min)) + min;

console.log(randomNum);



mySubmit.onclick = function(){

    numero = myNumber.value;
    numero = Number(numero);
    
    if(numero > randomNum){
        myRes.textContent = `Get Lower!!`
        attemps++;
    }
    else if(numero < randomNum){
        myRes.textContent = `Get Higher!!`
        attemps++;
    }
    else{
        myRes.textContent = `Congratulation you got tht guest Number!!! and you attepts are ${attemps}`
    }
    
}

const refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);


