leftWristX = 0;
rightWristX = 0;
difference = 0;

function preload(){
}

function setup(){
    canvas = createCanvas(470,370);
    canvas.position(800,265)

    video = createCapture(500,500);
    video.position(150 , 50);
    video.size(500,800);
    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose' , gotPoses)
}

function modelLoaded(){
    console.log("posenet is working!!!");
}

function draw(){
    background('beige');
    textSize(difference);
    text('I Like Anime' , 80 ,90);
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = rightWristX - leftWristX;

    }
}