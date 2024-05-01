/*document.querySelector(".button").addEventListener("click",(e)=>{
  console.log(e)
  document.querySelector("body").style.backgroundColor=e.target.id;
})*/
// iss code me kya kharabi hai sirf ek hi baar clcick kyu kr paa rha hoon---just beacause har ek element pr event listener lagaya hai
const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body");
// console.log(buttons)
buttons.forEach((item)=>{
  // console.log(item)
  item.addEventListener("click",()=>{
    console.log(item.id);
    body.style.backgroundColor=item.id;
  })
})