 const mybutton = document.getElementById("mybutton");
 const mylabel = document.getElementById("mylabel");

 const max = 100000000;
 const min = 1;

 let randomNum;

 mybutton.onclick = function(){

    randomNum = Math.floor(Math.random() * (max-min)) + min;

    mylabel.textContent = randomNum;
 }

 /*  mybutton.onclick = function(){

    mylabel.textContent = Math.floor(Math.random() * (max-min)) + min;

     
 }*/