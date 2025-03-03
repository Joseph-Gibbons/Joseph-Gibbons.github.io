//

// container size
var sketchWidth = 0
var sketchHeight = 0

// pos
var pos_x = 0
var pos_y = 0


function setup() {
    let myCanvas = createCanvas(sketchWidth,sketchHeight);
    myCanvas.parent("sketchContainer");
    windowResized()
}

function draw() {
    background(0,0,0,1)
    pos_x = pos_x + map(noise(frameCount * 0.05),0,1,-10,10)
    pos_y = pos_y + map(noise(frameCount * 0.05 + 1000),0,1,-10,10)

    stroke(255)
    strokeWeight(2)
    point(pos_x, pos_y)

    wrapAround()
}

function wrapAround() {
    if (pos_x < 0) {
        pos_x = sketchWidth
    }
    if (pos_x > sketchWidth) {
        pos_x = 0
    }
    if (pos_y < 0) {
        pos_y = sketchHeight
    }
    if (pos_y > sketchHeight) {
        pos_y = 0
    }
}

function windowResized() {
    sketchWidth = document.getElementById("sketchContainer").offsetWidth;
    sketchHeight = document.getElementById("sketchContainer").offsetHeight;
    resizeCanvas(sketchWidth, sketchHeight);

    background(0)
    pos_x = sketchWidth / 2
    pos_y = sketchHeight / 2
}