

import {Scene} from "./Scene";
export class SceneManager {
    private scenes : Scene[];
    public currentScene : Scene;
    constructor(){
        this.scenes = [];
    }
    changeScene(scene: string):void{
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
        return this.currentScene;
    }
    
}