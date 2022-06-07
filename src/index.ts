// import * as _ from 'lodash';
// import {Bird} from './Bird';
// import {Column} from './Column';
// import {Score} from './Score';
// function component() {
//   const element = document.createElement('div');

//   element.innerHTML = 
//   `<div id="container" style="width:100%;height:900px">
//     <div style="margin: auto; width:800px; height:900px;">
//         <canvas  id="myChart" width=800px height=900px></canvas>   
//     </div>
//    </div>`;
    
//   return element;
// }

// document.body.appendChild(component());
// const canvas = document.getElementsByTagName('canvas')[0];
// const ctx = canvas.getContext('2d');

// var WINDOWWIDTH  = 800;
// var WINDOWHEIGHT = 900;
// var bg = new Image(600,700);
// bg.src = '../public/image/bg.png';
// var fg = new Image(600,200);
// fg.src = '../public/image/fg.png';
// var column = new Image();
// column.src = '../public/image/column.png';
// var rank = new Image();
// rank.src = '../public/image/best.png';
// function draw1(){    
//     ctx.drawImage(bg,0,0,800,800);
//     ctx.drawImage(fg,0,800,800,100);
// }


// function rectCollision(rect1 : any, rect2: any){
//     if (rect1[0] <= rect2[0]+rect2[2] && rect2[0] <= rect1[0]+rect1[2] && rect1[1] <= rect2[1]+rect2[3] && rect2[1] <= rect1[1]+rect1[3])
//         return true
//     return false
// }
// function isGameOver(bird : any, columns: any){
//     for (var i = 0 ; i < 3 ; i++){
//         var rectBird = [bird.x, bird.y, bird.width, bird.height]
//         var a =-WINDOWHEIGHT + columns.arrray[i][1];
//         var b = columns.arrray[i][1];
//         var rectColumn1 = [ columns.arrray[i][0], a, columns.width, columns.height]
//         var rectColumn2 = [ columns.arrray[i][0], b+ columns.blank, columns.width, columns.height]
//         if (rectCollision(rectBird, rectColumn1) == true || rectCollision(rectBird, rectColumn2) == true)
//             return true
//     }
//     if (bird.y + bird.height < 0 || bird.y + bird.height > WINDOWHEIGHT)
//         return true
//     return false
// }
// function update(time : any, delta : any){
//   bird12.update();
//   col.update();
//   score.update(bird12,col,rectCollision);

// }
// var flagPlaygame = true;  // play first game => flagPlaygame = true; FlagGameover = false
// var flagGameover = false; // gameover = true
// const buttonPlay = new Image();
// const silverRank = new Image();
// const goldRank = new Image();
// const bronzeRank = new Image();
// const buttonHighscore = new Image();
// const gameoverText = new Image();
// const startgameText = new Image();
// silverRank.src = '../public/image/silverRank.png';
// goldRank.src = '../public/image/goldRank.png';
// bronzeRank.src = '../public/image/bronzeRank.png';
// buttonHighscore.src = '../public/image/toprankgame.png';
// startgameText.src = '../public/image/startgame.png';
// gameoverText.src = '../public/image/gameover.png';
// buttonPlay.src = '../public/image/newgame.png';
// var bird = new Image();
// bird.src = '../public/image/bird.png';
// var birdFlyUp = new Image();
// birdFlyUp.src = '../public/image/birdflyup.png';
// var birdFlyDown = new Image();
// birdFlyDown.src = '../public/image/birdflydown.png';
// var bird12 = new Bird(WINDOWWIDTH , WINDOWHEIGHT,bird.src);

// var col = new Column(column.src);
// var score = new Score();
// var count = 21;
// var check = 0;
// var flag12 = false;
// var flag11 = false;
// function render(time : any, delta : any){
//   // ctx.rotate(0 * ( -1 ) );
//   ctx.drawImage(bg,0,0,800,800);
//   ctx.drawImage(fg,0,800,800,100);
//   col.draw(ctx,column);
//   ctx.save();
//   if(bird12.speedy>=-1 && bird12.speedy<=1) {
//     flag12 = false;
//     flag11 = false;
//   }
//   if(bird12.speedy > 0){
//     if(flag12==false){
//       check=0;
//     }
//     flag12 = true;   
//     if(check<=5)
//     check++;
//     ctx.save();
//     ctx.translate(bird12.x, bird12.y);
//     ctx.rotate(+check*Math.PI/180)
//     ctx.restore();


//   }
//   else{
//     if(flag11==false){
//       check=0;
//     }
//     flag11 = true;
//     if(check>-10)
//     check--;
   
//     ctx.save();
//     ctx.translate(bird12.x, bird12.y);
//     ctx.rotate(check*Math.PI/180)
//     if(count >= 14){
//       bird12.draw(ctx,birdFlyUp);
//     }
//     if(count >=7 && count < 14){
//       bird12.draw(ctx,bird);
//     }
//     if (count>=0 && count <7){
//       bird12.draw(ctx,birdFlyDown);
//       count=21;
//     }
//     ctx.restore();

//   }

//   count --;
      

  


//   if(isGameOver(bird12,col)==true) {
//     ctx.drawImage(buttonPlay,WINDOWWIDTH/2-120,450,120,90);
//     ctx.drawImage(rank,WINDOWWIDTH/2-150,300,300,150); 
//     ctx.drawImage(gameoverText,WINDOWWIDTH/2-150,200,300,80);
//     ctx.drawImage(buttonHighscore,WINDOWWIDTH/2+10,460,110,75);
//     ctx.font = "30px consolas";
//     score.addstoreScore();
//     var sizeOfscore = String(score.getScore()).length;
//     var sizeOfmaxscore = String(score.getMaxscore()).length;
//     ctx.fillText(score.getMaxscore(),WINDOWWIDTH/2+95 - sizeOfmaxscore*10  , 430);
//     ctx.fillText(score.getScore(),WINDOWWIDTH/2+95 - sizeOfscore*10  , 370);
//     if(score.getScore() == score.getMaxscore()){
//       ctx.drawImage(goldRank,WINDOWWIDTH/2-120,350,90,70);
//     }
//     else{
//       ctx.drawImage(bronzeRank,WINDOWWIDTH/2-120,350,90,70);
//     }
//     score.reset();
//     return;
//   }
//   score.draw(ctx,WINDOWWIDTH);
// }
// function processInput(){
//   if(flagGameover==false){
//     canvas.addEventListener("click", function(event) {bird12.fly();})
//   }

//   document.addEventListener("keypress", function(event) {
    
//         if(flagGameover==true){
//           bird12.reset(WINDOWWIDTH, WINDOWHEIGHT);
//           col.reset();
//           requestAnimationFrame(loop);
//           flagGameover = false;
//         }

//       bird12.fly();
//   });
  
// }
// window.onload = function() {
//   ctx.drawImage(bg,0,0,800,800);
//   ctx.drawImage(fg,0,800,800,100);
//   ctx.drawImage(startgameText,WINDOWWIDTH/2-100,200,200,90);
//   ctx.drawImage(buttonPlay,WINDOWWIDTH/2-60,300,120,90);
//   bird12.draw(ctx,bird);
// }

// canvas.addEventListener('click', function(event) {
//   var data = getMousePosition(canvas,event);
//   // console.log(data);
//   if (flagPlaygame == true){
//     if(data[0]>=WINDOWWIDTH/2-60 && data[0] <= WINDOWWIDTH/2-60 + 120 && data[1]>= 300 && data[1] <= 300+90){
//       flagPlaygame = false;
//       requestAnimationFrame(loop);
//     }
//   }
//   else {if(flagGameover == true ){
//     if(data[0]>=WINDOWWIDTH/2-120 && data[0] <= WINDOWWIDTH/2 && data[1]>= 450 && data[1] <= 450+90){
//       bird12.reset(WINDOWWIDTH, WINDOWHEIGHT);
//       col.reset();
//       requestAnimationFrame(loop);
//       flagGameover = false;
//     }
//   }
// }

// });
// function getMousePosition(canvas : any, event : any) {
//   let rect = canvas.getBoundingClientRect();
//   let x = event.clientX - rect.left;
//   let y = event.clientY - rect.top;
//   return [x,y];
// }

// let lastTime = window.performance.now();
// function loop() {
//   const time = window.performance.now();
//   const delta = time - lastTime;
//   processInput();
//   update(time, delta)
//   render(time, delta);
//   lastTime = time;
//   if(isGameOver(bird12,col)==true) 
//   {
//     flagGameover = true;
//     return;
//   }  
//   requestAnimationFrame(loop)
// }

