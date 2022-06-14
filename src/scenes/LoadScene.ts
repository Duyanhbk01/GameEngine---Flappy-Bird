
export default class LoadScene extends Phaser.Scene {
    backGround : Phaser.GameObjects.TileSprite;
    bird :Phaser.GameObjects.Sprite;
    button : Phaser.Input.Keyboard.Key;
    constructor() {
        super({ key: 'LoadScene' });
    }
    preload() {
        var progress = this.add.graphics();
        var loadingText = this.make.text({
            x: 205,
            y: 310,
            text: 'Loading...',
            style: {
                font: '20px monospace',
            }
        });
        var percentText = this.make.text({
            x: 200,
            y: 405,
            text: '0%',
            style: {
                font: '18px monospace',
            }
        });
        percentText.setOrigin(0.5, 0.5);
        loadingText.setOrigin(0.5, 0.5);
        this.load.on('progress', function (value :any) {
            var data = Math.round((value * 100)).toString();
            percentText.setText( data+ '%');
            progress.clear();
            progress.fillStyle(0x00CCFF, 1);
            progress.fillRect(0, 0, 410, 800);
            
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(8, 328, 394, 64);
            progress.fillStyle(0x00CCFF, 1);
            progress.fillRect(10, 330, 390 , 60);
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(10, 330, 390 * value, 60);
    
        });
        this.load.on('complete',  () => {
            progress.destroy();
            this.scene.start("StartScene");
    
        });
        this.load.image('background', './assets/images/bg.png');
        this.load.image('bird', './assets/images/bird.png');
        this.load.image("startgame","./assets/images/startgame.png");
        this.load.image("newgame","./assets/images/newgame.png");
        this.load.spritesheet("bird-sprite", 'assets/images/bird-sprite.png', {
            frameWidth: 120,
            frameHeight: 80
        })
        this.load.image('column', './assets/images/column.png');
        this.load.image('gameover', './assets/images/gameover.png');
        this.load.image('toprankgame', './assets/images/toprankgame.png');
        this.load.image('best', './assets/images/best.png');
        this.load.image('background1', './assets/images/bg1.png');
        this.load.image('pausegame', './assets/images/pausegame.png');
        this.load.image('options', './assets/images/options.png');
        this.load.image('resume', './assets/images/resume.png');
        this.load.image('mute', './assets/images/mute.png');
        this.load.image('unmute', './assets/images/unmute.png');
        this.load.image('replay', './assets/images/replay.png');
        this.load.image('goldrank', './assets/images/goldrank.png');
        this.load.image('silverrank', './assets/images/silverrank.png');
        this.load.audio('ping', 'assets/audio/ping.mp3');
        this.load.audio('fly', 'assets/audio/Fly.mp3');
        this.load.audio('dead', 'assets/audio/Dead.mp3');
        this.load.audio('buttonclick', 'assets/audio/buttonclick.mp3');
    }

  create() {
    this.registry.set("stateSound",true);
  }
  update(){
  
  }
}