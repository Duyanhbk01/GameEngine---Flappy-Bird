import { BackGround } from '../GameObjectImage/BackGround';
import { Bird } from '../GameObjectImage/Bird';
import { ButtonImage } from '../GameObjectImage/ButtonImage';
import { Coin } from '../GameObjectImage/Coin';
import { CoinManager } from '../GameObjectImage/StuffManager';
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
    coinManager : CoinManager;
    backGround : BackGround;
    buttonPause : ButtonImage;
    flagCreateNewPipe : boolean;
    flagCheckEatWorm : boolean;
    constructor() {
        super({ key: 'PlayScene' });
        this.scoreManager = new Score(this);
    }
    create() {
        // create
        this.flagCheckEatWorm = false;

        this.flagCreateNewPipe = false;
       
        Phaser.Actions.IncY
        
        this.backGround = new BackGround(this,0,0,0,0,"background");
        
        this.createBird();
        
        this.scoreManager.create();

        this.buttonPause = new ButtonImage(this,685,5, 'pausegame').setScale(0.4).setDepth(1);

        this.pipeManager = new PipeManager(this);
        this.pipeManager.create();

        this.coinManager = new CoinManager(this, this.pipeManager.distance);
        this.coinManager.create();
        

        this.physics.add.collider(this.pipeManager.group,this.bird,()=>{ this.GameOver(); })
        this.physics.add.collider(this.coinManager.group,this.bird,(coin:Coin,bird:any)=>{ 
            this.addScoreCoin(coin);
            coin.body.checkCollision.none = true;
        });

        this.physics.world.setBounds(0, 0, 410, 800);
        this.cameras.main.setBounds(0, 0, 1000, 800);
        
        this.createSound();
        this.inputProcess();
    }
    addScoreCoin(coin : Coin) {
        this.coinManager.group.killAndHide(coin);
        this.scoreManager.updateColliderCoin();
        this.soundAddScore.play();
    }
    createCoin(){
        var random = Phaser.Math.Between(1,4);
        if(random==1 && this.flagCreateNewPipe == true){
            var maxOfLocationX = 0;
            this.pipeManager.group.getChildren().forEach( (obj : Pipe)=> {
                if(obj.x > maxOfLocationX) maxOfLocationX = obj.x;
            });
            const yRandom = Phaser.Math.Between(80, 480);
            var newCoin = this.coinManager.group.get(maxOfLocationX+this.coinManager.distance/2,yRandom );
            if(!newCoin) return;
            newCoin.body.checkCollision.none = false;
            newCoin.setActive(true).setVisible(true).play("coin");
        }
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
        this.flagCreateNewPipe = this.pipeManager.update();
        this.coinManager.update();
        this.createCoin();
        if(this.scoreManager.update(this.bird,this.pipeManager.group)){
            this.soundAddScore.play();
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
        this.input.on('pointerdown', (event:any,gameObjects : any) => {
            // console.log(gameObjects[0]);
            if(gameObjects[0]!== this.buttonPause){
                this.soundBirdFly.play();
                this.bird.fly();
            }

        })
    }
}