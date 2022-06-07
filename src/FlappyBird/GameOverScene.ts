import { SceneManager } from '../GameEngine/SceneManager';
import { GameObject } from "../GameEngine/GameObject";
import { Scene } from "../GameEngine/Scene";
import { Score } from '../Score';
import { GameObjectText } from '../GameEngine/GameObjectText';
import { InputHandler } from '../GameEngine/InputHandler';
export class GameOverScene extends Scene {
        private d : boolean = false;
        private score : Score;
        private bGround : GameObject;
        private fGround : GameObject;
        private currentScore : GameObjectText;
        private maxScore : GameObjectText;

        constructor(name: string, width: number, height: number,score:Score , inputHandler : InputHandler){
           super(name,width,height,inputHandler); 
           this.bGround = new GameObject(0,0,800,800,"background");
           this.addgameObject(this.bGround);
           this.loadAssets(["background","floorground","newgame","best","gameover","toprankgame"],["../../public/image/bg.png","../../public/image/fg.png","../../public/image/newgame.png","../../public/image/best.png","../../public/image/gameover.png" ,"../../public/image/toprankgame.png" ]);
           this.fGround = new GameObject(0,800,800,100,"floorground");
           this.addgameObject(this.fGround);
           var buttonPlay = new GameObject(this.width/2-120,450,120,90,"newgame");
           this.addgameObject(buttonPlay);
           var rank = new GameObject(this.width/2 - 150,300,300,150,"best");
            var gameoverText = new GameObject(this.width/2 - 150,200,300,80,"gameover");
            this.addgameObject(gameoverText);
            var buttonHighscore = new GameObject(this.width/2 + 10,460,110,75,"toprankgame");
            this.addgameObject(buttonHighscore);
            this.score = score;
            var sizeOfscore = String(this.score.getScore()).length;
            this.currentScore =new GameObjectText((this.width/2 + 95- sizeOfscore*10), 370,"",this.score.getScore());
            this.addgameObjectText(this.currentScore);
            var sizeOfmaxscore = String(this.score.getMaxscore()).length;
            this.maxScore = new GameObjectText((this.width/2 + 95- sizeOfmaxscore*10), 430,"",this.score.getMaxscore());
            this.addgameObjectText(this.maxScore);
            this.inputHandler.on('pointerdown' + name, (canvas: HTMLCanvasElement,event :PointerEvent ) => {
                // console.log(event);
                if(this.scenes.getCurrentSceneName() == "GameOverScene"){
                        var data = this.getMousePosition(canvas,event);
                        if(data[0]>=this.width/2-120 && data[0] <= this.width/2 && data[1]>= 450 && data[1] <= 450+90){
                                this.scenes.changeScene("GamePlayScene"); 
                                this.score.setScore(0);
                        }
                }
            })
        }

        public update(time: number, delta: number) : void {
            this.score.addstoreScore();  
            this.currentScore.update(this.score.getScore());
            this.maxScore.update(this.score.getMaxscore());
        }
        getMousePosition(canvas : any, event : any) {
                let rect = canvas.getBoundingClientRect();
                let x = event.clientX - rect.left;
                let y = event.clientY - rect.top;
                return [x,y];
        }
}