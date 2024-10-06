
let today 
let hour 
let minute 
let second 


setInterval(()=>{
   today = dayjs()
   hour = today.format('hh')
   minute = today.format('mm')
   second = today.format('ss')
   state = today.format('a')
  document.querySelector('.clock').innerHTML= `${hour +' : '+ minute+ ' : '+second +" " +state}`
},1000)




const sendEmail = () => {

 const form =  document.getElementById('emailForm')

  emailjs
    .sendForm('service_7034rdc', 'template_br35nl8', form, {
      publicKey: 'eZs_1JGJBa7Dj7XjM',
    })
    .then(
      () => {
        document.getElementById('notfi').classList.add('show-notification')
        document.getElementById('overly').classList.remove('hide-overly')
        
  
        // alert('Message has been sent successfully')
      },
      (error) => {
        alert('FAILED...', error.text);
      },
    );
};





// form submit event listner 
 document.getElementById('emailForm').addEventListener('submit',(e)=>{
  e.preventDefault()
 const time = document.getElementById('time').value
 const intervalId = setInterval(()=>{
  today = dayjs()
  hour = today.format('HH')
  minute = today.format('mm')
  second = today.format('ss')
  state = today.format('a')
  let currentTime = hour +':'+ minute

  if(time===currentTime){
    sendEmail()
    clearInterval(intervalId)
  }
},1000)


// contact service from emailJs library 


})


// add event listner for notification button to close the modle
const email =  document.getElementById('email');
const time =  document.getElementById('time')
document.getElementById('notfi-btn').addEventListener('click',()=>{
  document.getElementById('notfi').classList.remove('show-notification');
  document.getElementById('overly').classList.add('hide-overly')
  email.value = ''
  time.value = ''

})
