import { Bird } from "../Bird";
import { Column } from "../Column";
import { GameObject } from "../GameEngine/GameObject";
import { GameObjectText } from "../GameEngine/GameObjectText";
import { InputHandler } from "../GameEngine/InputHandler";
import { Scene } from "../GameEngine/Scene";
import { SceneManager } from "../GameEngine/SceneManager";
import { Score } from "../Score";
export class GamePlayScene extends Scene {
    private bird: Bird;
    private arrColumn : Column[];
    private bGround : GameObject;
    private fGround : GameObject;

    private score : Score;
    public blank : number;
    private distance : number;
    private columnspeed : number;

    private dataScore : GameObjectText;

    private count : number = 0;
    constructor(name: string, width: number, height: number, score: Score , inputHandler: InputHandler){
        super(name,width,height,inputHandler); 

        this.bGround = new GameObject(0,0,800,800,"background");
        this.addgameObject(this.bGround);
        this.loadData("background","../../public/image/bg.png" );
        this.fGround = new GameObject(0,800,800,100,"floorground");
        this.addgameObject(this.fGround);
        this.loadData("floorground","../../public/image/fg.png" );
        this.bird = new Bird(100,400,70,55,"bird",["birdflyup","bird","birdflydown"]);
        this.addgameObject(this.bird);
        this.loadData("bird","../../public/image/bird.png" );
        this.loadData("birdflyup","../../public/image/birdflyup.png" );
        this.loadData("birdflydown","../../public/image/birdflydown.png" );
        this.loadData("column","../../public/image/column.png" );
        // console.log(this.arrColumn);
        this.arrColumn = new Array(3);
        
        this.blank = 240;
        this.distance = 350;
        this.columnspeed = 2;
        var y = 1;
        for (var i = 0 ; i < 6 ; i+=2){
            var random = Math.floor(Math.random() * (this.height-60 - this.blank + 1)) + 60;
            this.arrColumn[i] = new Column(this.width +(y)*this.distance, -this.height + random ,70,900,"column");
            this.arrColumn[i+1] = new Column(this.width +(y)*this.distance, random + this.blank,70,900,"column");
            this.addgameObject(this.arrColumn[i]);
            this.addgameObject(this.arrColumn[i+1]);
            y++;
        }
        this.score = score;
        this.dataScore = new GameObjectText((this.width-40*5)/2,100,"Score: ",this.score.getScore());
        this.addgameObjectText(this.dataScore);

        this.inputHandler.on('pointerdown' + name, () => {
            // console.log(this.arrColumn);
            // console.log("GamePlayScene");
            if(this.scenes.getCurrentSceneName() == "GamePlayScene"){
                this.bird.fly();
                this.count = 0;
            }
        })
    }
    InputHandler(time: number,delta :number , scenes:SceneManager ){
    }
    getMousePosition(canvas : any, event : any) {
            let rect = canvas.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            return [x,y];
    }
    public update(time: number, delta: number) : void {
        // Game live
        if(this.isGameOver(this.bird,this.arrColumn)==false) {
            this.bird.update(delta);
            this.arrColumn.forEach(obj => {obj.update();});
        if(this.arrColumn[0].x < -this.arrColumn[0].width ){
          for(var i = 0 ; i <= 2 ; i+=2){
            this.arrColumn[i].x = this.arrColumn[i+2].x;
            this.arrColumn[i].y = this.arrColumn[i+2].y;
            this.arrColumn[i+1].x  = this.arrColumn[i+3].x;
            this.arrColumn[i+1].y  = this.arrColumn[i+3].y;
          }

            var random = Math.floor(Math.random() * (this.height-60 - this.blank + 1)) + 60;
            this.arrColumn[4].x = this.arrColumn[2].x + this.distance ;
            this.arrColumn[5].x = this.arrColumn[2].x + this.distance ;
            this.arrColumn[4].y =  -this.height + random;
            this.arrColumn[5].y = random + this.blank;
        }
            if(this.count <= 11){
                // console.log(this.count); 
                this.bird.updateFrame();
                if(this.count ==11)
                    this.bird.setCurrentFrame();
            }
                this.count++;
            this.score.update(this.bird,this.arrColumn,this.rectCollision);
            // console.log(this.score.getScore());
            this.dataScore.update(this.score.getScore());
        }
        else{
            console.log("die");
            this.bird.reset(200,200);
            var y = 1;
            for (var i = 0 ; i < 6 ; i+=2){
                this.arrColumn[i].x = this.width +y*this.distance;
                this.arrColumn[i+1].x =  this.width +y*this.distance;
                y++;
            }
            this.scenes.changeScene("GameOverScene"); 
        }
    }
    rectCollision(rect1 : any, rect2: any){
        if (rect1[0] <= rect2[0]+rect2[2] && rect2[0] <= rect1[0]+rect1[2] && rect1[1] <= rect2[1]+rect2[3] && rect2[1] <= rect1[1]+rect1[3])
            return true
        return false
    }
    isGameOver(bird : any, arrColumn: any){
        for (var i = 0 ; i < 6 ; i+=2){
            var rectBird = [bird.x, bird.y, bird.width, bird.height]
            var rectColumn1 = [ arrColumn[i].x, arrColumn[i].y, arrColumn[i].width, arrColumn[i].height]
            var rectColumn2 = [ arrColumn[i+1].x,arrColumn[i+1].y, arrColumn[i+1].width, arrColumn[i+1].height]
            if (this.rectCollision(rectBird, rectColumn1) == true || this.rectCollision(rectBird, rectColumn2) == true)
                return true
        }
        if (bird.y + bird.height < 0 || bird.y + bird.height > this.height)
            return true
        return false
    }
}