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
    const name = document.getElementById("name").value;
    const email = category;
    const age = 12;

    if (name === "" || email === "" || age === "") {
        console.log("ERROR: Not all fields are completed");
        return;
    }

    const customer = {
        name: name,
        email: email,
        age: parseInt(age)
    };

    fetch("http://localhost:8080/api/customers", {
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
            category = "videojuegos";
            break;
        case 'arte':
            document.getElementById("selectionText").innerHTML = "Has seleccionado: Arte";
            category = "arte";
            break;
        case 'geografia':
            document.getElementById("selectionText").innerHTML = "Has seleccionado: Geografia";
            category = "geografia";
            break;
        case 'alimentos':
            document.getElementById("selectionText").innerHTML = "Has seleccionado: Alimentos";
            category = "alimentos";
            break;
    }
}