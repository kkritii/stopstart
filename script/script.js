let start= document.getElementById('btn-start');
let stop = document.getElementById('btn-stop');
let display = document.getElementById('display');
let myInterval;

start.addEventListener("click",(e)=>{
    let val = Math.floor(100 + Math.random() * 900);
    let i =0;
    myInterval = window.setInterval(()=>{
        
        display.innerHTML = val + "+" + i +"=" + (val +i);
        i=i+10;
        console.log(val);
    },500);

})

stop.addEventListener("click",()=>{
    clearInterval(myInterval);
})

