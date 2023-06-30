const waitTime = 2000;

// Function to redirect to another page
function redirectToPage() {
    
    window.location.href = "../html/quiz.html"; // Replace with your desired URL
}

// Wait for the specified time and then redirect
setTimeout(redirectToPage, waitTime);