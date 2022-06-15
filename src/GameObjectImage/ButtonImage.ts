export class ButtonImage extends Phaser.GameObjects.Image {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number) {
        super(scene, x, y, texture, frame);
        this.setOrigin(0,0);
        this.setInteractive();
        scene.add.existing(this);

    }
}