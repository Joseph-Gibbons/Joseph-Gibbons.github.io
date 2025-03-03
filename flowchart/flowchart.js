//

// container size
var sketchWidth = 0
var sketchHeight = 0

// data
let flowData;
let flowLayout = []

function preload() {
    flowData = loadJSON('flowchart.JSON');
}

function setup() {
    let myCanvas = createCanvas(sketchWidth, sketchHeight);
    myCanvas.parent("sketchContainer");
    windowResized()
}

function draw() {
    point(20, 20)
}

function drawNode(){

}

function windowResized() {
    sketchWidth = document.getElementById("sketchContainer").offsetWidth;
    sketchHeight = document.getElementById("sketchContainer").offsetHeight;
    resizeCanvas(sketchWidth, sketchHeight);

    background(220)
}