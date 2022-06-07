import { GameObject } from "./GameEngine/GameObject";

var COLUMNWIDTH = 70;
var COLUMNHEIGHT = 900;
var BLANK = 240;
var DISTANCE = 350;
var COLUMNSPEED = 2;
var WINDOWWIDTH  = 800;
var WINDOWHEIGHT = 900;
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
    // this.arrray = new Array(3);
    // for(var i = 0 ; i < 3 ; i++){
    //   this.arrray[i] = new Array(2);
    // }
    // for(var i = 1 ; i < 4 ; i++){
    //   this.arrray[i-1][0] = WINDOWWIDTH +i*this.distance;
    //   this.arrray[i-1][1] = Math.floor(Math.random() * (WINDOWHEIGHT-60 - this.blank + 1)) + 60;
    // } 
  }
  public update(){
    for(var i = 0 ; i < 3 ; i++){
      this.x-=this.columnspeed;
    }
    // if(this.arrray[0][0] < -this.width ){
    //   for(var i = 0 ; i < 2 ; i++){
    //     this.arrray[i][0] = this.arrray[i+1][0];
    //     this.arrray[i][1] = this.arrray[i+1][1];
    //   }
      
    //   this.arrray[2][0] = this.arrray[1][0] + this.distance;
    //   this.arrray[2][1] = Math.floor(Math.random() * (WINDOWHEIGHT-this.blank-60 + 1)) + 60;
      // console.log(arrray[2][1]);
    // }
  }
  public reset(){
    // for(var i = 0 ; i < 3 ; i++){
    //   this.arrray[i][0]= WINDOWWIDTH +i*this.distance;
    // }
  }


}