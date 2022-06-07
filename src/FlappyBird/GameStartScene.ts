import { SceneManager } from './../GameEngine/SceneManager';
import { GameObject } from "../GameEngine/GameObject";
import { Scene } from "../GameEngine/Scene";
import { InputHandler } from '../GameEngine/InputHandler';
export class GameStartScene extends Scene {
        private d : boolean = false;
        constructor(name: string, width: number, height: number , inputHandler : InputHandler){
           super(name,width,height,inputHandler); 
           // create object
           this.loadAssets(["background","floorground","bird","newgame","startgame"],["../../public/image/bg.png","../../public/image/fg.png","../../public/image/bird.png","../../public/image/newgame.png","../../public/image/startgame.png"]);
           this.addgameObject(new GameObject(0,0,800,800,"background"));
           this.addgameObject(new GameObject(0,800,800,100,"floorground"));
           this.addgameObject(new GameObject(100,400,70,55,"bird"));
           this.addgameObject(new GameObject(width/2-60,300,120,90,"newgame"));
           this.addgameObject(new GameObject(width/2-100,200,200,90,"startgame"));
           this.inputHandler.on('pointerdown' + name, (canvas: HTMLCanvasElement,event :PointerEvent ) => {
                // console.log(event);
                if(this.scenes.getCurrentSceneName() == "GameStartScene"){
                        var data = this.getMousePosition(canvas,event);
                        if(data[0]>=this.width/2-60 && data[0] <= this.width/2-60 + 120 && data[1]>= 300 && data[1] <= 300+90){
                                this.scenes.changeScene("GamePlayScene"); 
                        }
                }
            })
        }
        getMousePosition(canvas : any, event : any) {
                let rect = canvas.getBoundingClientRect();
                let x = event.clientX - rect.left;
                let y = event.clientY - rect.top;
                return [x,y];
        }
}