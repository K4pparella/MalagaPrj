let questionNumber = 1;
let points = 0;

/** 
 * Create all the questions (DEPRECATED, USING DB SOON);
 * @type {*} */

var x = this.localStorage.getItem('variable');
if(this.localStorage.getItem('variable')>=1){
  window.location.replace("../../index.html");
}

function shuffle() {
  let array = questions;
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let questions = [
  {
    id: 1,
    question: "¿Cuál es la capital de Albania?",
    answer: "Tirana",
    options: [
      "Tirana",
      "Berlin",
      "Buenos Aires",
      "Roma"
    ]
  },

{
    id: 2,
    question: "¿Cuál es la capital de Argentina?",
    answer: "Buenos Aires",
    options: [
      "Malabo",
      "Dublin",
      "Buenos Aires",
      "Kingston"
    ]
  },


{
    id: 3,
    question: "¿Cuál es la capital de Bolivia?",
    answer: "La Paz",
    options: [
      "La Paz",
      "La Vella",
      "Libreville",
      "Tokio"
    ]
  },


{
    id: 4,
    question: "¿Cuál es la capital de Colombia?",
    answer: "Bogotà",
    options: [
      "Bogotà",
      "Yibuti",
      "Atenas",
      "Bissau"
    ]
  },


{
    id: 5,
    question: "¿Cuál es la capital de Chile?",
    answer: "Santiago",
    options: [
      "Santiago",
      "Honiara",
      "Nairobi",
      "Jerusalén"
    ]
  },


{
    id: 6,
    question: "¿Cuál es la capital de Italia?",
    answer: "Roma",
    options: [
      "Accra",
      "Nueva Delhi",
      "Nur-Sultan",
      "Roma"
    ]
  },


{
    id: 7,
    question: "¿Cuál es la capital de Francia?",
    answer: "Parigi",
    options: [
      "Georgetown",
      "Port-au-Prince",
      "Parigi",
      "Conakry"
    ]
  },


{
    id: 8,
    question: "¿Cuál es la capital de Georgia?",
    answer: "Tbilisi",
    options: [
      "Ammán",
      "Saint George's",
      "Banjul",
      "Tbilisi"
    ]
  },


{
    id: 9,
    question: "¿Conakry es la capital de?",
    answer: "Guinea",
    options: [
      "Haití",
      "Honduras",
      "Guinea",
      "Guyana"
    ]
  },


{
    id: 10,
    question: "¿Tokio es la capital de?",
    answer: "Japón",
    options: [
      "Japón",
      "Jamaica",
      "Alemania",
      "Inglaterra"
    ]
  },


{
    id: 11,
    question: "¿Seúl es la capital de?",
    answer: "Corea del Sur",
    options: [
      "Corea del Sur",
      "Chile",
      "Colombia",
      "República del Congo"
    ]
  },


{
    id: 12,
    question: "¿Riga es la capital de?",
    answer: "Letonia",
    options: [
      "Bolivia",
      "Albania",
      "Letonia",
      "Ghana"
    ]
  },

{
    id: 13,
    question: "¿Georgetown es la capital de?",
    answer: "Guyana",
    options: [
      "Comoros",
      "Costa Rica",
      "Guyana",
      "Egipto"
    ]
  },


{
    id: 14,
    question: "¿Guatemala es la capital de?",
    answer: "Guatemala",
    options: [
      "Guatemala",
      "Indonesia",
      "Irlanda",
      "Kenya"
    ]
  },


{
    id: 15,
    question: "¿Accra es la capital de?",
    answer: "Ghana",
    options: [
      "Etiopia",
      "Finlandia",
      "Ghana",
      "República de Fiyi"
    ]
  }];

let randomquestions = shuffle();

document.getElementById("first").addEventListener("click", function() {
  let answer = randomquestions[questionNumber].answer;

  if(answer == document.getElementById("first").innerHTML) {
    points++;
  }

  questionNumber++;
  show(questionNumber);
});

document.getElementById("second").addEventListener("click", function() {
  let answer = randomquestions[questionNumber].answer;

  if(answer == document.getElementById("second").innerHTML) {
    points++;
  }

  questionNumber++;
  show(questionNumber);
});

document.getElementById("third").addEventListener("click", function() {
  let answer = randomquestions[questionNumber].answer;

  if(answer == document.getElementById("third").innerHTML) {
    points++;
  }

  questionNumber++;
  show(questionNumber);
});

document.getElementById("fourth").addEventListener("click", function() {
  let answer = randomquestions[questionNumber].answer;

  if(answer == document.getElementById("fourth").innerHTML) {
    points++;
  }

  questionNumber++;
  show(questionNumber);
});

// /**
//  * Shows the question in series;
//  * 
//  * @param {*} count
//  */
function show(count) {
  console.log(points);
  if(count > 10){
    sessionStorage.setItem("points", points);
    window.location.replace("../html/final.html  ");
  }
  let [first, second, third, fourth] = randomquestions[count].options;

  document.getElementById("quest").innerHTML = randomquestions[count].question
  document.getElementById("first").innerHTML = first;
  document.getElementById("second").innerHTML = second;
  document.getElementById("third").innerHTML = third;
  document.getElementById("fourth").innerHTML = fourth;
}

var canvas = document.getElementById('stopwatch'),
  ctx = canvas.getContext('2d'),
  digital = document.getElementById('time'),
  second = 2 * Math.PI / 300,
  start = 1.5 * Math.PI,
  t = 300,
  animation;

var draw = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 15;
  ctx.strokeStyle = '#3399cc';
  ctx.beginPath();
  ctx.arc(25, 25, 25, start, start + second * t);
  ctx.stroke();
  t = t <= 0 ? window.location.replace("../html/final.html") : t - 0.05;
}

var startFunct = function() {
  animation = setInterval(function () {
    draw();
    digital.innerHTML = Math.floor(t);
  }, 50);
};

window.onload = function () {
  this.localStorage.setItem('variable', parseInt(this.localStorage.getItem('variable'))+1);
  show(1);
  startFunct();
};

function waitRoom() {
  this.localStorage.setItem('variable', parseInt(this.localStorage.getItem('variable'))-1);
  window.location.replace("../html/wait.html");
};



