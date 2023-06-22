
/** 
 * Create all the questions (DEPRECATED, USING DB SOON);
 * @type {*} */

var x = this.localStorage.getItem('variable');
if(this.localStorage.getItem('variable')>=1){
  window.location.replace("../../index.html");
}

let questions = [
  {
    id: 1,
    question: "What is the Full Form Of RAM?",
    answer: "Random Access Memory",
    options: [
      "Run Accept Memory",
      "Random All Memory",
      "Random Access Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the Full-Form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the Full-Form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "'DB' in computer means?",
    answer: "DataBase",
    options: [
      "Double Byte",
      "Data Block",
      "DataBase",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "What is FMD?",
    answer: "Fluorescent Multi-Layer Disc",
    options: [
      "Fluorescent Multi-Layer Disc",
      "Flash Media Driver",
      "Fast-Ethernet Measuring Device",
      "None of these"
    ]
  },
  {
    id: 6,
    question: "How many bits is a byte?",
    answer: "8",
    options: [
      "32",
      "16",
      "8",
      "64"
    ]
  },
  {
    id: 7,
    question: "A JPG stands for:",
    answer: "A format for an image file",
    options: [
      "A format for an image file",
      "A Jumper Programmed Graphic",
      "A type of hard disk",
      "A unit of measure for memory"
    ]
  },
  {
    id: 8,
    question: "Which was an early mainframe computer?",
    answer: "ENIAC",
    options: [
      "ENIAC",
      "EDVAC",
      "UNIC",
      "ABACUS"
    ]
  },
  {
    id: 9,
    question: "Main circuit board in a computer is:",
    answer: "Mother board",
    options: [
      "Harddisk",
      "Mother board",
      "Microprocessor",
      "None of these"
    ]
  },
  {
    id: 10,
    question: "ISP stands for:",
    answer: "Internet Service Provider",
    options: [
      "Internet Survey Period",
      "Integreted Service Provider",
      "Internet Security Protocol",
      "Internet Service Provider"

    ]
  },
];



let question_count = 0;
let points = 0;




// /**
//  * Shows the question in series;
//  * 
//  * @param {*} count
//  */
function show(count) {
  let [first, second, third, fourth] = questions[count].options;

  document.getElementById("quest").innerHTML = questions[count].question
  document.getElementById("first").innerHTML = first;
  document.getElementById("second").innerHTML = second;
  document.getElementById("third").innerHTML = third;
  document.getElementById("fourth").innerHTML = fourth;

  toggleActive();
}

/**
 * Function to toggle the active answer by applying a color to it;
 *
 */
function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    }
  }
}

/**
 * Function that checks if it is the last question.
 *
 */
function next() {

  if (question_count == questions.length - 1) {
    location.href = "final.html";
  }
  console.log(question_count);


  let user_answer = document.querySelector("li.option.active").innerHTML;

  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

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
  t = t <= 0 ? 45 : t - 0.05;
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



