let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let button2 = document.querySelector('.button2')
// let button2p = document.querySelector('.button2p')

let stp;
function start(){
let s=0;
stp= setInterval(() => {
sec.innerHTML= s++;
}, 1000);
}


function stop(){
    clearInterval(stp);
   let but2p =( button2.src="pausebutton.png")
    // button2.style.display="none"
    // button2p.style.display="block"
   but2p.addEventListener('click',()=>{
    but2p.src="playbutton.png"
   })
  
}
function pause(){

     button2.style.display="block"
    button2p.style.display="none"
}
