export class GameObjectText{
    x: number;
    y: number;
    label: string;
    number: number;
    constructor(x: number, y: number, label: string,number: number){
        this.x = x;
        this.y = y;
        this.label = label;
        this.number = number;
    }
    update(number:number){
        this.number = number;
    }
}