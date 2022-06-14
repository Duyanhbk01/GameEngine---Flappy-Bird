

export default class GameOverScene extends Phaser.Scene {
  backGround : Phaser.GameObjects.TileSprite;
  numberScore: string;
  arrayScore: Array<number>;
  constructor() {
    super({ key: 'GameOverScene' });
    this.arrayScore = new Array<number>();
  }
  
  init(data: any) {
    this.numberScore = data.score.toString();
    this.arrayScore.push(data.score);
  }
  create() {
    this.backGround = this.add.tileSprite(0,0,0,0,"background").setOrigin(0,0).setScale(1).setScrollFactor(0);
    this.backGround.displayHeight = 800
    this.add.image(200,320,"best").setScale(2.5);
    var newgame = this.add.image(140,430,"newgame").setScale(2);
    this.add.image(200,200,"gameover");
    this.add.image(265,433,"toprankgame").setScale(2);
    var maxScore = Math.max(...this.arrayScore).toString();
    this.add.text(308-this.numberScore.length*9, 290,this.numberScore,{ fontFamily: 'troika',fontSize: "25px" }).setShadow(2, 2, "#333333", 2, false, true);
    this.add.text(308-maxScore.length*9, 340,maxScore,{ fontFamily: 'troika',fontSize: "25px" }).setShadow(2, 2, "#333333", 2, false, true);
    if(this.numberScore == maxScore) {
      this.add.image(122,330,"goldrank").setScale(2.5);
    }
    else{
      this.add.image(122,330,"silverrank").setScale(2.5);
    }
    newgame.setInteractive();
    newgame.on('pointerdown', () =>{
    this.scene.start("PlayScene");
  })
  }
  update(){
    var button  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    if (Phaser.Input.Keyboard.JustDown(button))
    {
      this.scene.start("PlayScene");
    }
    this.backGround.tilePositionX += 1;
  }
}