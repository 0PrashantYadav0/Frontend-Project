let button = document.querySelectorAll("button");
let data='';
let history='';

button.forEach((val)=>{
  val.addEventListener('click',e =>{
    let innerText = e.target.innerText
    if(innerText == '='){
      res = eval(data);
      document.getElementById("resultTextArea").value = `${res}`; 
      history += data;
      history += '\n';
    console.log(history)
    document.getElementById("historyTextArea").innerText = `${history}`;
    }else if(innerText == '⌫'){
      data = data.slice(0,-1);
      document.getElementById("resultTextArea").value = `${data}`;
    }else if(innerText == 'C'){
      data = ''
      document.getElementById("resultTextArea").value = `${data}`;
    }
    else{
      data = data + innerText;
      document.getElementById("resultTextArea").value = `${data}`;
    }
    
  })
})