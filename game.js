let wins = 0;

function shoot(direction){

const ball =
document.getElementById("ball");

const keeper =
document.getElementById("keeper");

const result =
document.getElementById("result");

ball.style.left = "50%";
ball.style.bottom = "160px";

keeper.style.left = "50%";

const saveDirection =
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

ball.style.top="130px";

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
"🧤 SAVED!";

}
else{

wins++;

document.getElementById("wins")
.innerHTML = wins;

result.innerHTML =
"⚽ GOOOOAL!";

}

ball.style.top="";

ball.style.bottom="160px";

},1000);

}
