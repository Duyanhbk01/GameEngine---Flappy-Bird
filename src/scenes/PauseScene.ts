

import { Bird } from '../GameObjectImage/Bird';

export default class PauseScene extends Phaser.Scene {
  backGround : Phaser.GameObjects.TileSprite;
  bird :Phaser.GameObjects.Sprite;
  constructor() {
    super({ key: 'PauseScene' });
  }
  create() {

    this.backGround = this.add.tileSprite(0,0,0,0,"background").setOrigin(0,0).setScale(1).setScrollFactor(0);
    this.backGround.displayHeight = 800
    var options = this.add.image(0, 0, 'options');
    var resume = this.add.image(-65, -100, 'resume').setScale(0.8);
    var replay = this.add.image(85, -100, 'replay').setScale(0.8);
    var mute = this.add.image(-65, 50, 'mute').setScale(0.8);
    var unmute = this.add.image(85, 50, 'unmute').setScale(0.8);
    var container = this.add.container(205, 350, [ options,resume,replay,mute,unmute]).setScale(0.5);
    container.setSize(300,400);
    container.setInteractive();
    resume.setInteractive();
    replay.setInteractive();
    mute.setInteractive();
    unmute.setInteractive();
    var buttonClick  = this.sound.add('buttonclick');
    unmute.on('pointerdown',  (event : any) => {
        this.registry.set("stateSound", true);
        buttonClick.play();
    });
    mute.on('pointerdown',  (event : any) => {
        if(this.registry.get("stateSound") == true)
            buttonClick.play();
        this.registry.set("stateSound", false);

    });
    resume.on('pointerdown',  (event : any) => {
        this.scene.stop("PauseScene");
        this.scene.resume("PlayScene");
        if(this.registry.get("stateSound") == true)
            buttonClick.play();
    });
    replay.on('pointerdown',  (event : any) => {
        this.scene.stop("PauseScene");
        this.scene.stop("PlayScene");
        this.scene.start("StartScene");
        if(this.registry.get("stateSound") == true)
            buttonClick.play();
    });

    container.on('pointerdown',  () => {
        if(this.registry.get("stateSound") == true)
            buttonClick.play();
    });
  }
  update(){
    this.backGround.tilePositionX += 1;
  }
}