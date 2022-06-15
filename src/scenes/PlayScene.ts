import { BackGround } from '../GameObjectImage/BackGround';
import { Bird } from '../GameObjectImage/Bird';
import { ButtonImage } from '../GameObjectImage/ButtonImage';
import { Pipe } from '../GameObjectImage/Pipe';
import { PipeManager } from '../GameObjectImage/PipeManager';
import { Score } from '../GameObjectImage/Score';

const BLANK = 200;
const DISTANCE = 350;
export default class PlayScene extends Phaser.Scene {
    scoreManager : Score;
    bird :Bird;
    soundAddScore :  Phaser.Sound.BaseSound;
    soundBirdFly : Phaser.Sound.BaseSound;
    soundGameOver: Phaser.Sound.BaseSound;
    pipeManager : PipeManager;
    backGround : BackGround;
    buttonPause : ButtonImage;
    constructor() {
        super({ key: 'PlayScene' });
        this.scoreManager = new Score(this);
    }
    create() {
        // create
        this.bird = new Bird(this,100,400,'bird-sprite').setDepth(1).play('bird');

        this.backGround = new BackGround(this,0,0,0,0,"background");

        this.scoreManager.create();

        this.buttonPause = new ButtonImage(this,355,2, 'pausegame').setScale(0.4).setDepth(4);

        this.pipeManager = new PipeManager(this,6);
        this.pipeManager.create();
        this.pipeManager.arrayPipe.forEach(pipe => {
            pipe.setDepth(1);
            this.physics.add.collider(pipe,this.bird,()=>{ this.GameOver(); })

        })
        this.physics.world.setBounds(0, 0, 410, 800);
        this.cameras.main.setBounds(0, 0, 1000, 800);

        this.bird.body.setCollideWorldBounds(true,undefined,undefined,true);
        this.physics.world.setBoundsCollision(true,true,true,true);
        this.bird.body.world.on('worldbounds', ()=>{this.GameOver(); });
    

        this.soundAddScore = this.sound.add('ping');
        this.soundBirdFly = this.sound.add('fly');
        this.soundGameOver = this.sound.add('dead');

    
        this.inputProcess();
    }
    update(){
        this.bird.update();
        this.backGround.update();
        this.pipeManager.update();
        if(this.scoreManager.update(this.bird,this.pipeManager.arrayPipe)){
            if(this.registry.get("stateSound") == true) {
                this.soundAddScore.play();
            }
        }
    }
    GameOver() { 
        if(this.registry.get("stateSound") == true) {
            this.soundGameOver.play();  
        }
        this.scene.start('GameOverScene',{scoreManager: this.scoreManager});
    }
    inputProcess(){
        var buttonClick  = this.sound.add('buttonclick');
        this.buttonPause.on('pointerdown', ()=> {
            this.scene.pause('PlayScene');
            this.scene.launch("PauseScene");
            if(this.registry.get("stateSound") == true) {
                buttonClick.play();
            }
        })
        this.input.keyboard.on('keydown',  (event:any) => {
            if (event.keyCode === 32 ){
                if(this.registry.get("stateSound") == true) {
                    this.soundBirdFly.play();
                }
                this.bird.fly();
            }
        })
        this.input.on('pointerdown', (event:any) => {
            if(this.registry.get("stateSound") == true) {
                this.soundBirdFly.play();
            }
            this.bird.fly();
        })
    }
}