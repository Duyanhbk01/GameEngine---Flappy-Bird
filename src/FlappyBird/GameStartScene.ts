import { SceneManager } from './../GameEngine/SceneManager';
import { GameObject } from "../GameEngine/GameObject";
import { GameStateManager } from "../GameEngine/GameStateManager";
import { Scene } from "../GameEngine/Scene";
import { InputHandler } from '../GameEngine/InputHandler';
export class GameStartScene extends Scene {
        private d : boolean = false;
        constructor(name: string, width: number, height: number , inputHandler : InputHandler){
           super(name,width,height,inputHandler); 
           // create object
           this.addgameObject(new GameObject(0,0,800,800,"background"));
           this.loadData("background","../../public/image/bg.png" );
           this.addgameObject(new GameObject(0,800,800,100,"floorground"));
           this.loadData("floorground","../../public/image/fg.png" );
           this.addgameObject(new GameObject(100,400,70,55,"bird"));
           this.loadData("bird","../../public/image/bird.png" );
           this.addgameObject(new GameObject(width/2-60,300,120,90,"newgame"));
           this.loadData("newgame","../../public/image/newgame.png");
           this.addgameObject(new GameObject(width/2-100,200,200,90,"startgame"));
           this.loadData("startgame","../../public/image/startgame.png");
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

//        async loadAssets() {
//                 const x = this.loader.loadImage('./image')
//                 const y =...this.loader.
//                 await Promise.all([x, y])
//                 gameScene.startGame()
//         }
}