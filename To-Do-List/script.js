console.log("welcome");

//function to print user name
function printusername()
{
  
  const username = document.querySelector('.usernameinput');
  const usernamefilled = username.value;

  document.getElementsByClassName('username')[0].innerText = usernamefilled;

  document.querySelector('.usernameinputbox').innerHTML = `<button class="newname">
  NEW NAME
  </button>`;

  const newname = document.querySelector('.newname');
  newname.addEventListener('click', (e) => {
    document.querySelector('.usernameinputbox').innerHTML = `<input type="text" class="usernameinput">`;

});
}


document.addEventListener('keydown', (event) => {
  if(event.key == 'Enter')
  {
    printusername();
  }
});


// function for display tasklist
const tagnames = [];

function taglist(){

  //initial html 
  let taglistHTML = ``;

  //fetching data
  const tagnamefilled = (document.querySelector('.namefortag')).value;
  (document.querySelector('.namefortag')).innerHTML= ``;
  tagnames.push(tagnamefilled);

  //displaying data
  for (let j = 0; j < tagnames.length; j++) 
  {
    const worktag = tagnames[j];
    const html = `<li class="worktask">${worktag}</li>`;
    taglistHTML += html;
  }

  document.querySelector('.inputtags').innerHTML = taglistHTML;

}

//input of task list
const tasknames = [];
const taskdates = [];

function taskdisplaylist(){

  //initial html 
  let tasklistHTML = ``;

  //fetching data
  const tasknamefilled = (document.querySelector('.taskname')).value;
  const taskdatefilled = (document.querySelector('.datebutton')).value;

  (document.querySelector('.namefortag')).innerHTML= ``;
  tasknames.push(tasknamefilled);
  taskdates.push(taskdatefilled);

  //displaying data
  for (let j = 0; j < tasknames.length; j++) 
  {
    const worktask = tasknames[j];
    const workdate = taskdates[j];
    const html = `<div class="outputtask">${worktask}</div>
    <p class="outputdate">${workdate}</p>
    <button class="deletebutton">
      DELETE
    </button>`;
    tasklistHTML += html;
  }

  document.querySelector('.displaylistofwork').innerHTML = tasklistHTML;

}


//By enter input tag list
function entervalue(event)
{
  if(event.key == 'Enter')
  {
    taglist();
  }
};


//by button input task
const printtag = document.querySelector('.tagit');
printtag.addEventListener('click', (e) => {
  taglist();
});


//by add button input 
const addtask = document.querySelector('.addbutton');
addtask.addEventListener('click', (e) => {
  taskdisplaylist();
});


//delete button work
const deletetask = document.querySelector('.addbutton');
deletetask.addEventListener('click', (e) => {
  taskdeletelist();
});