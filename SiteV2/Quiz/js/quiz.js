//CHECK REFRESH
var x = this.localStorage.getItem('variable');
if (this.localStorage.getItem('variable') >= 1) {
  window.location.replace("../../index.html");
}


//TAKE QUESTION FROM DATABASE AND WRITE IT ON THE PAGE
var datas;

async function sendGetRequest() {
  await fetch('http://217.182.253.177:8085/question/player/' + sessionStorage.getItem("name") + '-questions')
    .then(function (response) {
      return response.json(); 
    })
    .then(function (data) {
      datas = data[0];
      console.log('the data', data);
      console.log(datas.answer);
    });

}


async function show() {
  await sendGetRequest();
  console.log(datas.optionList);
  for (let i = datas.optionList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [datas.optionList[i], datas.optionList[j]] = [datas.optionList[j], datas.optionList[i]];
  }

  let [first, second, third, fourth] = datas.optionList;
  //var quest = data.questions + "<div id=\"image-sect\"></div>";

  document.getElementById("quest").innerHTML = datas.question;
  //document.getElementById("image-sect").innerHTML = "<img id=\"image-quest\" src=\""+ data +"\" alt=\"\">";
  document.getElementById("first").innerHTML = first;
  document.getElementById("second").innerHTML = second;
  document.getElementById("third").innerHTML = third;
  document.getElementById("fourth").innerHTML = fourth;
}


//TIMER FUNCTIONS
var canvas = document.getElementById('stopwatch'),
  ctx = canvas.getContext('2d'),
  digital = document.getElementById('time'),
  second = 2 * Math.PI / 45,
  start = 1.5 * Math.PI,
  t = 45,
  animation;

var draw = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 15;
  ctx.strokeStyle = '#3399cc';
  ctx.beginPath();
  ctx.arc(25, 25, 25, start, start + second * t);
  ctx.stroke();
  if(t<=0.4){
    t=0;
    waitRoom();
  }else{
    t -= 0.05;
  }
 
}

var startFunct = function () {
  animation = setInterval(function () {
    draw();
    digital.innerHTML = Math.floor(t);
  }, 50);
};

// ON LOAD
window.onload = function () {
  this.localStorage.setItem('variable', parseInt(this.localStorage.getItem('variable')) + 1);
  show();
  startFunct();
};

function waitRoom() {
  this.localStorage.setItem('variable', parseInt(this.localStorage.getItem('variable')) - 1);
  window.location.replace("../html/wait.html");
};

function sendPostRequest(result){
  fetch('http://217.182.253.177:8085/statistics/addPoints/' + sessionStorage.getItem("name") + '-amount?amount=' + result, {
    method: 'PATCH',
    headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    }
  });
}


function checkFirstAnswer(){
  if(document.getElementById("first").innerText == datas.answer){
    sendPostRequest(1);
  }else{
    sendPostRequest(-1);
  }
}

function checkSecondAnswer(){
  if(document.getElementById("second").innerHTML == datas.answer){
    sendPostRequest(1);
  }else{
    sendPostRequest(-1);
  }
}

function checkThirdAnswer(){
  if(document.getElementById("third").innerHTML == datas.answer){
    sendPostRequest(1);
  }else{
    sendPostRequest(-1);
  }
}

function checkFourthAnswer(){
  if(document.getElementById("fourth").innerHTML == datas.answer){
    sendPostRequest(1);
  }else{
    sendPostRequest(-1);
  }
}