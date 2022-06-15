import { Pipe } from "./Pipe";
const BLANK = 200;
const DISTANCE = 350;
export class PipeManager {
    arrayPipe : Pipe[];
    blank : number;
    distance : number;
    scene : Phaser.Scene;
    constructor(scene : Phaser.Scene,numOfPipe : number){
        this.arrayPipe = new Array(numOfPipe);
        this.scene = scene;
        this.blank = BLANK;
        this.distance = DISTANCE;
    }
    create() {
        var y = 1;
        for ( var i = 0; i < this.arrayPipe.length ; i+=2){
            const yRandom = Phaser.Math.Between(80, 480)
            this.arrayPipe[i] = new Pipe(this.scene,this.scene.sys.canvas.width + y* this.distance ,-this.scene.sys.canvas.height + yRandom ,"column").setDisplaySize(70,800);
            this.arrayPipe[i+1] = new Pipe(this.scene,this.scene.sys.canvas.width + y* this.distance , yRandom + this.blank, "column").setDisplaySize(70,800);
            // this.add.existing( new  Phaser.GameObjects.Image(this,410, 0,"column"));
            y+=1;
        }

    }
    update(){
        this.arrayPipe.forEach(pipe => pipe.update());
        if(this.arrayPipe[0].x < -70 ){
            for(var i = 0 ; i <= 2 ; i+=2){
                this.arrayPipe[i].x = this.arrayPipe[i+2].x;
                this.arrayPipe[i].flagAddScore = this.arrayPipe[i+2].flagAddScore;
                this.arrayPipe[i].y = this.arrayPipe[i+2].y;
                this.arrayPipe[i+1].x  = this.arrayPipe[i+3].x;
                this.arrayPipe[i+1].y  = this.arrayPipe[i+3].y;
            }
            var random = Phaser.Math.Between(80, 480);
            this.arrayPipe[4].x = this.arrayPipe[2].x + this.distance ;
            this.arrayPipe[5].x = this.arrayPipe[2].x + this.distance ;
            this.arrayPipe[4].y =  -this.scene.sys.canvas.height + random;
            this.arrayPipe[5].y = random + this.blank;
            this.arrayPipe[4].flagAddScore = false;
        }
    }

}