export class BackGround extends Phaser.GameObjects.TileSprite{
    constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, textureKey: string, frameKey?: string | number){
        super(scene, x, y, width, height, textureKey);
        this.setOrigin(0,0).setScale(1).setScrollFactor(0);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.displayHeight = 800;
    }
    update(){
        this.tilePositionX += 1;
    }
}