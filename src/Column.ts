import { GameObject } from "./GameEngine/GameObject";


var BLANK = 240;
var DISTANCE = 350;
var COLUMNSPEED = 4;
export class Column extends GameObject {
  public blank : number;
  private distance : number;
  private columnspeed : number;

  public arrray : Array<number[]>;
  constructor(x:number,  y :number , COLUMNWIDTH: any, COLUMNHEIGHT: any, suface:any) {
    super(x, y, COLUMNWIDTH, COLUMNHEIGHT,suface);
    this.blank = BLANK;
    this.distance = DISTANCE;
    this.columnspeed = COLUMNSPEED;
  }
  public update(delta : number){
    this.x-=this.columnspeed*delta/16;
  }
}