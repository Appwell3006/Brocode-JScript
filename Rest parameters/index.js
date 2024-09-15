 function openFrige(...foods){
    console.log(...foods);
 }
 function getFood(...foods){
    return foods;
 }

 const food1 = "pizza";
 const food2 = "Hamburger";
 const food3 = "Hotdog";
 const food4 = "Sushi";
 const food5 = "Ramen";

 //ang output nito ay naka print sya ng sunod sunod lamang at hindi naka array

openFrige(food1, food2, food3, food4, food5);



 // ito naman naka array sya mag priprint

const foods = getFood(food1, food2, food3, food4, food5); 

console.log(foods);




