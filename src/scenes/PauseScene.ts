

import { BackGround } from '../GameObjectImage/BackGround';
import { Bird } from '../GameObjectImage/Bird';
import { ButtonImage } from '../GameObjectImage/ButtonImage';

export default class PauseScene extends Phaser.Scene {
  backGround : BackGround;
  bird :Phaser.GameObjects.Sprite;
  options : ButtonImage;
  resume : ButtonImage;
  replay :ButtonImage;
  mute : ButtonImage;
  unmute : ButtonImage;
  container : Phaser.GameObjects.Container;
  constructor() {
    super({ key: 'PauseScene' });
  }
  create() {

    this.backGround = new BackGround(this,0,0,0,0,"background")
    this.options = new ButtonImage(this,-150, -320, 'options');
    this.resume = new ButtonImage(this, -65, -100, 'resume').setScale(0.8);
    this.replay = new ButtonImage(this, 85, -100, 'replay').setScale(0.8);
    this.mute = new ButtonImage(this,-65, 50, 'mute').setScale(0.8);
    this.unmute = new ButtonImage(this, 85, 50, 'unmute').setScale(0.8);
    this.container = this.add.container(180, 350, [ this.options,this.resume, this.replay, this.mute, this.unmute]).setScale(0.5);
    this.container.setSize(300,400);
    this.container.setInteractive();
    this.inputProcess();
    
  }
  inputProcess(){
    var buttonClick  = this.sound.add('buttonclick');
    this.unmute.on('pointerdown',  (event : any) => {
        this.registry.set("stateSound", true);
        buttonClick.play();
    });
    this.mute.on('pointerdown',  (event : any) => {
        if(this.registry.get("stateSound") == true)
            buttonClick.play();
        this.registry.set("stateSound", false);

    });
    this.resume.on('pointerdown',  (event : any) => {
        this.scene.stop("PauseScene");
        this.scene.resume("PlayScene");
        if(this.registry.get("stateSound") == true)
            buttonClick.play();
    });
    this.replay.on('pointerdown',  (event : any) => {
        this.scene.stop("PauseScene");
        this.scene.stop("PlayScene");
        this.scene.start("StartScene");
        if(this.registry.get("stateSound") == true)
            buttonClick.play();
    });

    this.container.on('pointerdown',  () => {
        if(this.registry.get("stateSound") == true)
            buttonClick.play();
    });
  }
  update(){
    this.backGround.update();
  }
}