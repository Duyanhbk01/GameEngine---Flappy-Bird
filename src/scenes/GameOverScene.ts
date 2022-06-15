import { ButtonImage } from './../GameObjectImage/ButtonImage';
import { BackGround } from "../GameObjectImage/BackGround";
import { Score } from '../GameObjectImage/Score';

export default class GameOverScene extends Phaser.Scene {
    backGround : BackGround;
    scoreManager : Score;
    newgame : ButtonImage;
    constructor() {
        super({ key: 'GameOverScene' });
    }
    init(data: any) {
        this.scoreManager = data.scoreManager;
        this.scoreManager.arrayScore.push(data.scoreManager.numberScore);;

    }
    create() {
        this.backGround =new BackGround(this,0,0,0,0,"background");
        this.newgame =new ButtonImage(this,87,392,"newgame").setScale(2);

        this.add.image(200,320,"best").setScale(2.5);
        this.add.image(200,200,"gameover");
        this.add.image(265,433,"toprankgame").setScale(2);

        var maxScore = Math.max(...this.scoreManager.arrayScore).toString();
        this.add.text(308-this.scoreManager.numberScore.toString().length*9, 290,this.scoreManager.numberScore.toString(),{ fontFamily: 'troika',fontSize: "25px" }).setShadow(2, 2, "#333333", 2, false, true);
        this.add.text(308-maxScore.length*9, 340,maxScore,{ fontFamily: 'troika',fontSize: "25px" }).setShadow(2, 2, "#333333", 2, false, true);
        
        if(this.scoreManager.numberScore.toString() == maxScore) {
            this.add.image(122,330,"goldrank").setScale(2.5);
        }
        else {
            this.add.image(122,330,"silverrank").setScale(2.5);
        }
        this.inputProcess();
    }
    update() {
        this.backGround.update();
    }
    inputProcess() {
        this.input.keyboard.on('keydown',  (event:any) => {
            if (event.keyCode === 32 ){
                this.scene.start("PlayScene");
            }
        })
        this.newgame.on('pointerdown', () =>{
            this.scene.start("PlayScene");
        })
    }
}