function preload(){
    moustache_and_beard=loadImage("Screenshot 2021-06-10 193940");
}
function setup(){
    canvas.createCanvas();
    canvas.center();
    video.createVideo(VIDEO);
    video.size(200,200);
    video.hide();
}
function draw(){
    image(video,0,0,500,500)
}