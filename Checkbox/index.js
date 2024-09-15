
const myCheckbox = document.getElementById("myCheckbox");
const bsitBtn = document.getElementById("bsitBtn");
const bscsBtn = document.getElementById("bscsBtn");
const mySubmit = document.getElementById("mySubmit");
const bsceBtn = document.getElementById("bsceBtn");

const h21 = document.getElementById("h21");
const h22 = document.getElementById("h22");

mySubmit.onclick = function(){

    if(myCheckbox.checked){
        h21.textContent = `Congratulation you are Enrolled`

        if(bsitBtn.checked){
            h22.textContent = `You Enrolled BSIT`
        }
        else if(bscsBtn.checked){
            h22.textContent = `You Enrolled BSCS`
        }
        else if(bsceBtn.checked){
            h22.textContent = `You Enrolled BSCE`
        }
        else{
            h22.textContent = `You Enrolled but you dont select a course!`
        }
    }
    else{
        h21.textContent = `Sorry you are not enrolled`
    }


}