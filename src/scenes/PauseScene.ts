

import { BackGround } from '../GameObjectImage/BackGround';
import { Bird } from '../GameObjectImage/Bird';
import { ButtonImage } from '../GameObjectImage/ButtonImage';
import { PipeManager } from '../GameObjectImage/PipeManager';

export default class PauseScene extends Phaser.Scene {
  backGround : BackGround;
  bird :Bird;
  pipeManager : PipeManager;
  options : ButtonImage;
  resume : ButtonImage;
  replay :ButtonImage;
  mute : ButtonImage;
  unmute : ButtonImage;
  container : Phaser.GameObjects.Container;
  text : Phaser.GameObjects.Text;
  initialTime : number = 3;
  flagOnSpace : boolean = false;
  constructor() {
    super({ key: 'PauseScene' });
  }
  init(data: any){
    // this.bird = data.bird;
    // this.add.existing(this.bird).setScale(0.65);
  }
  create() {
    this.flagOnSpace = false;
    this.initialTime = 3;
    this.text = this.add.text(365, 200,"",{ fontFamily: 'troika',fontSize: "35px" }).setShadow(2, 2, "#333333", 2, false, true).setDepth(3);
    this.backGround = new BackGround(this,0,0,0,0,"background")
    this.options = new ButtonImage(this,-40, -320, 'options');
    this.resume = new ButtonImage(this, 45, -100, 'resume').setScale(0.8);
    this.replay = new ButtonImage(this, 195, -100, 'replay').setScale(0.8);
    if(this.game.sound.mute == true){
        this.mute = new ButtonImage(this,110, 50, 'mute').setScale(0.8);
        this.container = this.add.container(290, 350, [ this.options,this.resume, this.replay, this.mute]).setScale(0.5);
    }
    else{ 
        this.unmute = new ButtonImage(this, 110, 50, 'unmute').setScale(0.8);
        this.container = this.add.container(290, 350, [ this.options,this.resume, this.replay, this.unmute]).setScale(0.5);
    }
    this.container.setSize(300,400);
    this.container.setInteractive();
    this.inputProcess();
  }
  inputProcess(){
    var buttonClick  = this.sound.add('buttonclick');
    this.input.on('pointerdown',  (event : any) => {
      // console.log(event.x);
        if(event.x > 344 && event.x < 395 && event.y > 375 && event.y < 415){
            if(this.game.sound.mute == false){
                this.game.sound.mute = true;
                this.unmute.destroy();
                this.mute = new ButtonImage(this,110, 50, 'mute').setScale(0.8);
                this.container.add(this.mute);
            }
            else{
                this.game.sound.mute = false;
                this.mute.destroy();
                this.unmute = new ButtonImage(this, 110, 50, 'unmute').setScale(0.8);
                this.container.add(this.unmute);
            }
        }
    });
    this.resume.on('pointerdown',  (event : any) => {
        buttonClick.play();
        this.flagOnSpace= true;
        this.resumeGame();
    });
    this.replay.on('pointerdown',  (event : any) => {
        this.scene.stop("PauseScene");
        this.scene.stop("PlayScene");
        this.scene.start("StartScene");
        buttonClick.play();
    });
    this.input.keyboard.on('keydown',  (event:any) => {
      if (event.keyCode === 32 ){
        if(this.flagOnSpace == false ){
            this.resumeGame();
            this.flagOnSpace= true;
        }
      }
    })
    this.container.on('pointerdown',  () => {
        buttonClick.play();
    });
    }
    onEvent () {
        // this.initialTime -= 1; // One second
        this.initialTime--;
        this.text.setText(this.initialTime.toString());
      
    }
    resumeGame(){
        this.container.destroy();
        this.backGround.destroy();
        this.text.setText("3");
        this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });
        this.time.addEvent({delay:3000,callback: () => {
            this.scene.stop("PauseScene");
            this.scene.resume("PlayScene");
        },callbackScope: this});
    }
    update(){
        this.backGround.update();
    }
}