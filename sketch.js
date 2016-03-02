var gridCounter = 13;
var planeSize = 20
function setup() {
  createCanvas(800,800,WEBGL);
}

function draw() {
  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;
  background(220);
  ambientLight(10);
  translate(-width/2,-height/2,0);
  for (i = 0; i < gridCounter; i++) {
    for (j = 0; j < gridCounter; j++) {
      var gridX = width/gridCounter*i;
      var gridY = height/gridCounter*j;
      push();
      translate(gridX+planeSize, gridY+planeSize,0);
      plane(planeSize,planeSize);
      pop();
    }
  }
  pointLight(200, 200, 200, locX, locY, 0);
}