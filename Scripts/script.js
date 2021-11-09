function displayInput() {
    document.getElementById("name-input").style.display = "block";
    console.log(document.getElementById("name-input").style.display)
}

document.onkeydown = function(e) {
    // console.log(e);
    if (document.getElementById("name-input").style.display === "block" && e.code === 'Enter') {
        document.getElementById("user-name").innerText = document.getElementById("name-input").value;
        document.getElementById("name-input").style.display="none";
    }
}

function acceptConnection(element) {
    document.getElementById("connection" + element.className).remove();
    // console.log(element.className);
    document.getElementById("connection-requests-number").innerText--;
    document.getElementById("your-connections-number").innerText++;
}

function declineConnection(element) {
    // console.log(element.className)
    document.getElementById("connection" + element.className).remove();
    document.getElementById("connection-requests-number").innerText--;
}

