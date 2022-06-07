import { Loader } from './loader';
import { SceneManager } from './SceneManager';
import { GameObject } from './GameObject';
import { GameObjectText } from './GameObjectText';
import { TextureManager } from './TextureManager';
import { InputHandler } from './InputHandler';

export class Scene{
    public name: string;
    public width: number;
    public height: number;
    private gameObject :Array<GameObject>;
    private gameObjectText :Array<GameObjectText>;
    private loader: Loader;
    private textureManager : TextureManager;
    public inputHandler: InputHandler;
    public scenes : SceneManager;
    public status :boolean = false;

    constructor(newname: string,width : number,height : number , inputHandler : InputHandler){
        this.name = newname;
        this.gameObject = new Array<GameObject>();
        this.gameObjectText = new Array<GameObjectText>();
        this.width = width;
        this.height = height;
        this.textureManager = new TextureManager();
        this.loader = new Loader();
        this.inputHandler = inputHandler;
    }
    loadAssets(imageKey: string[], pathOfImage: string[]) {
        pathOfImage.forEach(async (image) => {
            const x =  this.loader.loadImage(image)
            await Promise.all([x]);
        })
        for(var i = 0 ; i < imageKey.length ; i++){
            this.textureManager.addImage(imageKey[i], pathOfImage[i]);
        }
        this.status = true;
        }
    preload(url:string) {
        this.loader.loadImage(url)
    }
    loadData(imageKey: string, pathOfImage: string){
        this.preload(pathOfImage);
        this.textureManager.addImage(imageKey, pathOfImage);
    }
    addgameObject(gameObject: GameObject) : void {
        let lengthOfGameObject = this.gameObject.length;
        this.gameObject[lengthOfGameObject] = gameObject;
    }
    addgameObjectText(gameObjectText:any){
        let lengthOfGameObjectText = this.gameObjectText.length;
        this.gameObjectText[lengthOfGameObjectText] = gameObjectText;
    }

    public update(time: number, delta: number) : void {
    }
    getAllGameObjectText(): Array<any> {
        if(this.gameObjectText[0]){
            return this.gameObjectText;
        }  
        else return [];
    }
    getAllGameObject(): Array<any>{
        if(this.gameObject[0])
            return this.gameObject;
        else return [];
    }
    InputHandler(time: number,delta :number , scene : SceneManager  ){
    }
    getTexture(key : string) : HTMLImageElement{
        return this.textureManager.getImage(key);
    }
}