var scores = [
    { player: "John", score: 80 },
    { player: "Mike", score: 80 },
    { player: "Sarah", score: 600 },
    { player: "Emily", score: 40 },
    { player: "David", score: 100 }
];

function sort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j].score < arr[j + 1].score) {

                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}


function createScoreboard() {
    var table = document.getElementById("scoreboard");
    sort(scores);
    for (var i = 0; i < scores.length; i++) {
        var row = table.insertRow(-1);
        var positionCell = row.insertCell(0);
        var playerCell = row.insertCell(1);
        var scoreCell = row.insertCell(2);

        positionCell.innerHTML = i + 1;
        playerCell.innerHTML = scores[i].player;
        scoreCell.innerHTML = scores[i].score;
    }
}


window.onload = function () {
    fetch('')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('the data', data)
        })
};

createScoreboard();