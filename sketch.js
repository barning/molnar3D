var thePlane;
var gridCounter = 13;
var planeSize = 20
var theOffset = 5;
function setup() {
  createCanvas(800,800,WEBGL);
  thePlane = new Plane();
  for (i = 0; i < gridCounter; i++) {
    for (j = 0; j < gridCounter; j++) {
      var gridX = width/gridCounter*i;
      var gridY = height/gridCounter*j;
      thePlane.addQuad(new Quad(gridX,gridY,planeSize,random(-theOffset,theOffset)));
    }
  }
}

function draw() {
  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;
  background(220);
  translate(-width/2+planeSize/2,-height/2,0);
  thePlane.run();
  ambientLight(10);
  pointLight(200, 200, 200, locX, locY, 0);
}

function Plane() {
  // An array for all the quads
  this.quads = []; // Initialize the array
}

Plane.prototype.run = function() {
  for (var i = 0; i < this.quads.length; i++) {
    this.quads[i].run(this.quads);  // Passing the entire list of boids to each boid individually
  }
}

Plane.prototype.addQuad = function(b) {
  this.quads.push(b);
}

function Quad(x,y,size,random) {
  this.position = createVector(x,y);
  this.offsetY = random;
  this.mySize = size;
}

Quad.prototype.run = function(quads) {
  push();
  translate(this.position.x + this.mySize, this.position.y + this.mySize + this.offsetY,0);
  plane(this.mySize,this.mySize);
  pop();
}
