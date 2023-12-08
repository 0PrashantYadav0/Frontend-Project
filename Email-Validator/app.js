console.log("hello you");

const input = document.querySelector("input");

input.addEventListener('change', (event)=>{
  email = event.target.value
});

const display = document.querySelector("p")

display.innerText = 'you are happy';
