

import { BackGround } from '../GameObjectImage/BackGround';
import { Bird } from '../GameObjectImage/Bird';
import { ButtonImage } from '../GameObjectImage/ButtonImage';

export default class StartScene extends Phaser.Scene {
    backGround : BackGround;
    bird :Phaser.GameObjects.Sprite;
    button : Phaser.Input.Keyboard.Key;
    newgame : ButtonImage;
    constructor() {
        super({ key: 'StartScene' });       
    }
    create() {
    this.backGround = new BackGround(this,0,0,0,0,"background");
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
    this.add.image(205,200,"startgame");
    this.newgame = new ButtonImage(this,165,300,"newgame").setScale(1.3);
    this.inputProcess();
  }
  update(){
    this.backGround.update();
  }
  inputProcess(){
    var buttonClick  = this.sound.add('buttonclick');
    this.newgame.on('pointerdown', () =>{
        if(this.registry.get("stateSound") == true){
            buttonClick.resume();
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
}