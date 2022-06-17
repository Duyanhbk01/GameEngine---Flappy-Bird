export class Coin extends Phaser.GameObjects.Sprite{
    public body: Phaser.Physics.Arcade.Body;
    constructor(scene: Phaser.Scene,x: number, y: number, key: string, ){
        super(scene,x,y,key);
        this.scene.physics.world.enable(this);
        scene.add.existing(this).setScale(0.56);this.setOrigin(0,0).setDepth(2);
        this.body.setImmovable();
    }
    update(){
        this.body.setVelocityX(-200);
    }
}