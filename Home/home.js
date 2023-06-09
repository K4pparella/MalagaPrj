let category = null;

/**
 *  Function that sends a post request that contains: 
 *  userId: the username of the user
 *  category: the quiz category
 *  to the DataBase
 *
 * @return {*} 
 */
function sendPostRequest() {
    const username = document.getElementById("username").value;
    const category = category;

    if (username === "" || category === "") {
        console.log("ERROR: Not all fields are completed");
        return;
    }

    const player = {
        username = name;
        category = category;
    };

    fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify(customer),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
        })
        .then((json) => {
            console.log("Success:", json);
            // Handle success response here
        })
        .catch((error) => console.log("Error:", error));
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
            category = "videogames";
            break;
        case 'arte':
            document.getElementById("selectionText").innerHTML = "Has seleccionado: Arte";
            category = "art";
            break;
        case 'geografia':
            document.getElementById("selectionText").innerHTML = "Has seleccionado: Geografia";
            category = "geography";
            break;
        case 'alimentos':
            document.getElementById("selectionText").innerHTML = "Has seleccionado: Alimentos";
            category = "foods";
            break;
    }
}