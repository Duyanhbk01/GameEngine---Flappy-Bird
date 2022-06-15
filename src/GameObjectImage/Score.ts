import { Bird } from "./Bird";
import { Pipe } from "./Pipe";


export class Score {
    score : Phaser.GameObjects.Text;
    numberScore : number = 0;
    constructor(scene: Phaser.Scene){
        this.score = new Phaser.GameObjects.Text(scene,scene.sys.canvas.width/2-50, 30," ",{ fontFamily: 'troika',fontSize: "30px" }).setShadow(2, 2, "#333333", 2, false, true);
        scene.add.existing(this.score);
    }
    update(bird: Bird , pipe : Pipe[] ) : boolean {
        for(var i = 0 ; i < pipe.length ; i+=2){
            if(bird.x > pipe[i].x + pipe[i].width){
                if(pipe[i].flagAddScore == false)
                {
                    this.numberScore++;
                    pipe[i].flagAddScore = true;
                    return true;
                }
            }
        }
        this.score.text= "Score: " + this.numberScore;
        return false;
    }
    updateScoreboard(){
       
    }
}