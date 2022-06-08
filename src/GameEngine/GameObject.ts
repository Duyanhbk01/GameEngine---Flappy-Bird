export class GameObject{
    x: number;
    y: number;
    width: number;
    height: number;
    imageKey: string;
    rotate : number;
    depth : number = 0; 
    constructor(x: number, y: number, width: number, height: number, name: string){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.imageKey = name;
    }
}