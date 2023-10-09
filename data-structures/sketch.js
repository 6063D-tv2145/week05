let xPos = [0,0,0];
let yPos = [150,250,350];
let xVel = [2,4,3];
let cDiam = [40,40,40];

let numCircles = [10]

function setup() {
  createCanvas(800, 600);
  for (let i=0;i<10; i++){
    xPos.push(0)
    yPos.push(random(30, height -30))
    xVel.push (randm(2,5));
    cDiam.push ((random 20, 70))

    )
  }
}

function draw() {
  background("lightblue");
  fill(220, 10, 100);

  for(let i = 0; i<3 ; i+=1){
    ellipse(xPos[i], yPos[i], cDiam[i], cDiam[i]);
    xPos[i] = xPos[i] + xVel [i];

  }

  //updatepos
  xPos[i] = xPos[i] + xVel[i];

  if (xpos[i] > width + cDiam[i]){
    cDiam[i] = random(20,75);
    xPos[i] = 0-cDiam[i];
  }
}
