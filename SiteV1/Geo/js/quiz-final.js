let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");

document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;

function home() {
    window.location.replace("../../index.html");
};

function answer() {
    window.location.replace("../html/answer.html");
};