var sound;

function randomgenerator() {
    return Math.floor((Math.random()*3)+1);
}

function playsound() {
    var x = randomgenerator();
    
    if (sound) {
        sound.pause();
    } else {
        sound = new Audio();
    }
    
    if (x==1) {
        sound.src = "airhorn.mp3";
    } 
    if (x==2) {
        sound.src = "illuminati2.mp3"
    }
        
    if (x==3) {
        sound.src ="sanic.mp3"
    }
    
    sound.play();
}

$("#memes").on("click", playsound);

 
