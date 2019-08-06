const reset = document.getElementById("reset");
const brInc = document.getElementById("break-increment");
const brDec = document.getElementById("break-decrement");
const sesInc = document.getElementById("session-increment");
const sesDec = document.getElementById("session-decrement");
const brLen = document.getElementById("break-length");
const sesLen = document.getElementById("session-length");
const strStp = document.getElementById("start_stop");
const min = document.getElementById("minutes");
const session = document.getElementById("time-left");

reset.addEventListener('click',onReset);
function onReset(event){
    console.log(event);
document.getElementById("session-length").innerText = "25";
document.getElementById("break-length").innerText = "5";
document.getElementById("minutes").innerText = "25";
document.getElementById("colon").innerText = ":";
document.getElementById("seconds").innerText = "00";
}

brInc.addEventListener('click',onBrInc)
function onBrInc(event){
//console.log(event.path[1].children[1].innerText);
let x = brLen.innerText;
if(x==5) return 0; 
x++;
console.log(x);
brLen.innerText = x;
}

brDec.addEventListener('click',onBrDec)
function onBrDec(event){
//console.log(event.path[1].children[1].innerText);
let x = brLen.innerText;
if(x==0) return 0; 
x--;
console.log(x);
brLen.innerText = x;
}

sesInc.addEventListener('click',onsesInc)
function onsesInc(event){
let x = sesLen.innerText;
if(x==25) return 0; 
x++;
console.log(x);
sesLen.innerText = x;
}

sesDec.addEventListener('click',onsesDec)
function onsesDec(event){
//console.log(event.path[1].children[1].innerText);
let x = sesLen.innerText;
if(x==0) return 0; 
x--;
console.log(x);
sesLen.innerText = x;
}


strStp.addEventListener('click',onstrStp);

function onstrStp(){
  min.innerText=sesLen.innerText;
  tick();
    };


    var seconds=6;
    function tick(currentmin){
    const mins = min.innerText;
      seconds--;
      var currentmin =mins-1;
     session.innerText = currentmin + ":" + seconds;
     console.log(currentmin);
     if(seconds>0){
        setTimeout(tick, 1000);
       }
       else{
       currentmin--;
       session.innerText = currentmin + ":" + 5;
            }
       }
