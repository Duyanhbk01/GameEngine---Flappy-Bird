import { Bird } from "./Bird";
import { Pipe } from "./Pipe";


export class Score {
    score : Phaser.GameObjects.Text;
    numberScore : number = 0;
    arrayScore: Array<number>;
    scene: Phaser.Scene;
    counterPipeForAddScore: number = 0;
    constructor(scene: Phaser.Scene){
        this.scene = scene;
        this.arrayScore = new Array<number>();
    }
    create(){

        this.counterPipeForAddScore = 0;
        this.numberScore = 0;
        this.score = new Phaser.GameObjects.Text(this.scene,this.scene.sys.canvas.width/2-50, 30," ",{ fontFamily: 'troika',fontSize: "30px" }).setShadow(2, 2, "#333333", 2, false, true).setDepth(3);
        this.scene.add.existing(this.score);
    }
    update(bird: Bird , group :  Phaser.GameObjects.Group ) : boolean {
        // for(var i = 0 ; i < pipe.length ; i+=2){
        //     if(bird.x > pipe[i].x + pipe[i].width){
        //         if(pipe[i].flagAddScore == false)
        //         {
        //             this.numberScore++;
        //             pipe[i].flagAddScore = true;
        //             return true;
        //         }
        //     }
        // }
        // this.score.text= "Score: " + this.numberScore;
        var flag = false;
        group.getChildren().forEach((element : any) => {
            if((bird.x > element.x + element.width) && element.active ){
                if(element.flagAddScore == false){
                    element.flagAddScore = true;
                    this.counterPipeForAddScore++;
                    if(this.counterPipeForAddScore==2){
                        this.counterPipeForAddScore = 0;
                        this.numberScore++;
                        flag =  true;
                        
                    }
                }
            }
        });
        this.score.text= "Score: " + this.numberScore;
        return flag;
    }
    updateScoreboard(){
       
    }
}