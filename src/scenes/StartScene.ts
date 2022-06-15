

import { Bird } from '../GameObjectImage/Bird';

export default class StartScene extends Phaser.Scene {
    backGround : Phaser.GameObjects.TileSprite;
    bird :Phaser.GameObjects.Sprite;
    button : Phaser.Input.Keyboard.Key;
    constructor() {
        super({ key: 'StartScene' });       
    }
    create() {
    var buttonClick  = this.sound.add('buttonclick');
    this.backGround = this.add.tileSprite(0,0,0,0,"background").setOrigin(0,0).setScale(1).setScrollFactor(0);
    this.backGround.displayHeight = 800
    this.anims.create({
        key:"bird",
        frames: this.anims.generateFrameNumbers("bird-sprite", {
            start: 0,
            end: 2
        }),
        frameRate: 10,
        repeat: -1
    })
    this.bird = this.add.existing(new Phaser.GameObjects.Sprite(this,100,400,'bird-sprite')).setScale(0.65).play('bird');
    this.add.image(200,200,"startgame");
    var newgame = this.add.image(200,300,"newgame").setScale(1.3);
    newgame.setInteractive();
    
    buttonClick.resume();
    newgame.on('pointerdown', () =>{
        if(this.registry.get("stateSound") == true){
            buttonClick.play();
        }
        this.scene.start("PlayScene");
    })
    this.input.keyboard.on('keydown',  (event:any) => {
        if (event.keyCode === 32 ){
            this.scene.start("PlayScene");
        }
    });
  }
  update(){
    this.backGround.tilePositionX += 1;
  }
}