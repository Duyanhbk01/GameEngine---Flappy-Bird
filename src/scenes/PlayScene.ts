
import { Bird } from '../GameObjectImage/Bird';
import { Pipe } from '../GameObjectImage/Pipe';
import { Score } from '../GameObjectImage/Score';


const BLANK = 300;
const DISTANCE = 350;
export default class PlayScene extends Phaser.Scene {
    score : Score;
    bird :Bird;
    soundAddScore :  Phaser.Sound.BaseSound;
    soundBirdFly : Phaser.Sound.BaseSound;
    soundGameOver: Phaser.Sound.BaseSound;
    flag : Boolean;
    arrayPipe : Pipe[];
    blank : number;
    distance : number;
    backGround : Phaser.GameObjects.TileSprite;
   
    constructor() {
        super({ key: 'PlayScene' });

    }
     create() {
        this.blank  = BLANK;
        this.distance =DISTANCE;
        this.backGround = this.add.tileSprite(0,0,0,0,"background").setOrigin(0,0).setScale(1).setScrollFactor(0);
        this.backGround.displayHeight = 800;
        this.score = new Score(this);
        this.score.score.setDepth(3);
        this.physics.world.enable( this.backGround);
        var buttonPause = this.add.image(355,2, 'pausegame').setScale(0.4);
        buttonPause.setOrigin(0,0).setDepth(4);

        this.arrayPipe = new Array(6);
        var y = 1;
        for ( var i = 0; i < 6 ; i+=2){
            const yRandom = Phaser.Math.Between(80, 480)
            this.arrayPipe[i] = new Pipe(this,this.sys.canvas.width + y* this.distance ,-this.sys.canvas.height + yRandom ,"column").setDisplaySize(70,800);
            this.arrayPipe[i+1] = new Pipe(this,this.sys.canvas.width + y* this.distance , yRandom + this.blank, "column").setDisplaySize(70,800);
            // this.add.existing( new  Phaser.GameObjects.Image(this,410, 0,"column"));
            y+=1;
        }

        this.bird = new Bird(this,100,400,'bird-sprite').play('bird');
        this.bird.setDepth(1);

        this.physics.world.setBounds(0, 0, 410, 800);
        this.cameras.main.setBounds(0, 0, 1000, 800);

        // this.cameras.main.startFollow(this.bird);
        // this.physics.add.overlap();
        this.arrayPipe.forEach(pipe => {
            pipe.setDepth(1);
            this.physics.add.collider(pipe,this.bird,()=>{ this.GameOver(); })

        })
        // this.physics.add.collider(this.bird,this.backGround,()=>{ this.GameOver();})
        this.bird.body.setCollideWorldBounds(true,undefined,undefined,true);
        this.physics.world.setBoundsCollision(true,true,true,true);
        this.bird.body.world.on('worldbounds', ()=>{this.GameOver(); });
    
        this.soundAddScore = this.sound.add('ping');
        this.soundBirdFly = this.sound.add('fly');
        this.soundGameOver = this.sound.add('dead');
        var buttonClick  = this.sound.add('buttonclick');
        buttonPause.setInteractive();
        buttonPause.on('pointerdown', ()=> {
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
    update(){
        this.bird.update();
        if(this.score.update(this.bird,this.arrayPipe)){
            if(this.registry.get("stateSound") == true) {
                this.soundAddScore.play();
            }
        }
        this.backGround.tilePositionX += 1;
        // pipe 
        this.arrayPipe.forEach(pipe => pipe.update());
        if(this.arrayPipe[0].x < -70 ){
            for(var i = 0 ; i <= 2 ; i+=2){
                this.arrayPipe[i].x = this.arrayPipe[i+2].x;
                this.arrayPipe[i].flagAddScore = this.arrayPipe[i+2].flagAddScore;
                this.arrayPipe[i].y = this.arrayPipe[i+2].y;
                this.arrayPipe[i+1].x  = this.arrayPipe[i+3].x;
                this.arrayPipe[i+1].y  = this.arrayPipe[i+3].y;
            }
            var random = Phaser.Math.Between(80, 480);
            this.arrayPipe[4].x = this.arrayPipe[2].x + this.distance ;
            this.arrayPipe[5].x = this.arrayPipe[2].x + this.distance ;
            this.arrayPipe[4].y =  -this.sys.canvas.height + random;
            this.arrayPipe[5].y = random + this.blank;
            this.arrayPipe[4].flagAddScore = false;
          }
    }
    GameOver() { 
        if(this.registry.get("stateSound") == true) {
            this.soundGameOver.play();  
        }
        this.scene.start('GameOverScene',{score: this.score.numberScore});
    }
}