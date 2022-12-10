function preload() {

}

function setup() {
canvas = createCanvas(640,480);
canvas.position(110,250);
video = createCapture(VIDEO);
video.hide();
}

function draw() {
    image(video,160,120,320,240);
    rect(0, 60, 60, 360);
    rect(60, 0, 520, 60);
    rect(580, 60, 60, 360);
    rect(60, 420, 520, 60);
    circle(30, 30, 60);
    circle(610, 30, 60);
    circle(30, 450, 60);
    circle(610, 450, 60);
    circle(30, 30, 50);
    circle(610, 30, 50);
    circle(30, 450, 50);
    circle(610, 450, 50);
    circle(30, 30, 40);
    circle(610, 30, 40);
    circle(30, 450, 40);
    circle(610, 450, 40);
    circle(30, 30, 30);
    circle(610, 30, 30);
    circle(30, 450, 30);
    circle(610, 450, 30);
    circle(30, 30, 20);
    circle(610, 30, 20);
    circle(30, 450, 20);
    circle(610, 450, 20);

}

function take_snapshot () {
    save("your image.png");
}