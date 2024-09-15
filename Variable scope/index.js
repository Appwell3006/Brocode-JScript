//variable scope === where a variable is recognized and accessible (local vs global)

let x = 3; //global

function1();

function function1 (){
    let z = 5 //local
    console.log(c); // ito ay nasa function2 kaya hindi ito makita ng varible
    console.log(x) // naka global at naka declare sa labas kaya makikita ito ng varible
}

function function2 (){
    let c = 10; //local
    console.log(z) // ito ay nasa function1 kaya hindi ito makita ng varible
    console.log(x) // naka global at naka declare sa labas kaya makikita ito ng varible
}