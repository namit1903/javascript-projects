let task=document.querySelector("#task");
let tasks=document.querySelector(".tasks");
let btn=document.querySelector(".btn");
let todolist=[];
console.log(localStorage)
function handleClick(e){
  console.log(e);
  let input=task.value;
  if(input==="") return;
  todolist.push(input);
  //adding key value pair in the local storage
  let key = "element_" + new Date().getTime();
  localStorage.setItem(key,input);
  task.value="";
  let li=document.createElement("li");
  li.innerHTML=`${input}<i class="fas fa-trash deleteIcon"> `

  li.classList.add('todo');
  
  document.querySelector(".tasks").appendChild(li);
  // document.querySelector("li").appendChild(span);
  }
 

btn.addEventListener("click",handleClick);
//get values from loca, storage
for(let i=0; i<localStorage.length; i++){
  let key = localStorage.key(i);
  let value=localStorage.getItem(key);
  let li=document.createElement("li");
  li.innerHTML=`${value}<i class="fas fa-trash deleteIcon"> `
  // let span=document.createElement("i");
  // span.classList.add("fa", "fa-trash")
  li.classList.add('todo')
  // li.innerHTML=value;
  
 
  document.querySelector(".tasks").appendChild(li);
  // document.querySelector("li").appendChild(span);
  }
 


//delete functionality
/*
let del=document.querySelector(".fas");
console.log(del);
del.addEventListener('click',(e)=>{
  // console.log(e)
 console.log( e.target.parentNode)
 e.target.parentNode.remove();
})*/
//another approach
let container=document.querySelector(".container");
container.addEventListener('click',(e)=>{
  console.log(e.target.tagName);
  if(e.target.tagName==='I'){
    e.target.parentNode.remove();
  }
  console.log(e.target.classList.contains('deleteIcon'));
  // e.target.parentNode.remove();
})

window.addEventListener("load",()=>{
  // const value=localStorage.getItem('work')
})
//clear local storage
const clear=document.querySelector(".clear");
clear.addEventListener("click",()=>{
  localStorage.clear()
})


