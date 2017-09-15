function playairhorn() {
    var airhorn = new Audio("airhorn.mp3");
    airhorn.play();
}

$("#memes").on("click", playairhorn);
