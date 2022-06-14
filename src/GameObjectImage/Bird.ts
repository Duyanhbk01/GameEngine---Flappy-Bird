export class Bird extends Phaser.GameObjects.Sprite{
    public body: Phaser.Physics.Arcade.Body;
    public flagFlyUp : boolean;
    constructor(scene: Phaser.Scene,x: number, y: number, key: string, ){
        super(scene,x,y,key);
        this.scene.physics.world.enable(this);
        scene.add.existing(this).setScale(0.65);
        this.body.setGravityY(1200);
        this.body.setCollideWorldBounds(true);
    }
    fly(){
        if(this.flagFlyUp == false){
            this.angle = 0;
        }
        this.flagFlyUp = true;
        this.body.setVelocityY(-500);
        this.body.setVelocityX(10);
    }
    update(){
        if(this.body.velocity.y >  0){
            this.angle ++;
            this.flagFlyUp = false;
        }
        else{
            if(this.angle > -30)
                this.angle--;
        }
    }
}