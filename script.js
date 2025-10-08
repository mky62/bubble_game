function makeBubble(){

let clutter = " ";
for(let i = 1;i<=350;i++){
    let rn = Math.floor(Math.random() *10);
    clutter +=  `<div class="bubble"> ${rn}</div>`;

}

document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

let timer = 60;
function rnTimer(){
   setInterval(function(){
    if(timer <= 0){ 
        clearInterval();
        return;
    }
    timer--;
    document.querySelector("#timer").textContent = timer;
   },1000);
}

rnTimer();

function getNHit(){
   let nHit = Math.floor(Math.random() *10);
    document.querySelector("#nHit").textContent = nHit;
}

getNHit();

