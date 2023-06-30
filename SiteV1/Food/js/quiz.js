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
    question: "¿Cuál es la carne más cara del mundo?",
    answer: "Wagyu",
    options: [
      "Cerdo",
      "Sushi",
      "Pollo",
      "Wagyu"
    ]
  },
{
    id: 2,
    question: "¿Cuál es la fruta más cara del mundo?",
    answer: "Melón Yubari",
    options: [
      "Plátanos",
      "Dragon de fruta",
      "Melón Yubari",
      "Lychee"
    ]
  },
{
    id: 3,
    question: "¿Qué refresco fue el más famoso en 1892?",
    answer: "Coca Cola",
    options: [
      "Coca Cola",
      "Pepsi Cola",
      "Dr. Pepper",
      "Mountain Dew"
    ]
  },
{
    id: 4,
    question: "¿Cuál es la versión larga de la palabra Spam?",
    answer: "Jamón especiado",
    options: [
      "Jamón especial",
      "Jamón hilado",
      "Jamón especiado",
      "Jamón picante"
    ]
  },
{
    id: 5,
    question: "¿Cuál es el primer alimento en el espacio?",
    answer: "Coba",
    options: [
      "Coba",
      "Carne enlatada",
      "Huevos revueltos",
      "Hamburguesa"
    ]
  },
{
    id: 6,
    question: "La prevalencia del hambre mundial de 2014 a 2016 se redujo a :",
    answer: "11%",
    options: [
      "5%",
      "11%",
      "25%",
      "50%"
    ]
  },
{
    id: 7,
    question: "¿Cuántos millones de personas en el mundo se estima que están desnutridas?",
    answer: "795 millones",
    options: [
      "560 millones",
      "795 millones",
      "980 millones",
      "200 millones"
    ]
  },
{
    id: 8,
    question: "¿Qué país es famoso por su producción de vainilla?",
    answer: "Madagascar",
    options: [
      "Australia",
      "Italia",
      "Indonesia",
      "Madagascar"
    ]
  },
{
    id: 9,
    question: "¿Cuántos tipos de manzanas hay en el mundo?",
    answer: "7000",
    options: [
      "1000",
      "7000",
      "8300",
      "750"
    ]
  },
{
    id: 10,
    question: "¿En qué país se produjo por primera vez el tabasco?",
    answer: "Estados Unidos de América",
    options: [
      "México",
      "España",
      "India",
      "Estados Unidos de América"
    ]
  },
{
    id: 11,
    question: "¿Caboc es un queso de qué país?",
    answer: "Escocia",
    options: [
      "Escocia",
      "Italia",
      "Malasia",
      "Japón"
    ]
  },
{
    id: 12,
    question: "¿Cuál de los siguientes es un ingrediente clave en la preparación del merengue?",
    answer: "Clara de huevo",
    options: [
      "Harina",
      "Leche",
      "Clara de huevo",
      "Harina"
    ]
  },
{
    id: 13,
    question: "¿De qué país proviene el halloumi?",
    answer: "Chipre",
    options: [
      "Chipre",
      "Corea del Sur",
      "Tailandia",
      "Grecia"
    ]
  },
{
    id: 14,
    question: "¿El pollo piri piri es un plato originario de qué país?",
    answer: "Portugal",
    options: [
      "Portugal",
      "Venezuela",
      "Italia",
      "India"
    ]
  },
{
    id: 15,
    question: "La cambozola es un queso de que país?",
    answer: "Alemania",
    options: [
      "Alemania",
      "Camboya",
      "Francia",
      "Turquía"
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




