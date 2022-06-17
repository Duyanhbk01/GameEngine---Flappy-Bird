import { Pipe } from "./Pipe";
const BLANK = 250;
const DISTANCE = 350;
export class PipeManager {
    blank : number;
    distance : number;
    scene : Phaser.Scene;
    group : Phaser.GameObjects.Group;
    constructor(scene : Phaser.Scene){
        this.scene = scene;
        this.blank = BLANK;
        this.distance = DISTANCE;
    }
    create() {
        this.group = this.scene.add.group({
            defaultKey: 'column',
            classType: Pipe,
            maxSize: 6,
        });
        var y = 1;
        for ( var i = 0; i < 6 ; i+=2){
            const yRandom = Phaser.Math.Between(80, 480);
            this.group.add(new Pipe(this.scene,this.scene.sys.canvas.width + y* this.distance ,-this.scene.sys.canvas.height + yRandom ,"column").setDisplaySize(70,800));
            this.group.add(new Pipe(this.scene,this.scene.sys.canvas.width + y* this.distance , yRandom + this.blank, "column").setDisplaySize(70,800));
            y+=1;
        }
    }
    update(){
        this.group.getChildren().forEach( (obj : Pipe)=> {obj.update();
            if(obj.x < -70 && obj.active){
                this.group.killAndHide(obj);
            }
        });
        
        if (this.group.getTotalUsed() < 5){
            var random = Phaser.Math.Between(80, 480);
            var maxOfLocationX = 0;
            this.group.getChildren().forEach( (obj : Pipe)=> {
                if(obj.x > maxOfLocationX) maxOfLocationX = obj.x;
            });
            var x1 = maxOfLocationX + this.distance ;
            var y1 =  -this.scene.sys.canvas.height + random;
            var y2 = random + this.blank;
            var a = this.group.get(x1, y1);
            a.setActive(true).setVisible(true);
            a.flagAddScore = false;
            var b = this.group.get(x1, y2);
            b.setActive(true).setVisible(true);
            b.flagAddScore = false;
            return true;
        }
        return false;
    }

}