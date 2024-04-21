let intervalID;
const randomColor=function(){
  const hex="0123456789ABCDEF";
  let color="#";
  //hexcolor=#FFFFFF
  for(let i=0; i<6;i++){
color+=hex[Math.floor(Math.random()*16)]
// console.log(color)
  }
  return color;
};
console.log(randomColor());

const container=document.querySelector('.container');
const start=function(){
  intervalID=setInterval(()=>{
    const bgcolor=randomColor();
    container.style.backgroundColor=bgcolor;
  },1000)

  }
  const stop=()=>{
    clearInterval(intervalID);
    //flush out intervalid
    intervalID=null;
  }


document.querySelector('.start').addEventListener('click',start)

  document.querySelector('.stop').addEventListener('click',stop)
