const hourel=document.getElementById("hour")
const minuteel=document.getElementById("minutes")
const secondel=document.getElementById("second")
const amel=document.getElementById("ampm")
const bakcground=document.querySelector("body")



function updateClock(){
    let h= new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let a="AM";
    
    if(h>12){
        h=h-12;
        a="PM";
    }else{
        bakcground.style.backgroundImage="url('https://images.pexels.com/photos/15826124/pexels-photo-15826124/free-photo-of-sunlight-shining-on-mountain-peaks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
    }
    if(m<10){
        m="0"+m
    }
    if(s<10){
        s="0"+s
    }
    if(h<10){
        h="0"+h   
    }
    

    hourel.innerText=h;
    minuteel.innerText=m;
    secondel.innerText=s;
    amel.innerText=a;
    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock()