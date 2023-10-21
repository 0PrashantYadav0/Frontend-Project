console.log("Welcome to tic tac toe")

// letting the different value
let music1 = new Audio("music1.mp3")
let turn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let gameturn = "X"
let isgameover = false
let turncount=0

//function to change the turn
const changeTurn = () => {
  return gameturn === "X" ? "O" : "X"
}

// Function to check for a win
const checkWin = ()=>{

  let boxtext = document.getElementsByClassName('boxtext');

  let wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];

  wins.forEach(e =>{

      if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") )
      {
          turncount=0;

          document.querySelector('.info').innerText = "Player with " + boxtext[e[0]].innerText + " Won";

          isgameover = true;

          document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";

          document.querySelector('.lossbox').getElementsByTagName('img')[0].style.width = "0";

          document.querySelector('.drawbox').getElementsByTagName('img')[0].style.width = "0";

          //gameover volume 
          let gameovervolume=true;
          if(gameovervolume)
          {
            gameover.play();
            gameover.volume=0.6;
            gameovervolume=false;
          }

      }
      else if(turncount === 9
        ){
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0";

        document.querySelector('.lossbox').getElementsByTagName('img')[0].style.width = "0";

        document.querySelector('.drawbox').getElementsByTagName('img')[0].style.width = "250px";

        document.getElementsByClassName("info")[0].innerText = "Match is draw play again";

        isgameover=true;

      }
  }
  )
}

//music for game
music1.play();
music1.volume=0.7;

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.boxtext');

  element.addEventListener('click', ()=>{
    if(boxtext.innerText==='')
    {
      boxtext.innerText= gameturn;
      gameturn = changeTurn();
      turncount++;
      turn.play();
      turn.volume=0.2;
      checkWin();
      if(!isgameover){
        document.getElementsByClassName("info")[0].innerText = "Turn for " + gameturn;
      }
    }
  }
  )
}
)

// Add onclick listener to reset button
reset.addEventListener('click', (e)=>{
  let boxtexts = document.querySelectorAll('.boxtext');
  Array.from(boxtexts).forEach(element => {
      element.innerText = ""
  });

  //reset all the value
  gameturn = "X"; 
  isgameover = false;
  turncount=0;
  gameovervolume=true;

  document.getElementsByClassName("info")[0].innerText  = "Turn for " + gameturn;

  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

  document.querySelector('.drawbox').getElementsByTagName('img')[0].style.width = "0px";

  document.querySelector('.lossbox').getElementsByTagName('img')[0].style.width = "250px";
  
}
)