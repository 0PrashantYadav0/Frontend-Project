console.log("hello you");


let music1 = new Audio("music/music1.mp3");
let turn = new Audio("music/ting.mp3");
let gameover = new Audio("music/gameover.mp3");


const score = {
  wins: 0,
  losses: 0,
  ties: 0
};


//computer moves being pick here
function computerMove(){

  const choice=Math.random();
  let computerpick;

  if(choice< 1/3 && choice>0){
    computerpick="rock"
  }
  else if(choice>1/3 && choice<2/3){
    computerpick="paper"
  }
  else{
    computerpick="scissors"
  }

  return computerpick;
}


//Auto playing the game
let isautoplaying = false;
let intervalID;

function autoplay(){

  //gameover sound
  gameover.play();
  gameover.volume=0.7;

  if(!isautoplaying)
  {
    intervalID = setInterval(function() {
      const playerpick = computerMove();
      playgame(playerpick);
    },2000);
    isautoplaying=true;
    document.getElementsByClassName('GAMEMODE')[0].innerText = "In Auto Play mode";
    document.getElementById("Autoplay").innerText = "MANUAL";
  }
  else{
    clearInterval(intervalID);
    document.getElementsByClassName('GAMEMODE')[0].innerText = "Not on Auto Play";
    document.getElementById("Autoplay").innerText = "AUTOPLAY";

    isautoplaying = false;
  }
}


//fix number of moves

function numberplay(){

  //gameover sound
  gameover.play();
  gameover.volume=0.7;
  
  const filled = document.querySelector('.js-number-input');
  const inputnumber = filled.value;

  for(i=0 ;i<inputnumber ; i++)
  {
    const playerpick = computerMove();
    playgame(playerpick);
  }
}


//Output on enter
function handleoutput(event){
  if(event.key == 'Enter'){
    numberplay();
  }
}


//playing by pressing key
document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    playgame("rock");
  }
  else if(event.key === 'p'){
    playgame("paper");
  }
  else if(event.key === 's'){
    playgame("scissors");
  }
})


//playing game function

function playgame(playermove){

  //music for game
  music1.play();
  music1.volume=0.4;

  // sound on clicking any button
  turn.play();
  turn.volume=0.3;

  const computerpicksit = computerMove();
  if(playermove ==='rock')
  {

    if(computerpicksit==='scissors')
    {
      document.getElementsByClassName('result')[0].innerText=  "You Win"; 
      score.wins++;
      console.log("you win")
    }

    else if( computerpicksit==='paper')
    {
      document.getElementsByClassName('result')[0].innerText=  "You lose";
      console.log("you lose");
      score.losses++;
    }

    else
    {
      document.getElementsByClassName('result')[0].innerText=  "Tie match" ; 
      console.log("you draw");
      score.ties++;
    }
  }


  else if(playermove ==='paper')
  {

    if(computerpicksit==='scissors')
    {
      document.getElementsByClassName('result')[0].innerText=   "You lose";
      console.log("you lose");
      score.losses++;
    }

    else if( computerpicksit==='paper')
    {
      document.getElementsByClassName('result')[0].innerText=   "Tie match"; 
      console.log("you draw");
      score.ties++
    }

    else
    {
      document.getElementsByClassName('result')[0].innerText= "You Win"; 
      console.log("you win");
      score.wins++;
    }

  }



  else if(playermove ==='scissors')
  {

    if(computerpicksit==='scissors')
    {
      document.getElementsByClassName('result')[0].innerText=  "Tie match" ; 
      console.log("you draw");
      score.ties++;
    }

    else if( computerpicksit==='paper')
    {
      document.getElementsByClassName('result')[0].innerText= "You Win"; 
      console.log("you win");
      score.wins++;
    }

    else{
      document.getElementsByClassName('result')[0].innerText =  "You lose";
      console.log("you lose");
      score.losses++;
    }

  }


  //changing the values of different results

  //win case
  document.getElementsByClassName('yourwin')[0].innerText = "Your Wins : " + score.wins; 

  //loss case
  document.getElementsByClassName('computerwin')[0].innerText = "Your Losses : " + score.losses; 

  //tiie case
  document.getElementsByClassName('tiegame')[0].innerText = "Tie matches : " + score.ties; 


  // showing the picks in picture
  document.querySelector('.result-div').innerHTML =  `Your pick
  <img src="img/${playermove}-emoji.png" alt="">
  Computer's pick
  <img src="img/${computerpicksit}-emoji.png" alt="">`;

};


//reseting the value
reset.addEventListener('click', (e)=>{

  //music for game
  music1.play();
  music1.volume=0.4;

  //gameover sound
  gameover.play();
  gameover.volume=0.7;
  
    //alert for winner team
  if(score.wins > score.losses){
    alert(
      "Are you sure you want to reset as you have more score than computer."
    )
  }

  
  // //changing the value back to zero 

  score.ties=0;
  score.losses=0;
  score.wins=0;

  //Back to initial 
  document.getElementsByClassName('yourwin')[0].innerText = "Your Wins : 0";

  document.getElementsByClassName('computerwin')[0].innerText = " Your Losses : 0";

  document.getElementsByClassName('tiegame')[0].innerText = "Tie matches : 0";

  document.getElementsByClassName('result')[0].innerText = "";

  document.querySelector('.result-div').innerHTML =  ``;

}
)