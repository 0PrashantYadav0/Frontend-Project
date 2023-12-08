const output = document.querySelector('.output');
const outputdiv = document.querySelector('.color-output');
const btn = document.querySelector('.create');
const copy  = document.querySelector('.copy')


btn.addEventListener('click',(event)=>{
  let val1 = Math.floor(Math.random() * 255)
  let val2 = Math.floor(Math.random() * 255)
  let val3 = Math.floor(Math.random() * 255)
  let outputColor = `rgb(${val1},${val2},${val3})`
  output.innerText = outputColor;
  outputdiv.style.backgroundColor = outputColor;
});


// copy.addEventListener('click',(event)=>{
//   let text = output.innerText;
//   navigator.clipboard.readText(text);
//   alert(`copied text = ${text}`);
//   console.log(  navigator.clipboard.writeText(text)
//   )
// })
copy.addEventListener('click', function () {
  const range = document.createRange();
  range.selectNode(outputdiv);

  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    document.execCommand('copy');
    alert('Color code copied to clipboard!');
  } catch (error) {
    console.error('Unable to copy to clipboard', error);
  }

  selection.removeAllRanges();
});
