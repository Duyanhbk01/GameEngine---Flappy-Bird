

export class TextureManager {
    private dataImage : Map<string,HTMLImageElement>;
    constructor(){
        this.dataImage = new Map();
    }
    addImage(key: string, value: string) {
        if(this.dataImage.get(key)){
            return;
        }
        else{
            var image = new Image();
            image.src = value;;
            this.dataImage.set(key, image);
        }
    }
    getImage(key: string) : HTMLImageElement {
       return this.dataImage.get(key);
    }
}