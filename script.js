function makebubble(){
    var clutter = "";
for(var i=1; i<=102;i++){
    var rn=Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector(".pbtm").innerHTML = clutter;
}
var hitrn;
var timer=15;
function runtime(){
  var timerint=  setInterval(function () {
        if(timer>0)
       { timer--;
        document.querySelector("#timerval").textContent=timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML=`<h1>chal na chutiye</h1>`;
    }
    },1000);
}
function getnewhit(){
     hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
var score=0;
function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;

}
document.querySelector("#pbtm").addEventListener("click",
function (dets) {
   var clicked=Number(dets.target.textContent);
   if(hitrn==clicked){
    increasescore();
    makebubble();
    getnewhit();
   }
});
runtime();
makebubble();
getnewhit();
