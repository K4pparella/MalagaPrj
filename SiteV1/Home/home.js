let category = null;
this.localStorage.setItem('variable', 0);
/**
 *  Function that sends a post request that contains: 
 *  userId: the username of the user
 *  category: the quiz category
 *  to the DataBase
 *
 * @return {*} 
 */
function sendPostRequest() {
    let username = document.getElementById("name").value;
    if (username === "" || category === "") {
        console.log("ERROR: Not all fields are completed");
        return;
    }

    const player = {
        username,
        category
    };

    /* fetch("http://localhost:8080/api/login", {
        method: "POST",
        body: JSON.stringify(player),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("USERNAME ALREADY EXISTS");
            }
        })
        .then((json) => {
            console.log("Success:", json);
            // Handle success response here
        })
        .catch((error) => console.log("Error:", error)); */
        switch(category) {
            case "VIDEOGAMES":
                window.location.replace("./Video/html/quiz.html");
            break;
            
            case "GEOGRAPHY":
                window.location.replace("./Geo/html/quiz.html");
            break;

            case "ART":
                window.location.replace("./Art/html/quiz.html");
            break;

            case "FOODS":
                window.location.replace("./Food/html/quiz.html");
            break;
        }
    }
        
/**
 * Function that updates the text of the desired category
 *
 * @param {*} a contains what button has been clicked
 */
function updateText(a){
    switch(a){
        case 'VIDEOJUEGOS':
            document.getElementById("selectionText").innerHTML = "Has seleccionado: Videojuegos";
            category = "VIDEOGAMES";
            break;
        case 'ARTE':
            document.getElementById("selectionText").innerHTML = "Has seleccionado: Arte";
            category = "ART";
            break;
        case 'GEOGRAFIA':
            document.getElementById("selectionText").innerHTML = "Has seleccionado: Geografia";
            category = "GEOGRAPHY";
            break;
        case 'ALIMENTOS':
            document.getElementById("selectionText").innerHTML = "Has seleccionado: Alimentos";
            category = "FOODS";
            break;
    }
}