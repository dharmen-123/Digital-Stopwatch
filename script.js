let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let button2 = document.querySelector('.button2')
let button2p = document.querySelector('.button2p')
button2p.style.display="none"

let stp;

function start(){
let s=1;
let m=1;
let h=1;
stp= setInterval(() => {

sec.innerHTML = s++;
(s<10?"0":"")
if(s>=60){
    min.innerHTML = m++;
    s=1;
    if(m>=60){
        hrs.innerHTML = h++;
       m=1;
    }
}
}, 300);
} 


function stop(){
    clearInterval(stp);
//    let but2p =(button2.src="pausebutton.png")
   but2p.addEventListener('click',()=>{
    but2p.src="playbutton.png"
   })
  
}
function pause(){

     button2.style.display="block"
    button2p.style.display="none"
}

function reset(){
    sec.innerHTML = "00"
    min.innerHTML = "00"
    hrs.innerHTML = "00"
}
