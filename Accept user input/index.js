/*let username;

username = window.prompt("what is your username? ");

console.log(username);*/

let username;

/* document.getElementById("submmit").onclick = function(){
    username = document.getElementById("mytext").value;

    console.log(username);
} */

document.getElementById("submmit").onclick = function(){

    username = document.getElementById("mytext").value;

    document.getElementById("h11").textContent = `hello ${username}`;

}