import * as Phaser from 'phaser';
import GameOverScene from './scenes/GameOverScene';
import StartScene from './scenes/StartScene';
import PlayScene from './scenes/PlayScene';
import PauseScene from './scenes/PauseScene';
import LoadScene from './scenes/LoadScene';
const config = {
    name: 'app',
    type: Phaser.AUTO,
    width: 410,
    height: 800,
    scene: [LoadScene,StartScene,PlayScene,PauseScene,GameOverScene],
    physics: {
    default: 'arcade',
    arcade: {
        debug: false
    }
},
};

var game = new Phaser.Game(config);