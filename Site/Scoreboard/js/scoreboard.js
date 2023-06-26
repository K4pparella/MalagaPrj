var scores = [
    { position: 1, player: "John", score: 100 },
    { position: 2, player: "Mike", score: 80 },
    { position: 3, player: "Sarah", score: 60 },
    { position: 4, player: "Emily", score: 40 },
    { position: 5, player: "David", score: 20 }
];

function createScoreboard() {
    var table = document.getElementById("scoreboard");
    var innerString = "<th class=\"text white\">Position</th><th class=\"text white\">Player</th><th class=\"text white\">Score</th>"
    for (var i = 0; i < scores.length; i++) {
        var row = table.insertRow(-1);
        var positionCell = row.insertCell(0);
        var playerCell = row.insertCell(1);
        var scoreCell = row.insertCell(2);

        positionCell.innerHTML = scores[i].position;
        playerCell.innerHTML = scores[i].player;
        scoreCell.innerHTML = scores[i].score;
    }
}

createScoreboard();