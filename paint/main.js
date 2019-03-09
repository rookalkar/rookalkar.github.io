var ball   = document.getElementById("ball");
var garden = document.getElementById("garden");
var output = document.getElementById("output");

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

var old_x = 100;
var new_x = 0;
var old_y = 100;
var new_y = 0;

function handleOrientation(event) {
  var x = event.beta;  // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]

  output.innerHTML  = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  // To make computation easier we shift the range of
  // x and y to [0,180]
  x += 90;
  y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  old_x = new_x
  old_y = new_y

  new_x = maxX*x/180 - 10
  new_y = maxY*y/180 - 10

  ball.setAttribute("cx",new_x)
  ball.setAttribute("cy",new_y)
}

function drawLine(x1, x2, y1, y2) {
  console.log("line")
  var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
  newLine.setAttribute('x1',x1);
  newLine.setAttribute('y1',y1);
  newLine.setAttribute('x2',x2);
  newLine.setAttribute('y2',y2);
  newLine.setAttribute('stroke',"black");
  // newLine.setAttribute("opacity", 0.5);
  // newLine.setAttribute("stroke-width", 0.5);
  garden.append(newLine);
}

function test(){
  console.log("hello")
}

window.addEventListener('deviceorientation', handleOrientation);
setInterval( function() { drawLine(old_x, new_x, old_y, new_y); }, 500 );
