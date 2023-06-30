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
function sendLoginRequest() {
    let username = document.getElementById("name").value;

    if (username === "" || category === "") {
        console.log("ERROR: Not all fields are completed");
        return;
    }

    const player = {
        username,
        category,
        points: 0 // Set points to 0
    };

    fetch("http://217.182.253.177:8085/login", {
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
        .catch((error) => console.log("Error:", error));

    window.location.replace("../Quiz/html/wait.html");
}




/**
 * Function that updates the text of the desired category
 *
 * @param {*} a contains what button has been clicked
 */
function updateText(a){
    switch(a){
        case 'videojuegos':
            document.getElementById("selectionText").innerHTML = "Has seleccionado: Videojuegos";
            category = "VIDEOGAMES";
            break;
        case 'arte':
            document.getElementById("selectionText").innerHTML = "Has seleccionado: Arte";
            category = "ART";
            break;
        case 'geografia':
            document.getElementById("selectionText").innerHTML = "Has seleccionado: Geografia";
            category = "GEOGRAPHY";
            break;
        case 'alimentos':
            document.getElementById("selectionText").innerHTML = "Has seleccionado: Alimentos";
            category = "FOODS";
            break;
    }
}