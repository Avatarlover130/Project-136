status = "";

function preload(){
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,500,400);
}

function start(){
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
   object_name = document.getElementById("val-of-obj-nm").value;
}

function modelLoaded(){
    console.log("Model Loaded !");
    status = true;
}