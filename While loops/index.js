/* let name = "";
 
while(name === "" || name === null ){
    name = window.prompt(`Enter your name here`);
}

console.log(`Hello ${name}`); */

let loggedin = false;
let email;
let password;

while(!loggedin){
    email = window.prompt(`Enter your email here`);
    password = window.prompt(`Enter your password here`);

    if(email === "Jimwell" && password === "12345"){
        loggedin = true;
        console.log("You succesfully log in");
    }
    else{
        console.log(`Invalid email and password please try again`);
    }
} 

