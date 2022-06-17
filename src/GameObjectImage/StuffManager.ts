import { Coin } from "./Coin";
import { Pipe } from "./Pipe";

export class CoinManager{
    distance : number;
    scene : Phaser.Scene;
    group : Phaser.GameObjects.Group;
    constructor(scene : Phaser.Scene, distance : number){
        this.scene = scene;
        this.distance = distance;
    }
    create(){
        // var coin = new Coin(this,500,500,"coin").play("coin");
        this.group = this.scene.add.group({
            defaultKey: 'coin',
            classType: Coin,
            maxSize: 3,
        });
        var coin = new Coin(this.scene,-10,-10,"coin");
        this.group.add(coin);
        var coin1 = new Coin(this.scene,-10,-10,"coin");
        this.group.add(coin1);
        var coin2 = new Coin(this.scene,-10,-10,"coin");
        this.group.add(coin2);

    }
    update(){
        this.group.getChildren().forEach( (obj : Coin)=> {obj.update();
            // console.log(obj.x);
            if(obj.x < 0 ){
                this.group.killAndHide(obj);
            }
        });
    }

}