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
        Phaser.Actions.IncY
        
        this.backGround = new BackGround(this,0,0,0,0,"background");

        this.createBird();
        
        this.scoreManager.create();

        this.buttonPause = new ButtonImage(this,685,5, 'pausegame').setScale(0.4).setDepth(4);

        this.pipeManager = new PipeManager(this);
        this.pipeManager.create();

        this.physics.add.collider(this.pipeManager.group,this.bird,()=>{ this.GameOver(); })

        this.physics.world.setBounds(0, 0, 410, 800);
        this.cameras.main.setBounds(0, 0, 1000, 800);
        
        this.createSound();
        this.inputProcess();
    }
    createSound(){
        this.soundAddScore = this.sound.add('ping');
        this.soundBirdFly = this.sound.add('fly');
        this.soundGameOver = this.sound.add('dead');
    }
    createBird(){
        var random = Math.round(Math.random());
        if(random)
            this.bird = new Bird(this,100,400,'bird-sprite').setDepth(1).play('bird');
        else
            this.bird = new Bird(this,100,400,'bird-sprite2').setDepth(1).play('bird2');
        this.bird.body.setCollideWorldBounds(true,undefined,undefined,true);
        this.physics.world.setBoundsCollision(true,true,true,true);
        this.bird.body.world.on('worldbounds', ()=>{this.GameOver(); });
    }
    update(){
        this.bird.update();
        this.backGround.update();
        this.pipeManager.update();
        if(this.scoreManager.update(this.bird,this.pipeManager.group)){
            this.soundAddScore.play();
            console.log(22)
        }
    }
    GameOver() { 
        this.soundGameOver.play();  
        this.scene.start('GameOverScene',{scoreManager: this.scoreManager});
    }
    inputProcess(){
        var buttonClick  = this.sound.add('buttonclick');
        this.buttonPause.on('pointerdown', ()=> {
            this.scene.launch("PauseScene");
            buttonClick.play();
            this.scene.pause('PlayScene');
        })
        this.input.keyboard.on('keydown',  (event:any) => {
            if (event.keyCode === 32 ){
                this.soundBirdFly.play();
            this.bird.fly();
            }
            if(event.keyCode === 80){
                this.scene.launch("PauseScene");
                buttonClick.play();
                this.scene.pause('PlayScene');
            }
        })
        this.backGround.on('pointerdown', (event:any) => {
            this.soundBirdFly.play();
            this.bird.fly();
        })
    }
}