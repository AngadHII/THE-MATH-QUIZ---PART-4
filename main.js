function add_user() {
    Math1Name = document.getElementById("Math1").value;
    Math2Name = document.getElementById("Math2").value;

    localStorage.setItem("Math1",Math1Name);
    localStorage.setItem("Math2",Math2Name);
    window.location.replace("game.html");
}

