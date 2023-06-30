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
    question: "¿Quién pintó el Nacimiento de Venus?",
    answer: "Sandro Botticelli",
    options: [
      "Sandro Botticelli",
      "Pablo Picasso",
      "Caravaggio ",
      "Cláusula Monet"
    ]
  },
  {
    id: 2,
    question: "¿Quién pintó La Gioconda?",
    answer: "Leonardo Da Vinci",
    options: [
      "Leonardo Da Vinci",
      "Salvador Dalì",
      "Rembrand",
      "Amedeo Modigliani"
    ]
  },
  {
    id: 3,
    question: "¿Quién pintó la Muchacha con turbante?",
    answer: "Jan Vermeer",
    options: [
      "Jan Vermeer",
      "Frida Kahlo",
      "Piet Mondrian",
      "Sandro Botticelli"
    ]
  },
  {
    id: 4,
    question: "¿Quién pintó la Noche estrellada?",
    answer: "Vincent Van Gogh",
    options: [
      "Edvard Munch",
      "Paul Gauguin",
      "Vincent Van Gogh",
      "Frida Kahlo"
    ]
  },
  {
    id: 5,
    question: "¿Quién pintó la Guernica?",
    answer: "Pablo Picasso",
    options: [
      "Gustav Klimt",
      "Pablo Picasso",
      "Raffaello Sanzio",
      "Paul Cézanne"
    ]
  },
  {
    id: 6,
    question: "¿Quién pintó El Urlo?",
    answer: "Edvard Munch",
    options: [
      "Caravaggio",
      "Edvard Munch",
      "Salvador Dalì",
      "Claude Monet"
    ]
  },
  {
    id: 7,
    question: "¿Quién pintó El Hijo del hombre?",
    answer: "René Margritte",
    options: [
      "Caravaggio",
      "Edvard Munch",
      "Salvador Dalì",
      "René Margritte"
    ]
  },
  {
    id: 8,
    question: "¿Quién pintó El Beso?",
    answer: "Gustav Klimt",
    options: [
      "Gustav Klimt",
      "Flash Media Driver",
      "Raffaello Sanzio",
      "Paul Cézanne"
    ]
  },
  {
    id: 9,
    question: "¿Dónde está la Tour EiffeL?",
    answer: "París",
    options: [
      "Roma",
      "Madrid",
      "París",
      "Ninguno de esos"
    ]
  },
  {
    id: 10,
    question: "¿Dónde está la torre de pisa",
    answer: "Ninguno de esos",
    options: [
      "Roma",
      "Madrid",
      "París",
      "Ninguno de esos"
    ]
  },
  {
    id: 11,
    question: "¿Dónde está el Coliseo",
    answer: "Roma",
    options: [
      "Roma",
      "Madrid",
      "París",
      "Ninguno de esos"
    ]
  },
  {
    id: 12,
    question: "¿Dónde está el Big Ben",
    answer: "Londres",
    options: [
      "Roma",
      "Londres",
      "París",
      "Ninguno de esos"
    ]
  },
  {
    id: 13,
    question: "¿Dónde está la Tokyo Tower",
    answer: "Japón",
    options: [
      "Roma",
      "Londres",
      "París",
      "Japón"
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



