let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let button1 =document.querySelector('.button1')
let button3 =document.querySelector('.button3')
let button2 = document.querySelector('.button2')
let button2p = document.querySelector('.button2p')

let p = document.querySelector('p')

p.style.fontSize = "60px"
p.style.color = "white"
p.style.fontFamily ="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"

button1.setAttribute("style","width:80px; height:80px;")
button3.setAttribute("style","width:70px; height:70px;")
button2p.style.display="none"

let stp;

function start(){
let s=1;
let m=1;
let h=1;
stp= setInterval(() => {

sec.innerHTML = s++;+(s<10?"0":"")

if(s>=60){
    min.innerHTML = m++;
    s=1;
    if(m>=60){
        hrs.innerHTML = h++;
       m=1;
    }
}
}, 20);
} 


function stop(){
    clearInterval(stp);
   button2.src="pausebutton.png"  
}
function pause(){
    button2p.src="playbutton.png"
}

function reset(){
    sec.innerHTML = "00"
    min.innerHTML = "00"
    hrs.innerHTML = "00"
}
