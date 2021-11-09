// Display text input to change name
function displayInput() {
    document.getElementById("name-input").style.display = "block";
    console.log(document.getElementById("name-input").style.display)
}

// After text input is displayed and text is entered (or not) and enter is pressed User name changes to text input
document.onkeydown = function(e) {
    // console.log(e);
    if (document.getElementById("name-input").style.display === "block" && e.code === 'Enter') {
        document.getElementById("user-name").innerText = document.getElementById("name-input").value;
        document.getElementById("name-input").style.display="none";
    }
}

// Accepts connection, removes element, decrements connection requests number by one, and increments your connections number by one
function acceptConnection(element) {
    document.getElementById("connection" + element.className).remove();
    // console.log(element.className);
    document.getElementById("connection-requests-number").innerText--;
    document.getElementById("your-connections-number").innerText++;
}

// Declines connection, removes element, and decrements connection requests number by one
function declineConnection(element) {
    // console.log(element.className)
    document.getElementById("connection" + element.className).remove();
    document.getElementById("connection-requests-number").innerText--;
}

