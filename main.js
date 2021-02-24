canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
racingcar_width=100;
racingcar_height=90;
background_image="road.jpg";
racingcar_image="racing car.jpg"
racingcar_x=10;
racingcar_y=10;
function add(){
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;
racingcar_imgTag=new Image();
racingcar_imgTag.onload=uploadRacingcar;
racingcar_imgTag.src=background_image;

}
function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
ctx.drawImage(racingcar_imgTag,racingcar_x,racingcar_y,racingcar_width,racingcar_height);

}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keydown(e);
console.log(keyPressed);
if(keyPressed=="38"){
up();
console.log("up");


}
if(keyPressed=="40"){
    down();
    console.log("down");
    
    
    }
    if(keyPressed=="37"){
        left();
        console.log("left");
        
        
        }
        if(keyPressed=="39"){
            right();
            console.log("right");
            
            
            }
    

}