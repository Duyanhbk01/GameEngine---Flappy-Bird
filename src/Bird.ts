
import { Sprite } from "./GameEngine/Sprite";


var SPEEDFLY = -8;

var G = 4;
var Gx = 20;
export class Bird extends Sprite{
  public speedy : number;
  public speedx : number;
  public state : boolean;

  public constructor(x:number,  y :number , width: number, height: number, imageKey:string , frame: string[]) {
    super(x, y, width, height,imageKey ,frame);
    this.speedy = 0;
    this.speedx = 500;
    this.rotate = 10;
    this.state = false;
    this.depth = 0;
  }
  public update(deltaTime : number): void{
    var Time = deltaTime/100;
    if(this.speedx>1.5)this.speedx = 0.05;
    this.y += this.speedy*Time + 0.5*G*Time*Time;
    this.x += this.speedx*Time + 0.5*Gx*Time*Time;
    // console.log(this.speedy);

   
    this.speedy += G;
    this.speedx += Gx;
     // this.rotate = Math.min((this.speedy / 100),1) * this.rotate;

    if (this.speedy > 0) {
      	this.rotate++;  
    }
	else {
		this.rotate--;
	}
  }
  public reset(x: number, y: number): void{
    this.x =  x;
    this.y = y;
	this.speedy = 0;
    this.speedx = 500;
  }
  public fly(): void{
	this.rotate = 0;
    this.speedy = -60;
    this.speedx = 500;
  }
}