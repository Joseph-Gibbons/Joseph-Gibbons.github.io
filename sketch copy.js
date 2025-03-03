//

// container size
var sketchWidth = 0
var sketchHeight = 0

// pos
var pos_x = 0
var pos_y = 0
// vel
var vel_x = 2
var vel_y = -2


function setup() {
    let myCanvas = createCanvas(sketchWidth,sketchHeight);
    myCanvas.parent("sketchContainer");
    windowResized()
}

function draw() {
    stroke(255,255,255,127)
    strokeWeight(2)
    point(pos_x, pos_y)


    if (pos_y > sketchHeight || pos_y < 0) {
        vel_y *= -1
    }
    if (pos_x > sketchWidth || pos_x < 0) {
        vel_x *= -1
    }

    pos_x += vel_x;
    pos_y += vel_y;
}

function windowResized() {
    sketchWidth = document.getElementById("sketchContainer").offsetWidth;
    sketchHeight = document.getElementById("sketchContainer").offsetHeight;
    resizeCanvas(sketchWidth, sketchHeight);

    background(0)
    pos_x = 0
    pos_y = 0
}