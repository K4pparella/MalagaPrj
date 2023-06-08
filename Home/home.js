let category = null;

/**
 *  Function that sends a post request that contains: 
 *  userId: the username of the user
 *  category: the quiz category
 *  to the DataBase
 *
 * @return {*} 
 */
async function sendPostRequest(){
    if(document.getElementById("name").value == "" || category == null){
        console.log("ERROR, NOT ALL FIELDS ARE COMPLETED");
        return;
    }
    fetch("127.0.0.1:8080", {
        method: "POST",
        body: JSON.stringify({
          userId: document.getElementById("name").value,
          category: category
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      
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