let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

let button2 = document.querySelector('.button2')
let button2p = document.querySelector('.button2p')

let p = document.querySelector('p')
p.style.fontSize = "60px"
p.style.color = "white"
p.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"

let button1 = document.querySelector('.button1')
let button3 = document.querySelector('.button3')
button1.setAttribute("style", "width:70px; height:70px;")
button3.setAttribute("style", "width:70px; height:70px;")

let screen = document.querySelector('screen')
screen.setAttribute("style", "paddingTop: 10%; wordSpacing: 30px;")

var st

function start(){
    let [s,m,h]=[1,1,1];
 st = setInterval(()=>{
   sec.innerHTML = s++;
   if(s==60){
    s=0;
    min.innerHTML =  m++;
    if(m==60){
        m=0;
    hrs.innerHTML = h++;
    }
   }
  },100);

}

function stop(){
    clearInterval(st);
    button2.src ="pausebutton.png"
} 

function reset(){
    sec.innerHTML = "00"
    min.innerHTML = "00"
    hrs.innerHTML = "00"
    button2.src="colorplay.png"
}
