var isGameOver = false;
var player
var playerImage;
var enemy
var enemyImage;
var backgroundImage;

function preload(){
    playerImage = loadImage("pikachu1.png");
    enemyImage = loadImage("pokeball1.png");
    backgroundImage = loadImage("pkm_grass.jpg"); 
    
}
function setup() {
    
    createCanvas(1920,1080);
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0 );
    player.addImage(playerImage);
    enemy = createSprite (width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0; 
    
}

function draw() {
  
    background(backgroundImage);
     
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width-(playerImage.height/2))) {
        player.position.x = player.position.x + 1;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.height/2)) {
        player.position.x = player.position.x - 1; 
    }
    
    enemy.position.y = enemy.position.y + 3;
    
    if (enemy.position.y > height) {
        enemy.position.y = 0;
 
       enemy.position.x = random(5, width-5);
    }
    
    drawSprites(); 
    
    if (isGameOver) {
        gameOver();
    } else {
        if (player.overlap(enemy)) {
            isGameOver = true;
        }
        
    }

    
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over", width/2, height/2);
    text("Click anywhere to try again", width/2, 3*height/4);
}

function mouseClicked() {
    if (isGameOver) {
    isGameOver = false;
    player.position.x = width/2; 
    player.position.y = height-(playerImage.height/2);
    enemy.position.x = width/2;
    enemy.position.y = 0;
    }
}