
import { GameStateManager } from './GameStateManager';

import {Scene} from "./Scene";
export class SceneManager {
    private scenes : Scene[];
    private gameStateManager:GameStateManager;
    public currentScene : Scene;
    constructor(){
        this.scenes = [];
        this.gameStateManager = new GameStateManager();
    }
    changeScene(scene: string):void{
        // console.log(22);
        // console.log(this.gameStateManager.getState());
        this.setCurrentScene(scene);
    }
    setCurrentScene(scene: string):void{
        for(var i = 0; i < this.scenes.length; i++){
            if(this.scenes[i].name == scene){
                this.currentScene = this.scenes[i];
            }
        }
    }
    update(time: number,delta :number){
        // this.scenes.forEach( scene => {scene.update(time,delta )} );
        this.getCurrentScene().update(time,delta);
    }
    addScene(scene: Scene){
        this.scenes.push(scene);
    }
    startScene(){
        this.currentScene = this.scenes[0];
    }
    getCurrentSceneName() : string {
        return this.currentScene.name;
    }
    getCurrentScene(){
        // console.log(this.scenes[this.gameStateManager.getState()]);
        return this.currentScene;
        // return this.scenes[2];
    }
    
}