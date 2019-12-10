function preload(){
  // put preload code here
}

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);
  
}

function draw() {

  background(0+((mouseX+mouseY)/10));
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  noStroke();
  sphere(150, 24, 24);
  torus(200, 10);
  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;
  pointLight(255, 0+mouseY, 0, locX, locY, 0);
  ambientLight(0, 0, 0+mouseX+mouseY);
  directionalLight(255, 50+mouseX, 0, 0, 1, 0);
  camera(mouseX - width/2, mouseY - height/2, 100, 0, 0, 0, 0, 1, 0);

}
