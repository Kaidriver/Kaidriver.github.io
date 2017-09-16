
function randomgenerator() {
    return Math.floor((Math.random()*3)+1);
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
    
    
}

$("#memes").on("click", showimage);

 
