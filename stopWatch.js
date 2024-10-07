
let hour =0;
let minute =0;
let second =0;
let millsecond = 0;
let intervalPaused = true;
let intervalId;
 document.querySelector('.clock').innerHTML= `${hour +' : '+ minute+ ' : '+second  +"."+ millsecond}`



const stopWatch = ()=>{
if(!intervalPaused){
 intervalId = setInterval(()=>{
millsecond+=1;
if(millsecond>=60){
  millsecond=0;
  second+=1;
}
if(second>=60){
  second=0;
  minute+=1;
}
if(minute>=60){
  minute=0;
  hour+=1;
}
 document.querySelector('.clock').innerHTML= `${hour +' : '+ minute+ ' : '+second +"."+ millsecond}`

},(1000/60))
console.log(intervalId)
}
}


const pauseInterval = ()=>{
  clearInterval(intervalId);
  intervalPaused = true;
  stopWatch()
}
const startInterval = ()=>{
  intervalPaused = false;
  stopWatch()
}
document.getElementById('pause').addEventListener('click',()=>{
  console.log(intervalId)
  pauseInterval()

  
})


// event listeners
document.getElementById('start').addEventListener('click',()=>{
  if(intervalPaused)
     startInterval()

})
document.getElementById('restart').addEventListener('click',()=>{
   hour =0;
   minute =0;
   second =0;
   millsecond = 0;
  document.querySelector('.clock').innerHTML= `${hour +' : '+ minute+ ' : '+second +"."+ millsecond}`
  
})