//all global scope/variables
var startBackground, startBackgroundImg;
var startButton, startButtonImg;
var car, carImg;
var raceTrack, raceTrackImg;
var GamePaused, GamePausedImg;
var restartButton, restartButtonImg;
var dashboard, dashboardImg;

function preload(){
    //loaded all images that are used in this game 
    startBackgroundImg = loadImage("Codaholic Racing (1).png");
    startButtonImg = loadImage("startbutton.png");
    carImg = loadImage("car.png");
    raceTrackImg = loadImage("racetrack.png");
    restartButtonImg = loadImage("restartbutton.png");
    dashboardImg = loadImage("dashboard.png");
}
touches = [];
function setup() {
 //created the canvas
 createCanvas(1920, 1080);
 
 //making the start background
 startBackground = createSprite(960, 540, 1000, 600);
 startBackground.addImage("startBackground", startBackgroundImg);

 //making the start button sprite
 startButton = createSprite(360, 450);
 startButton.addImage("startButton", startButtonImg);
 //scaled the start button sprite
 startButton.scale = 0.6;
}

function draw() {
 background(0);

 //if condition for restarting the game when pressed restart button
 if (mousePressedOver(restartButton)) {
     //making the start background
     startBackground = createSprite(960, 540, 1000, 600);
     startBackground.addImage("startBackground", startBackgroundImg);

     //making the start button sprite
     startButton = createSprite(360, 450);
     startButton.addImage("startButton", startButtonImg);
     //scaled the start button sprite
     startButton.scale = 0.6;
 }
 
  //if condition for start button
  if (mousePressedOver(startButton)) {
      //displaying the racetrack when pressed start button
      raceTrack = createSprite(960, 540, 1000, 800);
      raceTrack.addImage("raceTrack", raceTrackImg);
      //scaled the racetrack sprite
      raceTrack.scale = 2.5;
      //destroy start screen and start button
      startBackground.destroy;
      startButton.destroy;

      //making the restart button sprite
      restartButton = createSprite(1700, 100);
      restartButton.addImage("restartButton", restartButtonImg);
      //scaled the restart button sprite
      restartButton.scale = 0.2;

      //making the dashboard 
      dashboard = createSprite(960, 950, 500, 250);
      dashboard.addImage("dashboard", dashboardImg);
      //scaled the dashboard
      dashboard.scale = 0.6;

      //making the car sprite
      car = createSprite(200, 450);
      car.addImage("car", carImg);
      //scaled the car sprite
      car.scale = 0.2;
 }
 //if condition when pressed right arrow the velocity of the car increases and backgroud starts scrolling
 if (keyDown("right_arrow")) {
     car.velocityX = car.velocityX+1;
     console.log(car.x);
     if (car.x > 2500) {
        car.x = 10;
        car.y = 450;
        
    }
 }
 //if condition when pressed left arrow the velocity of the car increases and backgroud starts scrolling
 if (keyDown("left_arrow")) {
    car.velocityX = -35;
    console.log(car.x);
 }
 //if condition for making the car stop
 if (keyDown("h")) {
     car.velocityX = 0;
 }
 drawSprites();
}
