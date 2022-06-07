import { Score } from './../Score';
import { CoreLoop } from "../GameEngine/CoreLoop"
import { GameObject } from "../GameEngine/GameObject";
import { GamePlayScene } from "./GamePlayScene"
import { GameStartScene } from "./GameStartScene"
import { GameOverScene } from "./GameOverScene"
class FlappyBirdGame extends CoreLoop {
    private score : Score;
    constructor(width :number, height: number){
        super(width,height);
        this.score = new Score();
    }
    getScore(): Score{
        return this.score;
    }
}

const flappyBirdGame = new FlappyBirdGame(800,900)
const gameStartScene = new GameStartScene("GameStartScene",800,900,flappyBirdGame.getInputHandler());
const gamePlayScene = new GamePlayScene("GamePlayScene",800,900,flappyBirdGame.getScore(),flappyBirdGame.getInputHandler());
const gameOverScene = new GameOverScene("GameOverScene",800,900,flappyBirdGame.getScore(),flappyBirdGame.getInputHandler());
flappyBirdGame.addScene(gameStartScene);
flappyBirdGame.addScene(gamePlayScene);
flappyBirdGame.addScene(gameOverScene);
flappyBirdGame.start()