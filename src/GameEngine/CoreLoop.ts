import { InputHandler } from './InputHandler';
import { Renderer } from "./Renderer";
import { SceneManager } from "./SceneManager";
import { Scene } from "./Scene";
export class CoreLoop{
    private scenes: SceneManager;
    private renderer : Renderer;
    public input : InputHandler;
    private lastTime: number;
    constructor(width:number, height:number){
        this.scenes = new SceneManager();
        this.renderer = new Renderer(width, height);
        this.input = new InputHandler(this.scenes);
    }
    start():void{
        this.scenes.startScene();
        this.lastTime = window.performance.now();
        requestAnimationFrame(() => this.loop());
    }
    loop():void{
        const time = window.performance.now();
        const delta = time - this.lastTime;
        this.input.processInput();
        this.scenes.update(time, delta);
        // console.log(this.scenes.getCurrentScene());
        this.renderer.render(this.scenes.getCurrentScene());
        this.lastTime = time;
        requestAnimationFrame(() => this.loop());
    }
    // Check single responsibility principle
    addScene(scene: Scene):void{
        this.scenes.addScene(scene);
        scene.scenes = this.scenes;
    }
    getInputHandler() {
        return this.input;
    }
}
