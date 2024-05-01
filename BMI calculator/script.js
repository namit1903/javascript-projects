const input=document.querySelectorAll("input");
const button=document.querySelector("button");
let height=0;
let weight=0;
let bmi=0;
console.log(input)
input.forEach((item)=>{

  item.addEventListener('input',(e)=>{
    // console.log(item.value)
    if (item.id=="height"){
      height = item.value
    }
    else if (item.id=="weight"){
      weight = item.value;
    }
  })
})
let result="";
button.addEventListener('click',(e)=>{
e.preventDefault()
  bmi=((weight/height)*100).toFixed(2)
  console.log(bmi)
  if(bmi<18.6) {result="underweight"}
  else if(18.6<bmi && bmi<24.6){ result="Normal ";}
else if(bmi>24.6){
  result="OverWeight"
}
document.querySelector("#results").innerText=`Your BMI is ${bmi} and you are ${result}`
})