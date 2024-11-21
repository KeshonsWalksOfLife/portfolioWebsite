function submitForm() {
    // Get the users input value
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const responseDiv = document.getElementById('responseMessage');

    // Check if the name and message fields need to still be filled
    if (name && message.length >= 10) {
        // Display a thank you message if both fields are filled
        responseDiv.innerHTML = '<p>Thank you, ' + name +  '! <br /> I look forward to hearing back from you!</p>';
        responseDiv.style.color =  "green";
        // Display the error message if fields are not answered
    } else if (!name && !message) {
            let errorMessage = "Please complete all the fields as required";
            responseDiv.innerHTML = '<p>' + errorMessage + '</p>'
            responseDiv.style.color = "red";
        } else {
            // If the message is not 10 characters and above
        if (message.length < 10) {
            errorMessage = "Your reply should be at least 10 characters.";
        responseDiv.innerHTML = '<p>' + errorMessage + '</p>';
        responseDiv.style.color = "red";
        }
    }
}

// This is to double check if my inner text is changing in the background

let box = document.getElementById('#box');
box.textContent = "Change";
console.log(box);