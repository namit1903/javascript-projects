let task = document.querySelector("#task");
let tasks = document.querySelector(".tasks");
let btn = document.querySelector(".btn");
let todoArray = [];
let container = document.querySelector(".container");
console.log(localStorage);
//whenvever adding data into localstorage add it in key value pairs and also in strings format--->
// localStorage.setItem("tasks",JSON.stringify(todoArray));

if (localStorage.length) {
  let localArray = JSON.parse(localStorage.getItem("tasks"));
  todoArray = [...todoArray, ...localArray];
  console.log("arr", localArray);
  printArray(localArray);
}

function handleAdd(e) {
  // console.log(e);
  let input = task.value;
  if (input == "") return;
  console.log(task.value);
  console.log(todoArray);
  taskObj = {
    id: Date.now(),
    task: input,
  };
  todoArray.push(taskObj); //push into an array of task objects
  localStorage.setItem("tasks", JSON.stringify(todoArray));

  printArray(todoArray);

  task.value = "";
  // printArray(task);
}
function printArray(array) {
  tasks.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let taskId = array[i].id;
    let todoTask = array[i].task;
    let li = document.createElement("li");
    li.innerHTML = `<p>${todoTask}</p><i class="fas fa-trash deleteIcon"> `;
    li.classList.add("todo");
    document.querySelector(".tasks").appendChild(li);
    const delbtn = li.querySelector(".deleteIcon");
    console.log(delbtn)
    delbtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tasks.removeChild(li);
      // console.log("sabhi ne event suna");
      // if(e.target.tagName==='I'){
      //   e.target.parentNode.remove();//list item removed

      // console.log("todosss",array)}
      array = array.filter(function (task) {
        return taskId != task.id;
      });
      console.log(array);
      localStorage.setItem("tasks", JSON.stringify(array));
      // console.log(todoArray);
      todoArray=array//must update this otherwise it is a bug
    });
  }
}
//Event delegation--try with this
/*
container.addEventListener('click',(e)=>{
  console.log(e.target.tagName);
  if(e.target.tagName==='I'){
    console.log('hi',e.target.previousElementSibling);
    e.target.parentNode.remove();
  }
  console.log(e.target.classList.contains('deleteIcon'));
  // e.target.parentNode.remove();
})
*/
btn.addEventListener("click", handleAdd);
//clear local storage
const clear=document.querySelector(".clear");
clear.addEventListener("click",()=>{
  localStorage.clear();
  tasks.innerHTML=""
})

