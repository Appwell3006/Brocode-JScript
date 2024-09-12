

const decreaseBtn = document.getElementById("pababa");
const increaseBtn = document.getElementById("pataas");
const resetBtn = document.getElementById("ulit");
const countlevel = document.getElementById("Number");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countlevel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countlevel.textContent = count;
}


resetBtn.onclick = function(){
    count = 0;
    countlevel.textContent = count;
}