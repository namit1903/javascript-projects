 //fun activity
 function header(){
  const img=document.querySelector('img')
  const h1=document.createElement('h1');
  h1.setAttribute('id',"heading");
  h1.textContent="Simple Image Slider";
 
  document.querySelector('.container').insertBefore(h1,img)
  }
//Actual Business Logic
const container=document.querySelector(".container");
let count=7;
const prev=document.querySelector(".btn-prev");
const next=document.querySelector(".btn-next");
container.innerHTML=` <img src="https://picsum.photos/id/23${count}/1000/500" class="image1" class="slide"/>`

prev.addEventListener('click',()=>{
  header();
  console.log("header run hua")
  count--;
  if(count<0){
    count=7;
  }
  container.innerHTML=` <img src="https://picsum.photos/id/23${count}/1000/500" class="image1" class="slide"/>`
})
 next.addEventListener('click',()=>{
  header();
  count++;
  count>9?count=0:null;
  container.innerHTML=` <img src="https://picsum.photos/id/23${count}/1000/500" class="image1" class="slide"/>`

 })

 header();