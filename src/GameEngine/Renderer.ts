import { GameObjectText } from './GameObjectText';
import { GameObject } from "./GameObject";
import { Scene } from "./Scene";
import { Sprite } from "./Sprite";

function component(width: number, height: number) {
  const element = document.createElement("div");

  element.innerHTML = `<div id="container" style="width:100%;height:900px">
      <div style="margin: auto; width:800px; height:900px;">
          <canvas  id="myChart" width=${width} height=${height}></canvas>   
      </div>
     </div>`;

  return element;
}

export class Renderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  constructor(width: number, height: number) {
    document.body.appendChild(component(width, height));
    this.canvas = document.getElementsByTagName("canvas")[0];
    this.ctx = this.canvas.getContext("2d");
    this.ctx.font = "30px consolas";
  }
  render(scene: Scene) {
    this.ctx.clearRect(0, 0, scene.width, scene.height);
    scene.getAllGameObject().sort((a,b)=>a.depth - b.depth).forEach((object) => {
      
      this.renderGameObject(object,scene.getTexture(object.imageKey),scene);
    });
    scene.getAllGameObjectText().forEach((object) => {
      this.renderTextObject(object);
    });
  }
  private renderTextObject(object: GameObjectText) {
    if (object.label == "") {
      this.ctx.fillText(object.number.toString(), object.x, object.y);
    }
    else {
      this.ctx.fillText(object.label + object.number, object.x, object.y);
    }
  }
  private renderRotatedObject(object: any, scene : Scene) {
      this.ctx.save();
      this.ctx.translate(object.x, object.y);
      this.ctx.rotate((+object.rotate * Math.PI) / 180);
      this.ctx.drawImage(scene.getTexture(object.imageKey),0,0,object.width,object.height);
      this.ctx.restore();
  }
  private async renderGameObject(object: GameObject,image:HTMLImageElement , scene:Scene){
    this.ctx.save();
    this.ctx.translate(object.x, object.y);
    const rotate = object.rotate || 0;
    this.ctx.rotate((rotate * Math.PI) / 180);
    this.ctx.drawImage(scene.getTexture(object.imageKey),0,0,object.width,object.height);
    this.ctx.restore();
  }
}
