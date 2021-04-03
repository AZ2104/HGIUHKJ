class Gamestate0{
    
    constructor(){
    }

    pictures(){
        fish1 = createSprite(300,300,20,20);
        fish1.addImage(fish1Image);
        fish1.scale = 3;

        /*bgs = createSprite(300,300,20,20);
        bgs.addImage(bgsImage);
        bgs.scale = 2;*/
        
        start = createSprite(300,300,20,20);
        start.addImage(startImage);
        start.scale = 0.5;
    }

    display(){


        if(keyDown("ENTER")){
            fill("red");
            textSize(32);
            text("How to play (press space) ",300,300);

            start.destroy();
        }

        if(keyDown("space")) {
            fill("yellow");
            textSize(32);
            text("Control your avatar with your cursor (press right arrow)", 300,300);
        }

        if(keyDown("right_arrow")){
            fill("orange");
            textSize(32);
            text("Collect coins to level up or to purchase power ups (press left arrow)",300, 300);

        }

        if(keyDown("left_arrow")){
            fill("green");
            textSize(32);
            text("Collect band aids to gain more lives(press up arrow)",300, 300);
    
        }

        if(keyDown("up_arrow")){
            fill("blue");
            textSize(32);
            text("Get Playing!)",300, 300);   
        }

        
        drawSprites();
    }
}