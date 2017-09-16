
function randomgenerator() {
    return Math.floor((Math.random()*6)+1);
}

function showimage() {
    var x = randomgenerator();
    
    if (x==1) {
         document.getElementById("myImg").src = "meme.jpg";
    } 
    if (x==2) {
         document.getElementById("myImg").src = "meme2.jpg";
    }
        
    if (x==3) {
        document.getElementById("myImg").src = "meme3.jpg";
    }
    if (x==4) {
        document.getElementById("myImg").src = "meme4.JPG";
    }
    if (x==5) {
        document.getElementById("myImg").src = "meme5.JPG";
    }
    if (x==6) {
        document.getElementById("myImg").src = "meme6.JPG";
    }
    
    
    
}

$("#memes").on("click", showimage);

 
