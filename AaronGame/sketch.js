//Creating variables,objects,characters;
var bg;
var bg13,bg2,bg3,bg4;//bg5;
var player;
var player_run , player_idle , player_jump ;
var playerl_run , playerl_idle , playerl_jump;
var ground;
var box ,box1,box2,box3;
var enemy1,enemy21,enemey22,enemy23,enemy31,enemy32,enmey41,enemy42,enmey51,enmey52,enemy71;
//var health;/
var life;
var bomb,bomb1,bomb3,bomb4,bomb5,bomb6,bomb7;
var bombb;
var heli;
var hbomb1,hbomb2,hbomb3,hbomb4,hbomb4,hbomb5,hbomb6,hbomb7;
var score ;
var points1,points2,points3,points4,points5;
var health1;
var scorepic;
var bullet;
var death;
var tank;
var rocket;
var ground2;


function preload() {
//loading Images,Animations
 playered = loadImage("sprite/prun1L.png");
 bg1 = loadImage("sprite/BG.png");
 //bg2 = loadImage("sprite/BG2.png");
 bg300kk= loadImage("sprite/BG3.png");
 bg400l = loadImage("sprite/BG4.png");
 //bg5= loadImage("sprite/BG5.png");
  player_run = loadAnimation("sprite/ss.png","sprite/nn.png","sprite/vv.png" ,"sprite/ff.png","sprite/hh.png","sprite/vv.png" );
 // player_idle = loadImage("prun1L.png");
  player_jump = loadAnimation("sprite/hjhjhj.png","sprite/hhh785t.png","sprite/uu.png","sprite/aa.png","sprite/bb.png");//"sprite/prun1L.png" );
  player1_run = loadAnimation("sprite/zz.png","sprite/cc.png","sprite/mm.png" ,"sprite/gg.png","sprite/jj.png","sprite/vv.png" );
 // player1_idle = loadImage("prun1.png");
  player1_jump = loadAnimation("sprite/pprun3.png","sprite/ssgerg.png","sprite/yy.png","sprite/ttt.png","sprite/bbb.png");//"sprite/prun1.png" );
  healthk = loadImage("sprite/health.png");
  life1 = loadImage("sprite/life1.png");
  enemy1w = loadAnimation("sprite/a1.png","sprite/a2.png","sprite/a3.png","sprite/a4.png");
  enemy2e = loadAnimation("sprite/enemy3a.png","sprite/enemy3b.png","sprite/enemy3c.png","sprite/enemy3d.png","sprite/enemy3e.png","sprite/enemy3f.png","sprite/enemy3g.png","sprite/enemy3h.png");
  enemy2u = loadAnimation("sprite/enemy3a.png","sprite/enemy3b.png","sprite/enemy3c.png","sprite/enemy3d.png","sprite/enemy3e.png","sprite/enemy3f.png","sprite/enemy3g.png","sprite/enemy3h.png");
  enemy2p = loadAnimation("sprite/enemy3a.png","sprite/enemy3b.png","sprite/enemy3c.png","sprite/enemy3d.png","sprite/enemy3e.png","sprite/enemy3f.png","sprite/enemy3g.png","sprite/enemy3h.png");
  enemy3o = loadAnimation("sprite/2a.png","sprite/2b.png","sprite/2c.png","sprite/2d.png","sprite/2e.png","sprite/2f.png","sprite/2g.png","sprite/2h.png");
  bombb = loadAnimation("sprite/b1.png","sprite/b2.png","sprite/b3.png","sprite/b4.png","sprite/b5.png","sprite/b6.png","sprite/b7.png","sprite/b8.png","sprite/b9.png","sprite/b10.png","sprite/b11.png","sprite/bb11.png");
  bomb = loadImage("sprite/bomb.png");
  helicop = loadImage("sprite/kill1.png");
  pointrr = loadImage("sprite/bank.png");
  scorepicty = loadImage("sprite/score.png");
  bulletgg = loadImage("sprite/bullet.png");
  dead = loadImage("sprite/died.jpg");
  bombrr = loadImage("sprite/hbomb.png");
  tankip = loadImage("sprite/tank1.png");
  rockety = loadImage("sprite/rocket.png");
  
  
}
function setup(){
   //creating the canvas
  createCanvas(1200,450);
  //creating a player var
   player = createSprite(200,358,20,20);
   player.addAnimation("running",player_run);
   player.scale = 0.7;
   //creating background;
   bg = createSprite(600,200,20,20);
   bg.addImage("background",bg300kk);
   bg.scale = 1;
  //creating a ground
   ground =createSprite(600,400,1200,10);
   ground.visible = false;
   ground1 =createSprite(600,380,1200,10);
  // creating some dummy variable for the transition between two levels
   box = createSprite(1205,300,3,600);
   box1 = createSprite(1210,300,3,600);
   box2 = createSprite(1215,300,3,600);
   box3 = createSprite(1220,300,3,600);
   // creating some enemy, soldiers
   enemy1 = createSprite(500,358,50,50);
   enemy1.addAnimation("kill",enemy1w);
   enemy21 = createSprite(800,358,50,50);
   enemy21.addAnimation("kill",enemy2e);
   enemy21.scale = 0.73;
   enemy22 = createSprite(500,500,20,20);
   enemy22.addAnimation("kill",enemy2u);
   enemy22.scale = 0.73;
   enemy23 = createSprite(300,500,20,20);
   enemy23.addAnimation("kill",enemy2p);
   enemy23.scale = 0.73;
   enemy71 = createSprite(1050,358,20,20);
   enemy71.addAnimation("kill",enemy2p);
   enemy71.scale = 0.73;
  // enemy2.visible = false;
   enemy31 = createSprite(750,500,20,20);
   enemy31.addAnimation("enemyyu",enemy3o);
   enemy31.scale = 1.2;
   enemy32 = createSprite(500,500,20,20);
   enemy32.addAnimation("enemyyu",enemy3o);
   enemy32.scale = 1.2;
   //enemy3.visible = false;
   enemy41 = createSprite(650,500,20,20);
   enemy41.addAnimation("kill",enemy1w);
   enemy41.scale =0.88;
   //enemy4.visible = false;
   enemy5 = createSprite(900,500,20,20);
   //enemy5.visible = false;
   //health pic
   health = createSprite(400,30,20,20);
   health.scale = 1;
   health.addImage("healthf",healthk);
   //creating a life text , variable
   life = createSprite(150,30,20,20);
  life.scale = 0.7;
   life.addAnimation("lifed",life1);
   //creating mines
   bomb1 = createSprite(400,381,10,10);
   bomb1.addAnimation("bombff",bomb);
   bomb1.scale = 1;
   bomb2 = createSprite(600,381,10,10);
   bomb2.addAnimation("bombff",bomb);
   bomb2.scale = 1;
   bomb3 = createSprite(1000,381,10,10);
   bomb3.addAnimation("bombff",bomb);
   bomb3.scale = 1;
   bomb4 = createSprite(250,100,10,10);
   bomb4.addAnimation("bombff",bomb);
   bomb4.scale = 1;
   bomb4.visible = false;
   bomb5= createSprite(400,100,10,10);
   bomb5.addAnimation("bombff",bomb);
   bomb5.scale = 1;
   bomb5.visible = false;
   bomb6= createSprite(1000,100,10,10);
   bomb6.addAnimation("bombff",bomb);
   bomb6.scale = 1;
   bomb6.visible = false;
   // creating a heli
   heli = createSprite(1100,100,20,20);
   heli.addImage("heliwork",helicop);
   heli.scale= 1.2;
   // creating some bomb dropped by heli
   hbomb1 =  createSprite(1000,100,20,20);
   hbomb1.scale = 1.1;
   hbomb1.visible = false;
   hbomb1.addImage("bombomb",bombrr);
   hbomb2 =  createSprite(850,100,20,20);
   hbomb2.scale = 1.1;
   hbomb2.visible = false;
   hbomb2.addImage("bombomb",bombrr);
   hbomb3 =  createSprite(700,100,20,20);
   hbomb3.scale = 1.1;
   hbomb3.visible = false;
   hbomb3.addImage("bombomb",bombrr);
   hbomb4 =  createSprite(550,100,20,20);
   hbomb4scale = 1.1;
   hbomb4.visible = false;
   hbomb4.addImage("bombomb",bombrr);
   hbomb5 =  createSprite(400,100,20,20);
   hbomb5.scale = 1.1;
   hbomb5.visible = false;
   hbomb5.addImage("bombomb",bombrr);
   hbomb6 =  createSprite(250,100,20,20);
   hbomb6.scale = 1.1;
   hbomb6.visible = false;
   hbomb6.addImage("bombomb",bombrr);
   



   //creating the score count
   score = createSprite(50,60,20,20);
   score = 0;
   //creating a health bar
   health1 = createSprite(150,100,20,20);
   health1 = 100;
   //creating money , points 
   points1 = createSprite(250,380,20,20);
   points1.addImage("money",pointrr);
   points2 = createSprite(700,380,20,20);
   points2.addImage("money",pointrr);
   points3 = createSprite(200,500,20,20);
   points3.visible = false; 
   points3.addImage("money",pointrr);
   points4 = createSprite(600,500,20,20);
   points4.visible = false;
   points4.addImage("money",pointrr);
   points5 = createSprite(200,500,20,20);
   points5.visible = false;
   points5.addImage("money",pointrr);
   // score pic image
   scorepic = createSprite(80,115,20,20);
   scorepic.scale = 0.4;
   scorepic.addImage("picvvvv",scorepicty);
   //creating a bullet var
   bullet = createSprite(200,500,20,20);//345
   bullet.scale = 0.5;
   bullet.addImage("shootj",bulletgg);
   //creating a death page
   death = createSprite(600,250,20,20);
   death.scale = 1;
   death.addImage("ggoo",dead);
   death.visible = false;
   
   tank = createSprite(900,100,20,20);//345
   tank.scale = 1.3;
   tank.addImage("uuuppp",tankip);
   tank.visible = false;
   
   rocket = createSprite(900,100,20,20);
   rocket.scale = 1;
   rocket.addImage("gamez",rockety);

   ground2 = createSprite(400,450,10000,5);
   

}

function draw(){
    background(255);
    //Adding a condition and velocity to the player so that he can run
    if(keyDown('RIGHT_ARROW') ){
     // player.addAnimation("running",player_run);
       player.velocityX = +10;//4
    }
    //adding a condition to the player thatwhne the arrow is not pressed then the velocity is 0
    if(keyWentUp('RIGHT_ARROW') ){
     // player.addAnimation("player idle",player_idle);
      player.velocityX = 0;
    }
    
    //Adding a condition so that the player and jump
    if(keyDown('UP_ARROW' ) && player.velocityY === 0){
      player.addAnimation("jump",player_jump);
      player.changeAnimation("jump");
       player.velocityY = -15;
    }
    player.velocityY = player.velocityY+0.8
    player.collide(ground);
   player.changeAnimation("run");
    
   //adding a condition so that when the player touches the bomb it decreases
   //the health of the player when it blasts
  if( player.isTouching(bomb1)  ){
     bomb1.addAnimation("bomb",bombb);
     bomb1.changeAnimation("bomb");
     bomb1.lifetime = 20;
     
  }
  if (bomb1.lifetime < 10 & player.isTouching(bomb1)){
   health1 = health1-5;
  }
  if( player.isTouching(bomb2) ){
    bomb2.addAnimation("bomb",bombb);
    bomb2.changeAnimation("bomb");
    bomb2.lifetime = 30;
    health1 = health1-5;
 }
 if( player.isTouching(bomb3) ){
  bomb3.addAnimation("bomb",bombb);
  bomb3.changeAnimation("bomb");
  bomb3.lifetime = 30;
  health1 = health1-5;
}
if( player.isTouching(bomb4) ){
  bomb4.addAnimation("bomb",bombb);
  bomb4.changeAnimation("bomb");
  bomb4.lifetime = 30;
  health1 = health1-5;
}
if( player.isTouching(bomb5) ){
  bomb5.addAnimation("bomb",bombb);
  bomb5.changeAnimation("bomb");
  bomb5.lifetime = 30;
  health1 = health1-5;
}
if( player.isTouching(bomb6) ){
  bomb6.addAnimation("bomb",bombb);
  bomb6.changeAnimation("bomb");
  bomb6.lifetime = 30;
  health1 = health1-5;
}
//Adding a condition so thatthe player can shoot
  if(keyDown("a")){
    bullet.x = player.x;
    bullet.y = 348;
    bullet.velocityX = 8;
  }

  player.collide(tank);
  if(keyDown("s")){

    rocket.changeImage("gamez",rockety);
    rocket.x = tank.x;
    rocket.y = tank.y;
    rocket.velocityX = -7;
    rocket.velocityY = 1;
  }
  rocket.collide(ground2);

  if(rocket.isTouching(ground)){
    rocket.addAnimation("bomb",bombb);
    rocket.changeAnimation("bomb");
    
    rocket.velocityX = 0;
    rocket.velocityY = 0;
  }
  //Adding velocity to the player
  heli.velocityX = -15;

  //creating a condition that when the player health is 0 he dies and 
  //a new background appears
  if(health1 === 0 || health1 < 0 ){
   death.visible = true;
   player.destroy();
   ground.destroy();
   box.destroy();
   box1.destroy();
   box2.destroy();
   box3.destroy();
   enemy1.destroy();
   enemy21.destroy();
   enemy23.destroy();
   enemy31.destroy();
   enemy32.destroy();
   enemy41.destroy();
   tank.destroy();
   enemy71.destroy();
   life.destroy();
  fill("black");
  }

  
 
  
//creating a condition so that the heli can drop the bomb
  if(heli.x < 1000){
     hbomb1.velocityY = 13;
     hbomb1.visible = true;
  }
  if(heli.x < 850){
    hbomb2.velocityY = 13;
    hbomb2.visible = true;
 }
 if(heli.x < 700){
  hbomb3.velocityY = 13;
  hbomb3.visible = true;
}
if(heli.x < 550){
  hbomb4.velocityY = 13;
  hbomb4.visible = true;
}
if(heli.x < 400){
 hbomb5.velocityY = 13;
 hbomb5.visible = true;
}
if(heli.x < 250){
hbomb6.velocityY = 13;
hbomb6.visible = true;
}



//Creating a condition to change the aniation when the helibomb touches the ground it blasts
  if( hbomb1.isTouching(ground1) ){
    hbomb1.addAnimation("bomb",bombb);
     hbomb1.changeAnimation("bomb");
     hbomb1.lifetime = 30;
     hbomb1.collide(ground);

  }
  if( hbomb2.isTouching(ground1) ){
    hbomb2.addAnimation("bomb",bombb);
     hbomb2.changeAnimation("bomb");
     hbomb2.lifetime = 30;
     hbomb2.collide(ground);

  }
  if( hbomb3.isTouching(ground1) ){
    hbomb3.addAnimation("bomb",bombb);
     hbomb3.changeAnimation("bomb");
     hbomb3.lifetime = 30;
     hbomb3.collide(ground);
}
if( hbomb4.isTouching(ground1) ){
  hbomb4.addAnimation("bomb",bombb);
   hbomb4.changeAnimation("bomb");
   hbomb4.lifetime = 30;
   hbomb4.collide(ground);

}
if( hbomb5.isTouching(ground1) ){
  hbomb5.addAnimation("bomb",bombb);
   hbomb5.changeAnimation("bomb");
   hbomb5.lifetime = 30;
   hbomb5.collide(ground);

}
if( hbomb6.isTouching(ground1) ){
  hbomb6.addAnimation("bomb",bombb);
   hbomb6.changeAnimation("bomb");
   hbomb6.lifetime = 30;
   hbomb6.collide(ground);
}
//if( hbomb7.isTouching(ground1) ){
 // hbomb7.addAnimation("bomb",bombb);
  // hbomb7.changeAnimation("bomb");
 //  hbomb7.lifetime = 30;
  // hbomb7.collide(ground);
//}

//creating a condition so that the heli bomb can hit the player
 if( hbomb1.lifetime <20 & player.isTouching(hbomb1) ){
  health1 = health1-5;
 }
 if( hbomb2.lifetime <20 & player.isTouching(hbomb2) ){
  health1= health1-5;
 }
 if( hbomb3.lifetime <20 & player.isTouching(hbomb3) ){
  health1 = health1-5;
 }
 if( hbomb4.lifetime <20 & player.isTouching(hbomb4) ){
  health1 = health1-5;
 }
 if( hbomb5.lifetime <20 & player.isTouching(hbomb5) ){
  health1= health1-5;
 }
 if( hbomb6.lifetime <20 & player.isTouching(hbomb6) ){
  health1 = health1-5;
 }



  //Assigning the depth to all the variables so that they appear in front of the background
  death.depth = death.depth + 2;
  death.depth = player.depth;
  bullet.depth = player.depth;
  scorepic.depth = player.depth;
  health1.depth = player.depth;
  text.depth = player.depth;
  points1.depth = player.depth;
  points2.depth = player.depth;
  points3.depth = player.depth;
  points4.depth = player.depth;
  points5.depth = player.depth;
   hbomb1.depth = player.depth;
   hbomb2.depth = player.depth;
   hbomb3.depth = player.depth;
   hbomb4.depth = player.depth;
   hbomb5.depth = player.depth;
   hbomb6.depth = player.depth;
   bomb1.depth = player.depth;
   bomb2.depth = player.depth;
   bomb3.depth = player.depth;
   bomb4.depth = player.depth;
   bomb5.depth = player.depth;
   bomb6.depth = player.depth;
   life.depth = player.depth;
   health.depth = player.depth;
   bg.depth = player.depth;
   player.depth = player.depth+1;
   box.depth = player.depth;
   enemy1.depth = player.depth;
   enemy21.depth = player.depth;
   enemy22.depth = player.depth;
   enemy23.depth = player.depth;
   enemy31.depth = player.depth;
   enemy32.depth = player.depth;
   enemy41.depth = player.depth;
   enemy5.depth = player.depth;
   enemy71.depth = player.depth;
   heli.depth = player.depth;
   tank.depth = player.depth;
   rocket.depth = player.depth;
   
   
  // console.log(bg.depth);
   //console.log(player.depth);
   //Creating a transition between levels in the game
   if(player.isTouching(box)){
    bg.addImage("cccc",bg1);
    bg.changeImage("cccc")
    enemy1.destroy();
    player.x = 50;
    box.destroy();
    points1.destroy();
    points2.destroy();
    enemy22.y = 358;
    enemy31.y = 358;
    points3.visible = true;
    points3.y = 380;
    points4.visible = true;
    points4.y = 380;
    enemy21.destroy();
    enemy71.destroy();
    bomb1.destroy();
    bomb2.destroy();
    bomb3.destroy();
    hbomb1.destroy();
    hbomb2.destroy();
    hbomb3.destroy();
    hbomb4.destroy();
    hbomb5.destroy();
    hbomb6.destroy();
    tank.y = 345;
    tank.visible = true;
    bomb4.y = 381;
    bomb4.visible = true;
    bomb5.y = 381;
    bomb5.visible = true;
    bomb6.y = 381;
   bomb6.visible = true;
   }
   if(player.isTouching(box1)){
      bg.addImage("dddd",bg400l);
      bg.changeImage("dddd")
      player.x = 50;
      enemy22.destroy();
      enemy23.y = 358;
      enemy31.y = 358;
      enemy41.y = 358;
      tank.destroy();
      bomb4.destroy();
      bomb5.destroy();
      bomb6.destroy();
      points3.destroy();
      points4.destroy();
      points5.visible = true;
      points5.y = 380;

     }
     if(player.isTouching(box2)){
      bg.addImage("ffff",bg300kk);
      bg.changeImage("ffff")
      player.x = 50;
      enemy31.destroy();
      enemy4.y = 358;
     }
     if(player.isTouching(box3)){
      bg.addImage("iiii",bg4);
      bg.changeImage("iiii")
      player.x = 50;
      enemy4.destroy();
     }

     //Creating a condition so that the player health is decreased when the player touches the enemy
     if(player.isTouching(enemy1)|| player.isTouching(enemy21)|| player.isTouching(enemy31)||  player.isTouching(enemy41)||player.isTouching(enemy5) || player.isTouching(enemy71)){
     health1 = health1-20;
      
     }

    
     //creating a condition to kill enemys
     if(bullet.isTouching(enemy1)){
       enemy1.lifetime = 5;
    
    }
    if(bullet.isTouching(enemy21)){
     enemy21.lifetime = 5;
    }
    if(bullet.isTouching(enemy22)){
    enemy22.lifetime = 5;
    }
   if(bullet.isTouching(enemy23)){
  enemy23.lifetime = 5;
    }
   if(bullet.isTouching(enemy31)){
     enemy31.lifetime = 5;
   }
   if(bullet.isTouching(enemy32)){
    enemy32.lifetime = 5;
  }
  if(bullet.isTouching(enemy41)){
    enemy41.lifetime = 5;
  }  
  if(bullet.isTouching(enemy71)){
    enemy71.lifetime = 5;
  }  
  
  
    //Creating a condition so that the player can earn points
     if(player.isTouching(points1)){
      score = score + 10 ;
      points1.destroy();
    }
    if(player.isTouching(points2)){
      score = score + 10 ;
      points2.destroy();
    }
    if(player.isTouching(points3)){
      score = score + 10 ;
      points3.destroy();
    }
    if(player.isTouching(points4)){
      score = score + 10 ;
      points4.destroy();
    }
    if(player.isTouching(points5)){
      score = score + 10 ;
      points5.destroy();
    }



//display the sprites on the screen
   drawSprites();
   fill("grey");
   textFont("Georgia");
   strokeWeight(2.5);
   stroke("grey");
   textSize(20);
    text("Move the Player with the arrow keys",800,40);
    text("Mines Danger",800,70);
    text("Escape from the soldier or assault them",800,100);
    text("Best of luck Soldier!!!",800,130);
   
  
  
   //Changing the color , stroke color , text size and font of the sprites
   fill("red");
 textFont("Arial");
       strokeWeight(2.5);
       stroke("red");
      
  textSize(24);
  //creating a score counter
  text(" " + score, 145, 124);
  textSize(30);
  //creating a life counter
  text("LIFE : " + health1, 30, 80);      
 
}
