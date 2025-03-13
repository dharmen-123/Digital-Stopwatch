let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

let stp;
function start(){
let s=0;
stp= setInterval(() => {
sec.innerHTML= s++;
}, 1000);
}

function stop(){
    clearInterval(stp);
    let button2p = document.querySelector('.button2')
    button2p.src="pausebutton.png"
}
