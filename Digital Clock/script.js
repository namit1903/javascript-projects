const time=document.querySelector("#clock");
let date=new Date();
// console.log(date.toLocaleTimeString())
const stop=document.querySelector("#stop");
const start=document.querySelector("#start");
let intervalId=null;
start.addEventListener('click', timer)

time.innerHTML=`${date.toLocaleTimeString()}`;
function timer(){
  intervalId=setInterval(function(){
    let date=new Date();
    time.innerHTML=`${date.toLocaleTimeString()}`
  console.log(date.toLocaleTimeString())
}
,1000);}
stop.addEventListener("click",()=>{
  console.log("stop clicked");
  clearInterval(intervalId);
})
