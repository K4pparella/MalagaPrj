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
    question: "¿Cuál es el primer juego de plataformas?",
    answer: "Donkey Kong",
    options: [
      "Pac Man",
      "Donkey Kong",
      "Sonic",
      "Super Mario"
    ]
  },
  {
    id: 2,
    question: "¿Cuál es el primer juego FPS?",
    answer: "Maze War",
    options: [
      "Maze War",
      "Call of duty",
      "Super Mario",
      "Tekken"
    ]
  },
  {
    id: 3,
    question: "¿Cuál es el primer juego de lucha?",
    answer: "Heavyweight Champ",
    options: [
      "Mortal Kombat",
      "Heavyweight Champ",
      "Tekken",
      "Street Fighter"
    ]
  },
  {
    id: 4,
    question: "¿Qué significa NES?",
    answer: "Nintendo Entertainment System",
    options: [
      "Nintendo Environment System",
      "New Entertainment Structure",
      "New Entertainment System",
      "Nintendo Entertainment System"
    ]
  },
  {
    id: 5,
    question: "¿Qué significa un juego FPS?",
    answer: "First Person Shooter",
    options: [
      "Frame Person Shooter",
      "Flash Media Driver",
      "First Person Shooter",
      "Frame Per Second"
    ]
  },
  {
    id: 6,
    question: "¿Qué significa un juego RPG?",
    answer: "Role Playing Game",
    options: [
      "Role Playing Game",
      "Role Person Game",
      "Rules Playing Game",
      "Role Play Gaming"
    ]
  },
  {
    id: 7,
    question: "¿Quién es la protagonista de The Legend Of Zelda?",
    answer: "Link",
    options: [
      "Ganon",
      "Zelda",
      "Link",
      "Zant"
    ]
  },
  {
    id: 8,
    question: "¿Quién es el protagonista de Metal Gear Solid?",
    answer: "Solid Snake",
    options: [
      "Solid Snake",
      "Vaas Montenegro",
      "Cloud Strife",
      "Nathan Drake"
    ]
  },
  {
    id: 9,
    question: "¿Quién es el protagonista de God of War?",
    answer: "Kratos",
    options: [
      "Kratos",
      "Atreus",
      "Zeus",
      "Thor"
    ]
  },
  {
    id: 10,
    question: "¿Cuál es la primera consola portátil de Nintendo?",
    answer: "Nintendo Game Boy",
    options: [
      "Nintendo Switch",
      "Playstation Portable",
      "Nintendo Game Boy",
      "Nintendo DS"

    ]
  },
  {
    id: 11,
    question: "¿Qué consola introdujo el primer joystick?",
    answer: "Atari 2600",
    options: [
      "Magnavox Odyssey",
      "Atari 2600",
      "Atari 5200",
      "Commodore 64"

    ]
  },
  {
    id: 12,
    question: "¿Por qué se llama Nintendo 64?",
    answer: "Tenía una CPU de 64 bits.",
    options: [
      "Fue desarrollado por 64 personas.",
      "Tuvo 64 juegos",
      "Salió en 1964",
      "Tenía una CPU de 64 bits."

    ]
  },
  {
    id: 13,
    question: "¿Cuál es el primer juego de ritmo de la historia?",
    answer: "Parappa The Rapper",
    options: [
      "Guitar Hero",
      "Parappa The Rapper",
      "Samba de Amigo",
      "Dance Dance Revolution"

    ]
  },
  {
    id: 14,
    question: "¿Cuál de estos juegos no tuvo una nueva versión?",
    answer: "Uncharted Drake’s Fortune",
    options: [
      "Uncharted Drake’s Fortune",
      "Final Fantasy VII",
      "Resident Evil 2",
      "Demon’s Souls"

    ]
  },
  {
    id: 15,
    question: "¿Cuál de estos juegos tuvo una nueva versión?",
    answer: "Dead Space",
    options: [
      "Bioshock",
      "Red Dead Redemption",
      "Metal Gear Solid",
      "Dead Space"

    ]
  },
  {
    id: 13,
    question: "¿Cuál de estas consolas no se lanzó en los años 90?",
    answer: "Nintendo GameCube",
    options: [
      "Sega Saturn",
      "Playstation",
      "Nintendo GameCube",
      "Nintendo 64"

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



