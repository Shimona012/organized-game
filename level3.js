function level3(){
    console.log("level 3");
    background(bg2);
    bb2.visible=false;
    bb3.visible=false;
    bbees.visible=false;
    Minu.visible=false;
    redG.destroyEach();
    pinkG.destroyEach();
    blueG.destroyEach();
    yellowG.destroyEach();
    bb2.velocityX=0;
    bb3.velocityX=0;
    bbees.velocityX=0;
    fill("black");
    textSize(25);
    text("LEVEL 3",400,200);
}