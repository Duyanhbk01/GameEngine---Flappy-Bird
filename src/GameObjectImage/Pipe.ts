export class Pipe extends Phaser.GameObjects.Image {

    public body: Phaser.Physics.Arcade.Body;
    public flagAddScore : boolean = false;
    constructor(scene: Phaser.Scene,x: number,y: number , texture : string | Phaser.Textures.Texture){
        super(scene,x,y,texture);
        scene.physics.world.enable(this);
        this.setOrigin(0,0);
        scene.add.existing(this);
        this.body.setImmovable();
    }
    update(){
        this.body.setVelocityX(-200);
    }
}