import {GameObject} from "./GameObject"
export class Sprite extends GameObject {
    frameKeys: string[];
    currentFrameId: number = 0;
    count: number = 6;
    constructor(x:number,  y :number , width: number, height: number, imageKey:string , frames : string[]){
        super(x,y,width,height,imageKey);
        this.frameKeys = frames;
    }
    setCurrentFrame(){
        this.imageKey = this.frameKeys[0];
    }
    updateFrame(){
        this.currentFrameId = this.currentFrameId > (this.frameKeys.length-2) ? 0 : this.currentFrameId + 1;
        this.imageKey = this.frameKeys[this.currentFrameId];
    }
}