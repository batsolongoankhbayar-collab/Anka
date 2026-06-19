let wins = 0;

function shoot(direction){

const ball =
document.getElementById("ball");

const keeper =
document.getElementById("keeper");

const result =
document.getElementById("result");

ball.style.left = "50%";
ball.style.bottom = "140px";

keeper.style.left = "50%";

let saveDirection =
["left","center","right"]
[Math.floor(Math.random()*3)];

if(direction==="left"){
ball.style.left="35%";
}

if(direction==="center"){
ball.style.left="50%";
}

if(direction==="right"){
ball.style.left="65%";
}

ball.style.top="80px";

if(saveDirection==="left"){
keeper.style.left="35%";
}

if(saveDirection==="center"){
keeper.style.left="50%";
}

if(saveDirection==="right"){
keeper.style.left="65%";
}

setTimeout(()=>{

if(direction===saveDirection){

result.innerHTML =
"🧤 SAVED";

}

else{

wins++;

document.getElementById("wins")
.innerHTML = wins;

result.innerHTML =
"⚽ GOOOOAL";

}

ball.style.top="";

ball.style.bottom="140px";

},1000);

}
