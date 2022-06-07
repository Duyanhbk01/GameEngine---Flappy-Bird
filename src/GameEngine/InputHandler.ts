import { SceneManager } from './SceneManager';

export class InputHandler{
    private scenes: SceneManager;

    private queueOfPointer: PointerEvent[] = [];
    private queueOfKeyBoard: KeyboardEvent[] = [];
    private callBacks: Map<string,Function>; // moi co 1 function kia`
    private canvas : HTMLElement;
    // private callBacks = {[key: string]: }
    constructor(scenes : SceneManager) {
        this.scenes = scenes;
        this.callBacks = new Map();
    // }
    // InputHandler(time: any,delta: any): void {
    //     this.scenes.getCurrentScene().InputHandler(time,delta,this.scenes);
        this.canvas = document.getElementsByTagName('canvas')[0];
        this.canvas.addEventListener('pointerdown', (event) => {
            this.queueOfPointer.push(event)
            // console.log(this.canvas);
        })
        this.canvas.addEventListener('keypress', (event) => {
            // Something
            this.queueOfKeyBoard.push(event)
        })
    }

    on(key: string, callback: Function) {
        this.callBacks.set(key, callback);
    }

    processInput() {
        while (this.queueOfPointer.length > 0) {
            var event = this.queueOfPointer.pop();
            var input = event.type + this.scenes.getCurrentSceneName();
            this.callBacks.get(input)(this.canvas,event);
        // .forEach(callback => callback())
        }
    }

}