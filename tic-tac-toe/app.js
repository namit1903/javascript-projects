let box=document.querySelectorAll(".box");
let game=document.querySelector(".game");//and used event delegation
let resetBtn=document.querySelector("#reset-btn");
resetBtn.addEventListener("click",function(){
  //reset function
  console.log(box.textContent);
  box.forEach((item)=>{
    item.textContent=""
    item.disabled=false;
  }

  )
})
let turn0=true;
let winPattern=[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
game.addEventListener('click',(e)=>{
  
  console.log('event',e)
  console.log("check this",e.target==game)
  if(e.target==game) return;
  // e.stopPropagation()
  // console.log(e.target.classList.contains('box'));
  let selection=e.target;//box selcted
  // console.log(turn0)
   if(turn0){
selection.innerHTML="0";
turn0=false;
selection.disabled=true;
  }
  else{
 selection.innerHTML="X";
 turn0=true;
 selection.disabled=true;
  }
  //business logic
  if(checkWin()){
    console.log("winner")
    setTimeout(()=>{
    alert(`${selection.innerHTML} is the winner`);
    window.location.reload();
    },2);
  }
  else if(checkDraw()){
    console.log("draw")
    setTimeout(()=>{
      alert(` Game is Draw!!!`);
      window.location.reload();
      },2);
  }

})

function checkWin(){//closure usage
  let cells=document.querySelectorAll(".box")//get a nodelist
  // let cells=document.getElementsByClassName("box")//get a Html collection
  console.log(cells)
  return winPattern.some(condition=>{
    const [a,b,c]=condition;
    // console.log("hi",a,cells[a]);
    return cells[a].textContent &&
    cells[a].textContent === cells[b].textContent &&
    cells[a].textContent === cells[c].textContent;
  })
}
function checkDraw(){
  let cells=document.querySelectorAll(".box");
  
  return [...cells].every(cell => cell.textContent);
  
}
