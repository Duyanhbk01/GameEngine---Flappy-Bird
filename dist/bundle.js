/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Bird.ts":
/*!*********************!*\
  !*** ./src/Bird.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bird = void 0;
var Sprite_1 = __webpack_require__(/*! ./GameEngine/Sprite */ "./src/GameEngine/Sprite.ts");
var SPEEDFLY = -8;
var G = 4;
var Gx = 20;
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(x, y, width, height, imageKey, frame) {
        var _this = _super.call(this, x, y, width, height, imageKey, frame) || this;
        _this.speedy = 0;
        _this.speedx = 500;
        _this.rotate = 10;
        _this.state = false;
        _this.depth = 0;
        return _this;
    }
    Bird.prototype.update = function (deltaTime) {
        var Time = deltaTime / 100;
        if (this.speedx > 1.5)
            this.speedx = 0.05;
        this.y += this.speedy * Time + 0.5 * G * Time * Time;
        this.x += this.speedx * Time + 0.5 * Gx * Time * Time;
        // console.log(this.speedy);
        this.speedy += G;
        this.speedx += Gx;
        // this.rotate = Math.min((this.speedy / 100),1) * this.rotate;
        if (this.speedy > 0) {
            this.rotate++;
        }
        else {
            this.rotate--;
        }
    };
    Bird.prototype.reset = function (x, y) {
        this.x = x;
        this.y = y;
        this.speedy = 0;
        this.speedx = 500;
    };
    Bird.prototype.fly = function () {
        this.rotate = 0;
        this.speedy = -60;
        this.speedx = 500;
    };
    return Bird;
}(Sprite_1.Sprite));
exports.Bird = Bird;


/***/ }),

/***/ "./src/Column.ts":
/*!***********************!*\
  !*** ./src/Column.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Column = void 0;
var GameObject_1 = __webpack_require__(/*! ./GameEngine/GameObject */ "./src/GameEngine/GameObject.ts");
var COLUMNWIDTH = 70;
var COLUMNHEIGHT = 900;
var BLANK = 240;
var DISTANCE = 350;
var COLUMNSPEED = 2;
var WINDOWWIDTH = 800;
var WINDOWHEIGHT = 900;
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column(x, y, COLUMNWIDTH, COLUMNHEIGHT, suface) {
        var _this = _super.call(this, x, y, COLUMNWIDTH, COLUMNHEIGHT, suface) || this;
        _this.blank = BLANK;
        _this.distance = DISTANCE;
        _this.columnspeed = COLUMNSPEED;
        return _this;
        // this.arrray = new Array(3);
        // for(var i = 0 ; i < 3 ; i++){
        //   this.arrray[i] = new Array(2);
        // }
        // for(var i = 1 ; i < 4 ; i++){
        //   this.arrray[i-1][0] = WINDOWWIDTH +i*this.distance;
        //   this.arrray[i-1][1] = Math.floor(Math.random() * (WINDOWHEIGHT-60 - this.blank + 1)) + 60;
        // } 
    }
    Column.prototype.update = function () {
        for (var i = 0; i < 3; i++) {
            this.x -= this.columnspeed;
        }
        // if(this.arrray[0][0] < -this.width ){
        //   for(var i = 0 ; i < 2 ; i++){
        //     this.arrray[i][0] = this.arrray[i+1][0];
        //     this.arrray[i][1] = this.arrray[i+1][1];
        //   }
        //   this.arrray[2][0] = this.arrray[1][0] + this.distance;
        //   this.arrray[2][1] = Math.floor(Math.random() * (WINDOWHEIGHT-this.blank-60 + 1)) + 60;
        // console.log(arrray[2][1]);
        // }
    };
    Column.prototype.reset = function () {
        // for(var i = 0 ; i < 3 ; i++){
        //   this.arrray[i][0]= WINDOWWIDTH +i*this.distance;
        // }
    };
    return Column;
}(GameObject_1.GameObject));
exports.Column = Column;


/***/ }),

/***/ "./src/FlappyBird/FlappyBirdGame.ts":
/*!******************************************!*\
  !*** ./src/FlappyBird/FlappyBirdGame.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Score_1 = __webpack_require__(/*! ./../Score */ "./src/Score.ts");
var CoreLoop_1 = __webpack_require__(/*! ../GameEngine/CoreLoop */ "./src/GameEngine/CoreLoop.ts");
var GamePlayScene_1 = __webpack_require__(/*! ./GamePlayScene */ "./src/FlappyBird/GamePlayScene.ts");
var GameStartScene_1 = __webpack_require__(/*! ./GameStartScene */ "./src/FlappyBird/GameStartScene.ts");
var GameOverScene_1 = __webpack_require__(/*! ./GameOverScene */ "./src/FlappyBird/GameOverScene.ts");
var FlappyBirdGame = /** @class */ (function (_super) {
    __extends(FlappyBirdGame, _super);
    function FlappyBirdGame(width, height) {
        var _this = _super.call(this, width, height) || this;
        _this.score = new Score_1.Score();
        return _this;
    }
    FlappyBirdGame.prototype.getScore = function () {
        return this.score;
    };
    return FlappyBirdGame;
}(CoreLoop_1.CoreLoop));
var flappyBirdGame = new FlappyBirdGame(800, 900);
var gameStartScene = new GameStartScene_1.GameStartScene("GameStartScene", 800, 900, flappyBirdGame.getInputHandler());
var gamePlayScene = new GamePlayScene_1.GamePlayScene("GamePlayScene", 800, 900, flappyBirdGame.getScore(), flappyBirdGame.getInputHandler());
var gameOverScene = new GameOverScene_1.GameOverScene("GameOverScene", 800, 900, flappyBirdGame.getScore(), flappyBirdGame.getInputHandler());
flappyBirdGame.addScene(gameStartScene);
flappyBirdGame.addScene(gamePlayScene);
flappyBirdGame.addScene(gameOverScene);
flappyBirdGame.start();


/***/ }),

/***/ "./src/FlappyBird/GameOverScene.ts":
/*!*****************************************!*\
  !*** ./src/FlappyBird/GameOverScene.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameOverScene = void 0;
var GameObject_1 = __webpack_require__(/*! ../GameEngine/GameObject */ "./src/GameEngine/GameObject.ts");
var Scene_1 = __webpack_require__(/*! ../GameEngine/Scene */ "./src/GameEngine/Scene.ts");
var GameObjectText_1 = __webpack_require__(/*! ../GameEngine/GameObjectText */ "./src/GameEngine/GameObjectText.ts");
var GameOverScene = /** @class */ (function (_super) {
    __extends(GameOverScene, _super);
    function GameOverScene(name, width, height, score, inputHandler) {
        var _this = _super.call(this, name, width, height, inputHandler) || this;
        _this.d = false;
        _this.bGround = new GameObject_1.GameObject(0, 0, 800, 800, "background");
        _this.addgameObject(_this.bGround);
        _this.loadData("background", "../../public/image/bg.png");
        _this.fGround = new GameObject_1.GameObject(0, 800, 800, 100, "floorground");
        _this.addgameObject(_this.fGround);
        _this.loadData("floorground", "../../public/image/fg.png");
        var buttonPlay = new GameObject_1.GameObject(_this.width / 2 - 120, 450, 120, 90, "newgame");
        _this.addgameObject(buttonPlay);
        _this.loadData("newgame", "../../public/image/newgame.png");
        var rank = new GameObject_1.GameObject(_this.width / 2 - 150, 300, 300, 150, "best");
        _this.addgameObject(rank);
        _this.loadData("best", "../../public/image/best.png");
        var gameoverText = new GameObject_1.GameObject(_this.width / 2 - 150, 200, 300, 80, "gameover");
        _this.addgameObject(gameoverText);
        _this.loadData("gameover", "../../public/image/gameover.png");
        var buttonHighscore = new GameObject_1.GameObject(_this.width / 2 + 10, 460, 110, 75, "toprankgame");
        _this.addgameObject(buttonHighscore);
        _this.loadData("toprankgame", "../../public/image/toprankgame.png");
        _this.score = score;
        var sizeOfscore = String(_this.score.getScore()).length;
        _this.currentScore = new GameObjectText_1.GameObjectText((_this.width / 2 + 95 - sizeOfscore * 10), 370, "", _this.score.getScore());
        _this.addgameObjectText(_this.currentScore);
        var sizeOfmaxscore = String(_this.score.getMaxscore()).length;
        _this.maxScore = new GameObjectText_1.GameObjectText((_this.width / 2 + 95 - sizeOfmaxscore * 10), 430, "", _this.score.getMaxscore());
        _this.addgameObjectText(_this.maxScore);
        //     if(this.score.getScore() == this.score.getMaxscore()){
        //         this.addgameObject(new GameObject(this.width/2 -120,350,90,70,"goldRank"));
        //         this.loadData("goldRank","../../public/image/goldRank.png" );
        //     }
        //     else{
        //         this.addgameObject(new GameObject(this.width/2 -120,350,90,70,"bronzeRank"));
        //         this.loadData("bronzeRank","../../public/image/bronzeRank.png" );
        //     }
        _this.inputHandler.on('pointerdown' + name, function (canvas, event) {
            // console.log(event);
            if (_this.scenes.getCurrentSceneName() == "GameOverScene") {
                var data = _this.getMousePosition(canvas, event);
                if (data[0] >= _this.width / 2 - 120 && data[0] <= _this.width / 2 && data[1] >= 450 && data[1] <= 450 + 90) {
                    _this.scenes.changeScene("GamePlayScene");
                    _this.score.setScore(0);
                }
            }
        });
        return _this;
    }
    GameOverScene.prototype.update = function (time, delta) {
        this.score.addstoreScore();
        this.currentScore.update(this.score.getScore());
        this.maxScore.update(this.score.getMaxscore());
    };
    GameOverScene.prototype.getMousePosition = function (canvas, event) {
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        return [x, y];
    };
    return GameOverScene;
}(Scene_1.Scene));
exports.GameOverScene = GameOverScene;


/***/ }),

/***/ "./src/FlappyBird/GamePlayScene.ts":
/*!*****************************************!*\
  !*** ./src/FlappyBird/GamePlayScene.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GamePlayScene = void 0;
var Bird_1 = __webpack_require__(/*! ../Bird */ "./src/Bird.ts");
var Column_1 = __webpack_require__(/*! ../Column */ "./src/Column.ts");
var GameObject_1 = __webpack_require__(/*! ../GameEngine/GameObject */ "./src/GameEngine/GameObject.ts");
var GameObjectText_1 = __webpack_require__(/*! ../GameEngine/GameObjectText */ "./src/GameEngine/GameObjectText.ts");
var Scene_1 = __webpack_require__(/*! ../GameEngine/Scene */ "./src/GameEngine/Scene.ts");
var GamePlayScene = /** @class */ (function (_super) {
    __extends(GamePlayScene, _super);
    function GamePlayScene(name, width, height, score, inputHandler) {
        var _this = _super.call(this, name, width, height, inputHandler) || this;
        _this.count = 0;
        _this.bGround = new GameObject_1.GameObject(0, 0, 800, 800, "background");
        _this.addgameObject(_this.bGround);
        _this.loadData("background", "../../public/image/bg.png");
        _this.fGround = new GameObject_1.GameObject(0, 800, 800, 100, "floorground");
        _this.addgameObject(_this.fGround);
        _this.loadData("floorground", "../../public/image/fg.png");
        _this.bird = new Bird_1.Bird(100, 400, 70, 55, "bird", ["birdflyup", "bird", "birdflydown"]);
        _this.addgameObject(_this.bird);
        _this.loadData("bird", "../../public/image/bird.png");
        _this.loadData("birdflyup", "../../public/image/birdflyup.png");
        _this.loadData("birdflydown", "../../public/image/birdflydown.png");
        _this.loadData("column", "../../public/image/column.png");
        // console.log(this.arrColumn);
        _this.arrColumn = new Array(3);
        _this.blank = 240;
        _this.distance = 350;
        _this.columnspeed = 2;
        var y = 1;
        for (var i = 0; i < 6; i += 2) {
            var random = Math.floor(Math.random() * (_this.height - 60 - _this.blank + 1)) + 60;
            _this.arrColumn[i] = new Column_1.Column(_this.width + (y) * _this.distance, -_this.height + random, 70, 900, "column");
            _this.arrColumn[i + 1] = new Column_1.Column(_this.width + (y) * _this.distance, random + _this.blank, 70, 900, "column");
            _this.addgameObject(_this.arrColumn[i]);
            _this.addgameObject(_this.arrColumn[i + 1]);
            y++;
        }
        _this.score = score;
        _this.dataScore = new GameObjectText_1.GameObjectText((_this.width - 40 * 5) / 2, 100, "Score: ", _this.score.getScore());
        _this.addgameObjectText(_this.dataScore);
        _this.inputHandler.on('pointerdown' + name, function () {
            // console.log(this.arrColumn);
            // console.log("GamePlayScene");
            if (_this.scenes.getCurrentSceneName() == "GamePlayScene") {
                _this.bird.fly();
                _this.count = 0;
            }
        });
        return _this;
    }
    GamePlayScene.prototype.InputHandler = function (time, delta, scenes) {
    };
    GamePlayScene.prototype.getMousePosition = function (canvas, event) {
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        return [x, y];
    };
    GamePlayScene.prototype.update = function (time, delta) {
        // Game live
        if (this.isGameOver(this.bird, this.arrColumn) == false) {
            this.bird.update(delta);
            this.arrColumn.forEach(function (obj) { obj.update(); });
            if (this.arrColumn[0].x < -this.arrColumn[0].width) {
                for (var i = 0; i <= 2; i += 2) {
                    this.arrColumn[i].x = this.arrColumn[i + 2].x;
                    this.arrColumn[i].y = this.arrColumn[i + 2].y;
                    this.arrColumn[i + 1].x = this.arrColumn[i + 3].x;
                    this.arrColumn[i + 1].y = this.arrColumn[i + 3].y;
                }
                var random = Math.floor(Math.random() * (this.height - 60 - this.blank + 1)) + 60;
                this.arrColumn[4].x = this.arrColumn[2].x + this.distance;
                this.arrColumn[5].x = this.arrColumn[2].x + this.distance;
                this.arrColumn[4].y = -this.height + random;
                this.arrColumn[5].y = random + this.blank;
            }
            if (this.count <= 11) {
                // console.log(this.count); 
                this.bird.updateFrame();
                if (this.count == 11)
                    this.bird.setCurrentFrame();
            }
            this.count++;
            this.score.update(this.bird, this.arrColumn, this.rectCollision);
            // console.log(this.score.getScore());
            this.dataScore.update(this.score.getScore());
        }
        else {
            console.log("die");
            this.bird.reset(200, 200);
            var y = 1;
            for (var i = 0; i < 6; i += 2) {
                this.arrColumn[i].x = this.width + y * this.distance;
                this.arrColumn[i + 1].x = this.width + y * this.distance;
                y++;
            }
            this.scenes.changeScene("GameOverScene");
        }
    };
    GamePlayScene.prototype.rectCollision = function (rect1, rect2) {
        if (rect1[0] <= rect2[0] + rect2[2] && rect2[0] <= rect1[0] + rect1[2] && rect1[1] <= rect2[1] + rect2[3] && rect2[1] <= rect1[1] + rect1[3])
            return true;
        return false;
    };
    GamePlayScene.prototype.isGameOver = function (bird, arrColumn) {
        for (var i = 0; i < 6; i += 2) {
            var rectBird = [bird.x, bird.y, bird.width, bird.height];
            var rectColumn1 = [arrColumn[i].x, arrColumn[i].y, arrColumn[i].width, arrColumn[i].height];
            var rectColumn2 = [arrColumn[i + 1].x, arrColumn[i + 1].y, arrColumn[i + 1].width, arrColumn[i + 1].height];
            if (this.rectCollision(rectBird, rectColumn1) == true || this.rectCollision(rectBird, rectColumn2) == true)
                return true;
        }
        if (bird.y + bird.height < 0 || bird.y + bird.height > this.height)
            return true;
        return false;
    };
    return GamePlayScene;
}(Scene_1.Scene));
exports.GamePlayScene = GamePlayScene;


/***/ }),

/***/ "./src/FlappyBird/GameStartScene.ts":
/*!******************************************!*\
  !*** ./src/FlappyBird/GameStartScene.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameStartScene = void 0;
var GameObject_1 = __webpack_require__(/*! ../GameEngine/GameObject */ "./src/GameEngine/GameObject.ts");
var Scene_1 = __webpack_require__(/*! ../GameEngine/Scene */ "./src/GameEngine/Scene.ts");
var GameStartScene = /** @class */ (function (_super) {
    __extends(GameStartScene, _super);
    function GameStartScene(name, width, height, inputHandler) {
        var _this = _super.call(this, name, width, height, inputHandler) || this;
        _this.d = false;
        // create object
        _this.addgameObject(new GameObject_1.GameObject(0, 0, 800, 800, "background"));
        _this.loadData("background", "../../public/image/bg.png");
        _this.addgameObject(new GameObject_1.GameObject(0, 800, 800, 100, "floorground"));
        _this.loadData("floorground", "../../public/image/fg.png");
        _this.addgameObject(new GameObject_1.GameObject(100, 400, 70, 55, "bird"));
        _this.loadData("bird", "../../public/image/bird.png");
        _this.addgameObject(new GameObject_1.GameObject(width / 2 - 60, 300, 120, 90, "newgame"));
        _this.loadData("newgame", "../../public/image/newgame.png");
        _this.addgameObject(new GameObject_1.GameObject(width / 2 - 100, 200, 200, 90, "startgame"));
        _this.loadData("startgame", "../../public/image/startgame.png");
        _this.inputHandler.on('pointerdown' + name, function (canvas, event) {
            // console.log(event);
            if (_this.scenes.getCurrentSceneName() == "GameStartScene") {
                var data = _this.getMousePosition(canvas, event);
                if (data[0] >= _this.width / 2 - 60 && data[0] <= _this.width / 2 - 60 + 120 && data[1] >= 300 && data[1] <= 300 + 90) {
                    _this.scenes.changeScene("GamePlayScene");
                }
            }
        });
        return _this;
    }
    GameStartScene.prototype.getMousePosition = function (canvas, event) {
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        return [x, y];
    };
    return GameStartScene;
}(Scene_1.Scene));
exports.GameStartScene = GameStartScene;


/***/ }),

/***/ "./src/GameEngine/CoreLoop.ts":
/*!************************************!*\
  !*** ./src/GameEngine/CoreLoop.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CoreLoop = void 0;
var InputHandler_1 = __webpack_require__(/*! ./InputHandler */ "./src/GameEngine/InputHandler.ts");
var Renderer_1 = __webpack_require__(/*! ./Renderer */ "./src/GameEngine/Renderer.ts");
var SceneManager_1 = __webpack_require__(/*! ./SceneManager */ "./src/GameEngine/SceneManager.ts");
var CoreLoop = /** @class */ (function () {
    function CoreLoop(width, height) {
        this.scenes = new SceneManager_1.SceneManager();
        this.renderer = new Renderer_1.Renderer(width, height);
        this.input = new InputHandler_1.InputHandler(this.scenes);
    }
    CoreLoop.prototype.start = function () {
        var _this = this;
        this.scenes.startScene();
        this.lastTime = window.performance.now();
        requestAnimationFrame(function () { return _this.loop(); });
    };
    CoreLoop.prototype.loop = function () {
        var _this = this;
        var time = window.performance.now();
        var delta = time - this.lastTime;
        this.input.processInput();
        this.scenes.update(time, delta);
        // console.log(this.scenes.getCurrentScene());
        this.renderer.render(this.scenes.getCurrentScene());
        this.lastTime = time;
        requestAnimationFrame(function () { return _this.loop(); });
    };
    // Check single responsibility principle
    CoreLoop.prototype.addScene = function (scene) {
        this.scenes.addScene(scene);
        scene.scenes = this.scenes;
    };
    CoreLoop.prototype.getInputHandler = function () {
        return this.input;
    };
    return CoreLoop;
}());
exports.CoreLoop = CoreLoop;


/***/ }),

/***/ "./src/GameEngine/GameObject.ts":
/*!**************************************!*\
  !*** ./src/GameEngine/GameObject.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameObject = void 0;
var GameObject = /** @class */ (function () {
    function GameObject(x, y, width, height, name) {
        this.depth = 0; // thieu ne`
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.imageKey = name;
    }
    return GameObject;
}());
exports.GameObject = GameObject;


/***/ }),

/***/ "./src/GameEngine/GameObjectText.ts":
/*!******************************************!*\
  !*** ./src/GameEngine/GameObjectText.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameObjectText = void 0;
var GameObjectText = /** @class */ (function () {
    function GameObjectText(x, y, label, number) {
        this.x = x;
        this.y = y;
        this.label = label;
        this.number = number;
    }
    GameObjectText.prototype.update = function (number) {
        this.number = number;
    };
    return GameObjectText;
}());
exports.GameObjectText = GameObjectText;


/***/ }),

/***/ "./src/GameEngine/GameStateManager.ts":
/*!********************************************!*\
  !*** ./src/GameEngine/GameStateManager.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameStateManager = void 0;
var StateGame;
(function (StateGame) {
    StateGame[StateGame["startGame"] = 0] = "startGame";
    StateGame[StateGame["playGame"] = 1] = "playGame";
    StateGame[StateGame["endGame"] = 2] = "endGame";
})(StateGame || (StateGame = {}));
var GameStateManager = /** @class */ (function () {
    function GameStateManager() {
        this.currentState = StateGame.startGame;
    }
    GameStateManager.prototype.setState = function (newState) {
        // console.log(newState);
        this.currentState = newState;
        // console.log(this.currentState);
    };
    GameStateManager.prototype.getState = function () {
        return this.currentState;
    };
    return GameStateManager;
}());
exports.GameStateManager = GameStateManager;


/***/ }),

/***/ "./src/GameEngine/InputHandler.ts":
/*!****************************************!*\
  !*** ./src/GameEngine/InputHandler.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputHandler = void 0;
var InputHandler = /** @class */ (function () {
    // private callBacks = {[key: string]: }
    function InputHandler(scenes) {
        var _this = this;
        this.queueOfPointer = [];
        this.queueOfKeyBoard = [];
        this.scenes = scenes;
        this.callBacks = new Map();
        // }
        // InputHandler(time: any,delta: any): void {
        //     this.scenes.getCurrentScene().InputHandler(time,delta,this.scenes);
        this.canvas = document.getElementsByTagName('canvas')[0];
        this.canvas.addEventListener('pointerdown', function (event) {
            _this.queueOfPointer.push(event);
            // console.log(this.canvas);
        });
        this.canvas.addEventListener('keypress', function (event) {
            // Something
            _this.queueOfKeyBoard.push(event);
        });
    }
    InputHandler.prototype.on = function (key, callback) {
        this.callBacks.set(key, callback);
    };
    InputHandler.prototype.processInput = function () {
        while (this.queueOfPointer.length > 0) {
            var event = this.queueOfPointer.pop();
            var input = event.type + this.scenes.getCurrentSceneName();
            this.callBacks.get(input)(this.canvas, event);
            // .forEach(callback => callback())
        }
    };
    return InputHandler;
}());
exports.InputHandler = InputHandler;


/***/ }),

/***/ "./src/GameEngine/Renderer.ts":
/*!************************************!*\
  !*** ./src/GameEngine/Renderer.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Renderer = void 0;
function component(width, height) {
    var element = document.createElement("div");
    element.innerHTML = "<div id=\"container\" style=\"width:100%;height:900px\">\n      <div style=\"margin: auto; width:800px; height:900px;\">\n          <canvas  id=\"myChart\" width=".concat(width, " height=").concat(height, "></canvas>   \n      </div>\n     </div>");
    return element;
}
var Renderer = /** @class */ (function () {
    function Renderer(width, height) {
        document.body.appendChild(component(width, height));
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.ctx = this.canvas.getContext("2d");
        this.ctx.font = "30px consolas";
    }
    Renderer.prototype.render = function (scene) {
        var _this = this;
        this.ctx.clearRect(0, 0, scene.width, scene.height);
        scene.getAllGameObject().sort(function (a, b) { return a.depth - b.depth; }).forEach(function (object) {
            _this.renderGameObject(object, scene.getTexture(object.imageKey), scene);
        });
        scene.getAllGameObjectText().forEach(function (object) {
            _this.renderTextObject(object);
        });
    };
    Renderer.prototype.renderTextObject = function (object) {
        if (object.label == "") {
            this.ctx.fillText(object.number.toString(), object.x, object.y);
        }
        else {
            this.ctx.fillText(object.label + object.number, object.x, object.y);
        }
        // console.log(object);
    };
    Renderer.prototype.renderRotatedObject = function (object, scene) {
        this.ctx.save();
        this.ctx.translate(object.x, object.y);
        this.ctx.rotate((+object.rotate * Math.PI) / 180);
        this.ctx.drawImage(scene.getTexture(object.imageKey), 0, 0, object.width, object.height);
        this.ctx.restore();
    };
    Renderer.prototype.renderGameObject = function (object, image, scene) {
        return __awaiter(this, void 0, void 0, function () {
            var rotate;
            return __generator(this, function (_a) {
                this.ctx.save();
                this.ctx.translate(object.x, object.y);
                rotate = object.rotate || 0;
                this.ctx.rotate((rotate * Math.PI) / 180);
                this.ctx.drawImage(scene.getTexture(object.imageKey), 0, 0, object.width, object.height);
                this.ctx.restore();
                return [2 /*return*/];
            });
        });
    };
    return Renderer;
}());
exports.Renderer = Renderer;


/***/ }),

/***/ "./src/GameEngine/Scene.ts":
/*!*********************************!*\
  !*** ./src/GameEngine/Scene.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scene = void 0;
var loader_1 = __webpack_require__(/*! ./loader */ "./src/GameEngine/loader.ts");
var TextureManager_1 = __webpack_require__(/*! ./TextureManager */ "./src/GameEngine/TextureManager.ts");
var Scene = /** @class */ (function () {
    function Scene(newname, width, height, inputHandler) {
        this.name = newname;
        this.gameObject = new Array();
        this.gameObjectText = new Array();
        this.width = width;
        this.height = height;
        this.textureManager = new TextureManager_1.TextureManager();
        this.loader = new loader_1.Loader();
        this.inputHandler = inputHandler;
    }
    Scene.prototype.preload = function (url) {
        this.loader.loadImage(url);
    };
    Scene.prototype.loadData = function (imageKey, pathOfImage) {
        this.preload(pathOfImage);
        this.textureManager.addImage(imageKey, pathOfImage);
    };
    Scene.prototype.addgameObject = function (gameObject) {
        var lengthOfGameObject = this.gameObject.length;
        this.gameObject[lengthOfGameObject] = gameObject;
    };
    Scene.prototype.addgameObjectText = function (gameObjectText) {
        var lengthOfGameObjectText = this.gameObjectText.length;
        this.gameObjectText[lengthOfGameObjectText] = gameObjectText;
        // console.log(this.gameObjectText[lengthOfGameObjectText]);
    };
    Scene.prototype.update = function (time, delta) {
    };
    Scene.prototype.getAllGameObjectText = function () {
        if (this.gameObjectText[0]) {
            return this.gameObjectText;
        }
        else
            return [];
    };
    Scene.prototype.getAllGameObject = function () {
        if (this.gameObject[0])
            return this.gameObject;
        else
            return [];
    };
    Scene.prototype.InputHandler = function (time, delta, scene) {
    };
    Scene.prototype.getTexture = function (key) {
        return this.textureManager.getImage(key);
    };
    return Scene;
}());
exports.Scene = Scene;


/***/ }),

/***/ "./src/GameEngine/SceneManager.ts":
/*!****************************************!*\
  !*** ./src/GameEngine/SceneManager.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SceneManager = void 0;
var GameStateManager_1 = __webpack_require__(/*! ./GameStateManager */ "./src/GameEngine/GameStateManager.ts");
var SceneManager = /** @class */ (function () {
    function SceneManager() {
        this.scenes = [];
        this.gameStateManager = new GameStateManager_1.GameStateManager();
    }
    SceneManager.prototype.changeScene = function (scene) {
        // console.log(22);
        // console.log(this.gameStateManager.getState());
        this.setCurrentScene(scene);
    };
    SceneManager.prototype.setCurrentScene = function (scene) {
        for (var i = 0; i < this.scenes.length; i++) {
            if (this.scenes[i].name == scene) {
                this.currentScene = this.scenes[i];
            }
        }
    };
    SceneManager.prototype.update = function (time, delta) {
        // this.scenes.forEach( scene => {scene.update(time,delta )} );
        this.getCurrentScene().update(time, delta);
    };
    SceneManager.prototype.addScene = function (scene) {
        this.scenes.push(scene);
        // scene.scenes = this;
    };
    SceneManager.prototype.startScene = function () {
        this.currentScene = this.scenes[0];
    };
    SceneManager.prototype.getCurrentSceneName = function () {
        return this.currentScene.name;
    };
    SceneManager.prototype.getCurrentScene = function () {
        // console.log(this.scenes[this.gameStateManager.getState()]);
        return this.currentScene;
        // return this.scenes[2];
    };
    return SceneManager;
}());
exports.SceneManager = SceneManager;


/***/ }),

/***/ "./src/GameEngine/Sprite.ts":
/*!**********************************!*\
  !*** ./src/GameEngine/Sprite.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sprite = void 0;
var GameObject_1 = __webpack_require__(/*! ./GameObject */ "./src/GameEngine/GameObject.ts");
var Sprite = /** @class */ (function (_super) {
    __extends(Sprite, _super);
    function Sprite(x, y, width, height, imageKey, frames) {
        var _this = _super.call(this, x, y, width, height, imageKey) || this;
        _this.currentFrameId = 0;
        _this.count = 6;
        _this.frameKeys = frames;
        return _this;
    }
    Sprite.prototype.setCurrentFrame = function () {
        this.imageKey = this.frameKeys[0];
    };
    Sprite.prototype.updateFrame = function () {
        this.currentFrameId = this.currentFrameId > (this.frameKeys.length - 2) ? 0 : this.currentFrameId + 1;
        // console.log(count);
        this.imageKey = this.frameKeys[this.currentFrameId];
    };
    return Sprite;
}(GameObject_1.GameObject));
exports.Sprite = Sprite;


/***/ }),

/***/ "./src/GameEngine/TextureManager.ts":
/*!******************************************!*\
  !*** ./src/GameEngine/TextureManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextureManager = void 0;
var TextureManager = /** @class */ (function () {
    function TextureManager() {
        this.dataImage = new Map();
    }
    TextureManager.prototype.addImage = function (key, value) {
        if (this.dataImage.get(key)) {
            return;
        }
        else {
            var image = new Image();
            image.src = value;
            ;
            this.dataImage.set(key, image);
        }
    };
    TextureManager.prototype.getImage = function (key) {
        return this.dataImage.get(key);
    };
    return TextureManager;
}());
exports.TextureManager = TextureManager;


/***/ }),

/***/ "./src/GameEngine/loader.ts":
/*!**********************************!*\
  !*** ./src/GameEngine/loader.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Loader = void 0;
var Loader = /** @class */ (function () {
    function Loader() {
    }
    Loader.prototype.loadImage = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var img = document.createElement('img');
                        img.src = url;
                        img.onload = function () {
                            resolve();
                        };
                        img.onerror = reject;
                    })];
            });
        });
    };
    return Loader;
}());
exports.Loader = Loader;


/***/ }),

/***/ "./src/Score.ts":
/*!**********************!*\
  !*** ./src/Score.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Score = void 0;
var Score = /** @class */ (function () {
    function Score() {
        this.storeScore = [];
        {
            this.score = 0;
            this.addScore = true;
            this.storeScore[0] = 0;
        }
    }
    Score.prototype.addstoreScore = function () {
        var sizeOfStoreScore = this.storeScore.length;
        this.storeScore[sizeOfStoreScore] = this.score;
    };
    Score.prototype.getMaxscore = function () {
        return Math.max.apply(null, this.storeScore);
    };
    Score.prototype.setScore = function (Score) {
        this.score = Score;
    };
    Score.prototype.getScore = function () {
        return this.score;
    };
    Score.prototype.reset = function () {
        this.score = 0;
        this.addScore = true;
    };
    Score.prototype.update = function (bird, columns, rectCollision) {
        var collision = false;
        for (var i = 0; i < 6; i += 2) {
            var rectColumn = [columns[i].x + columns[0].width, columns[i + 1].y - 240, 1, columns[0].blank];
            var rectBird = [bird.x, bird.y, bird.width, bird.height];
            if (rectCollision(rectBird, rectColumn) == true) {
                collision = true;
                break;
            }
        }
        if (collision == true) {
            if (this.addScore == true)
                this.score += 1;
            this.addScore = false;
        }
        else {
            this.addScore = true;
        }
    };
    return Score;
}());
exports.Score = Score;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/FlappyBird/FlappyBirdGame.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDakQsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRyxDQUFDLElBQUUsQ0FBQyxFQUFDO29CQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEQ7Z0JBRUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNoRixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFFO2dCQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMs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Q0QsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJO2dCQUN2QixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjthQUNHO1lBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBQ1QsWUFBQztBQUFELENBQUM7QUEvQ1ksc0JBQUs7Ozs7Ozs7VUNBbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlZWsxLy4vc3JjL0JpcmQudHMiLCJ3ZWJwYWNrOi8vd2VlazEvLi9zcmMvQ29sdW1uLnRzIiwid2VicGFjazovL3dlZWsxLy4vc3JjL0ZsYXBweUJpcmQvRmxhcHB5QmlyZEdhbWUudHMiLCJ3ZWJwYWNrOi8vd2VlazEvLi9zcmMvRmxhcHB5QmlyZC9HYW1lT3ZlclNjZW5lLnRzIiwid2VicGFjazovL3dlZWsxLy4vc3JjL0ZsYXBweUJpcmQvR2FtZVBsYXlTY2VuZS50cyIsIndlYnBhY2s6Ly93ZWVrMS8uL3NyYy9GbGFwcHlCaXJkL0dhbWVTdGFydFNjZW5lLnRzIiwid2VicGFjazovL3dlZWsxLy4vc3JjL0dhbWVFbmdpbmUvQ29yZUxvb3AudHMiLCJ3ZWJwYWNrOi8vd2VlazEvLi9zcmMvR2FtZUVuZ2luZS9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovL3dlZWsxLy4vc3JjL0dhbWVFbmdpbmUvR2FtZU9iamVjdFRleHQudHMiLCJ3ZWJwYWNrOi8vd2VlazEvLi9zcmMvR2FtZUVuZ2luZS9HYW1lU3RhdGVNYW5hZ2VyLnRzIiwid2VicGFjazovL3dlZWsxLy4vc3JjL0dhbWVFbmdpbmUvSW5wdXRIYW5kbGVyLnRzIiwid2VicGFjazovL3dlZWsxLy4vc3JjL0dhbWVFbmdpbmUvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vd2VlazEvLi9zcmMvR2FtZUVuZ2luZS9TY2VuZS50cyIsIndlYnBhY2s6Ly93ZWVrMS8uL3NyYy9HYW1lRW5naW5lL1NjZW5lTWFuYWdlci50cyIsIndlYnBhY2s6Ly93ZWVrMS8uL3NyYy9HYW1lRW5naW5lL1Nwcml0ZS50cyIsIndlYnBhY2s6Ly93ZWVrMS8uL3NyYy9HYW1lRW5naW5lL1RleHR1cmVNYW5hZ2VyLnRzIiwid2VicGFjazovL3dlZWsxLy4vc3JjL0dhbWVFbmdpbmUvbG9hZGVyLnRzIiwid2VicGFjazovL3dlZWsxLy4vc3JjL1Njb3JlLnRzIiwid2VicGFjazovL3dlZWsxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlZWsxL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VlazEvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlZWsxL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vR2FtZUVuZ2luZS9TcHJpdGVcIjtcclxuXHJcblxyXG52YXIgU1BFRURGTFkgPSAtODtcclxuXHJcbnZhciBHID0gNDtcclxudmFyIEd4ID0gMjA7XHJcbmV4cG9ydCBjbGFzcyBCaXJkIGV4dGVuZHMgU3ByaXRle1xyXG4gIHB1YmxpYyBzcGVlZHkgOiBudW1iZXI7XHJcbiAgcHVibGljIHNwZWVkeCA6IG51bWJlcjtcclxuICBwdWJsaWMgc3RhdGUgOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoeDpudW1iZXIsICB5IDpudW1iZXIgLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgaW1hZ2VLZXk6c3RyaW5nICwgZnJhbWU6IHN0cmluZ1tdKSB7XHJcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LGltYWdlS2V5ICxmcmFtZSk7XHJcbiAgICB0aGlzLnNwZWVkeSA9IDA7XHJcbiAgICB0aGlzLnNwZWVkeCA9IDUwMDtcclxuICAgIHRoaXMucm90YXRlID0gMTA7XHJcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XHJcbiAgICB0aGlzLmRlcHRoID0gMDtcclxuICB9XHJcbiAgcHVibGljIHVwZGF0ZShkZWx0YVRpbWUgOiBudW1iZXIpOiB2b2lke1xyXG4gICAgdmFyIFRpbWUgPSBkZWx0YVRpbWUvMTAwO1xyXG4gICAgaWYodGhpcy5zcGVlZHg+MS41KXRoaXMuc3BlZWR4ID0gMC4wNTtcclxuICAgIHRoaXMueSArPSB0aGlzLnNwZWVkeSpUaW1lICsgMC41KkcqVGltZSpUaW1lO1xyXG4gICAgdGhpcy54ICs9IHRoaXMuc3BlZWR4KlRpbWUgKyAwLjUqR3gqVGltZSpUaW1lO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zcGVlZHkpO1xyXG5cclxuICAgXHJcbiAgICB0aGlzLnNwZWVkeSArPSBHO1xyXG4gICAgdGhpcy5zcGVlZHggKz0gR3g7XHJcbiAgICAgLy8gdGhpcy5yb3RhdGUgPSBNYXRoLm1pbigodGhpcy5zcGVlZHkgLyAxMDApLDEpICogdGhpcy5yb3RhdGU7XHJcblxyXG4gICAgaWYgKHRoaXMuc3BlZWR5ID4gMCkge1xyXG4gICAgICBcdHRoaXMucm90YXRlKys7ICBcclxuICAgIH1cclxuXHRlbHNlIHtcclxuXHRcdHRoaXMucm90YXRlLS07XHJcblx0fVxyXG4gIH1cclxuICBwdWJsaWMgcmVzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lke1xyXG4gICAgdGhpcy54ID0gIHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG5cdHRoaXMuc3BlZWR5ID0gMDtcclxuICAgIHRoaXMuc3BlZWR4ID0gNTAwO1xyXG4gIH1cclxuICBwdWJsaWMgZmx5KCk6IHZvaWR7XHJcblx0dGhpcy5yb3RhdGUgPSAwO1xyXG4gICAgdGhpcy5zcGVlZHkgPSAtNjA7XHJcbiAgICB0aGlzLnNwZWVkeCA9IDUwMDtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZUVuZ2luZS9HYW1lT2JqZWN0XCI7XHJcblxyXG52YXIgQ09MVU1OV0lEVEggPSA3MDtcclxudmFyIENPTFVNTkhFSUdIVCA9IDkwMDtcclxudmFyIEJMQU5LID0gMjQwO1xyXG52YXIgRElTVEFOQ0UgPSAzNTA7XHJcbnZhciBDT0xVTU5TUEVFRCA9IDI7XHJcbnZhciBXSU5ET1dXSURUSCAgPSA4MDA7XHJcbnZhciBXSU5ET1dIRUlHSFQgPSA5MDA7XHJcbmV4cG9ydCBjbGFzcyBDb2x1bW4gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICBwdWJsaWMgYmxhbmsgOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBkaXN0YW5jZSA6IG51bWJlcjtcclxuICBwcml2YXRlIGNvbHVtbnNwZWVkIDogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgYXJycmF5IDogQXJyYXk8bnVtYmVyW10+O1xyXG4gIGNvbnN0cnVjdG9yKHg6bnVtYmVyLCAgeSA6bnVtYmVyICwgQ09MVU1OV0lEVEg6IGFueSwgQ09MVU1OSEVJR0hUOiBhbnksIHN1ZmFjZTphbnkpIHtcclxuICAgIHN1cGVyKHgsIHksIENPTFVNTldJRFRILCBDT0xVTU5IRUlHSFQsc3VmYWNlKTtcclxuICAgIHRoaXMuYmxhbmsgPSBCTEFOSztcclxuICAgIHRoaXMuZGlzdGFuY2UgPSBESVNUQU5DRTtcclxuICAgIHRoaXMuY29sdW1uc3BlZWQgPSBDT0xVTU5TUEVFRDtcclxuICAgIC8vIHRoaXMuYXJycmF5ID0gbmV3IEFycmF5KDMpO1xyXG4gICAgLy8gZm9yKHZhciBpID0gMCA7IGkgPCAzIDsgaSsrKXtcclxuICAgIC8vICAgdGhpcy5hcnJyYXlbaV0gPSBuZXcgQXJyYXkoMik7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBmb3IodmFyIGkgPSAxIDsgaSA8IDQgOyBpKyspe1xyXG4gICAgLy8gICB0aGlzLmFycnJheVtpLTFdWzBdID0gV0lORE9XV0lEVEggK2kqdGhpcy5kaXN0YW5jZTtcclxuICAgIC8vICAgdGhpcy5hcnJyYXlbaS0xXVsxXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChXSU5ET1dIRUlHSFQtNjAgLSB0aGlzLmJsYW5rICsgMSkpICsgNjA7XHJcbiAgICAvLyB9IFxyXG4gIH1cclxuICBwdWJsaWMgdXBkYXRlKCl7XHJcbiAgICBmb3IodmFyIGkgPSAwIDsgaSA8IDMgOyBpKyspe1xyXG4gICAgICB0aGlzLngtPXRoaXMuY29sdW1uc3BlZWQ7XHJcbiAgICB9XHJcbiAgICAvLyBpZih0aGlzLmFycnJheVswXVswXSA8IC10aGlzLndpZHRoICl7XHJcbiAgICAvLyAgIGZvcih2YXIgaSA9IDAgOyBpIDwgMiA7IGkrKyl7XHJcbiAgICAvLyAgICAgdGhpcy5hcnJyYXlbaV1bMF0gPSB0aGlzLmFycnJheVtpKzFdWzBdO1xyXG4gICAgLy8gICAgIHRoaXMuYXJycmF5W2ldWzFdID0gdGhpcy5hcnJyYXlbaSsxXVsxXTtcclxuICAgIC8vICAgfVxyXG4gICAgICBcclxuICAgIC8vICAgdGhpcy5hcnJyYXlbMl1bMF0gPSB0aGlzLmFycnJheVsxXVswXSArIHRoaXMuZGlzdGFuY2U7XHJcbiAgICAvLyAgIHRoaXMuYXJycmF5WzJdWzFdID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKFdJTkRPV0hFSUdIVC10aGlzLmJsYW5rLTYwICsgMSkpICsgNjA7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFycnJheVsyXVsxXSk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIHB1YmxpYyByZXNldCgpe1xyXG4gICAgLy8gZm9yKHZhciBpID0gMCA7IGkgPCAzIDsgaSsrKXtcclxuICAgIC8vICAgdGhpcy5hcnJyYXlbaV1bMF09IFdJTkRPV1dJRFRIICtpKnRoaXMuZGlzdGFuY2U7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBTY29yZSB9IGZyb20gJy4vLi4vU2NvcmUnO1xyXG5pbXBvcnQgeyBDb3JlTG9vcCB9IGZyb20gXCIuLi9HYW1lRW5naW5lL0NvcmVMb29wXCJcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuLi9HYW1lRW5naW5lL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgR2FtZVBsYXlTY2VuZSB9IGZyb20gXCIuL0dhbWVQbGF5U2NlbmVcIlxyXG5pbXBvcnQgeyBHYW1lU3RhcnRTY2VuZSB9IGZyb20gXCIuL0dhbWVTdGFydFNjZW5lXCJcclxuaW1wb3J0IHsgR2FtZU92ZXJTY2VuZSB9IGZyb20gXCIuL0dhbWVPdmVyU2NlbmVcIlxyXG5jbGFzcyBGbGFwcHlCaXJkR2FtZSBleHRlbmRzIENvcmVMb29wIHtcclxuICAgIHByaXZhdGUgc2NvcmUgOiBTY29yZTtcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoIDpudW1iZXIsIGhlaWdodDogbnVtYmVyKXtcclxuICAgICAgICBzdXBlcih3aWR0aCxoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSBuZXcgU2NvcmUoKTtcclxuICAgIH1cclxuICAgIGdldFNjb3JlKCk6IFNjb3Jle1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3JlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBmbGFwcHlCaXJkR2FtZSA9IG5ldyBGbGFwcHlCaXJkR2FtZSg4MDAsOTAwKVxyXG5jb25zdCBnYW1lU3RhcnRTY2VuZSA9IG5ldyBHYW1lU3RhcnRTY2VuZShcIkdhbWVTdGFydFNjZW5lXCIsODAwLDkwMCxmbGFwcHlCaXJkR2FtZS5nZXRJbnB1dEhhbmRsZXIoKSk7XHJcbmNvbnN0IGdhbWVQbGF5U2NlbmUgPSBuZXcgR2FtZVBsYXlTY2VuZShcIkdhbWVQbGF5U2NlbmVcIiw4MDAsOTAwLGZsYXBweUJpcmRHYW1lLmdldFNjb3JlKCksZmxhcHB5QmlyZEdhbWUuZ2V0SW5wdXRIYW5kbGVyKCkpO1xyXG5jb25zdCBnYW1lT3ZlclNjZW5lID0gbmV3IEdhbWVPdmVyU2NlbmUoXCJHYW1lT3ZlclNjZW5lXCIsODAwLDkwMCxmbGFwcHlCaXJkR2FtZS5nZXRTY29yZSgpLGZsYXBweUJpcmRHYW1lLmdldElucHV0SGFuZGxlcigpKTtcclxuZmxhcHB5QmlyZEdhbWUuYWRkU2NlbmUoZ2FtZVN0YXJ0U2NlbmUpO1xyXG5mbGFwcHlCaXJkR2FtZS5hZGRTY2VuZShnYW1lUGxheVNjZW5lKTtcclxuZmxhcHB5QmlyZEdhbWUuYWRkU2NlbmUoZ2FtZU92ZXJTY2VuZSk7XHJcbmZsYXBweUJpcmRHYW1lLnN0YXJ0KCkiLCJpbXBvcnQgeyBTY2VuZU1hbmFnZXIgfSBmcm9tICcuLi9HYW1lRW5naW5lL1NjZW5lTWFuYWdlcic7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vR2FtZUVuZ2luZS9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZU1hbmFnZXIgfSBmcm9tIFwiLi4vR2FtZUVuZ2luZS9HYW1lU3RhdGVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL0dhbWVFbmdpbmUvU2NlbmVcIjtcclxuaW1wb3J0IHsgU2NvcmUgfSBmcm9tICcuLi9TY29yZSc7XHJcbmltcG9ydCB7IEdhbWVPYmplY3RUZXh0IH0gZnJvbSAnLi4vR2FtZUVuZ2luZS9HYW1lT2JqZWN0VGV4dCc7XHJcbmltcG9ydCB7IElucHV0SGFuZGxlciB9IGZyb20gJy4uL0dhbWVFbmdpbmUvSW5wdXRIYW5kbGVyJztcclxuZXhwb3J0IGNsYXNzIEdhbWVPdmVyU2NlbmUgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICAgICAgcHJpdmF0ZSBkIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHByaXZhdGUgc2NvcmUgOiBTY29yZTtcclxuICAgICAgICBwcml2YXRlIGJHcm91bmQgOiBHYW1lT2JqZWN0O1xyXG4gICAgICAgIHByaXZhdGUgZkdyb3VuZCA6IEdhbWVPYmplY3Q7XHJcbiAgICAgICAgcHJpdmF0ZSBjdXJyZW50U2NvcmUgOiBHYW1lT2JqZWN0VGV4dDtcclxuICAgICAgICBwcml2YXRlIG1heFNjb3JlIDogR2FtZU9iamVjdFRleHQ7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsc2NvcmU6U2NvcmUgLCBpbnB1dEhhbmRsZXIgOiBJbnB1dEhhbmRsZXIpe1xyXG4gICAgICAgICAgIHN1cGVyKG5hbWUsd2lkdGgsaGVpZ2h0LGlucHV0SGFuZGxlcik7IFxyXG4gICAgICAgICAgIHRoaXMuYkdyb3VuZCA9IG5ldyBHYW1lT2JqZWN0KDAsMCw4MDAsODAwLFwiYmFja2dyb3VuZFwiKTtcclxuICAgICAgICAgICB0aGlzLmFkZGdhbWVPYmplY3QodGhpcy5iR3JvdW5kKTtcclxuICAgICAgICAgICB0aGlzLmxvYWREYXRhKFwiYmFja2dyb3VuZFwiLFwiLi4vLi4vcHVibGljL2ltYWdlL2JnLnBuZ1wiICk7XHJcbiAgICAgICAgICAgdGhpcy5mR3JvdW5kID0gbmV3IEdhbWVPYmplY3QoMCw4MDAsODAwLDEwMCxcImZsb29yZ3JvdW5kXCIpO1xyXG4gICAgICAgICAgIHRoaXMuYWRkZ2FtZU9iamVjdCh0aGlzLmZHcm91bmQpO1xyXG4gICAgICAgICAgIHRoaXMubG9hZERhdGEoXCJmbG9vcmdyb3VuZFwiLFwiLi4vLi4vcHVibGljL2ltYWdlL2ZnLnBuZ1wiICk7XHJcbiAgICAgICAgICAgdmFyIGJ1dHRvblBsYXkgPSBuZXcgR2FtZU9iamVjdCh0aGlzLndpZHRoLzItMTIwLDQ1MCwxMjAsOTAsXCJuZXdnYW1lXCIpO1xyXG4gICAgICAgICAgIHRoaXMuYWRkZ2FtZU9iamVjdChidXR0b25QbGF5KTtcclxuICAgICAgICAgICB0aGlzLmxvYWREYXRhKFwibmV3Z2FtZVwiLFwiLi4vLi4vcHVibGljL2ltYWdlL25ld2dhbWUucG5nXCIgKTtcclxuXHJcbiAgICAgICAgICAgdmFyIHJhbmsgPSBuZXcgR2FtZU9iamVjdCh0aGlzLndpZHRoLzIgLSAxNTAsMzAwLDMwMCwxNTAsXCJiZXN0XCIpO1xyXG4gICAgICAgICAgIHRoaXMuYWRkZ2FtZU9iamVjdChyYW5rKTtcclxuICAgICAgICAgICB0aGlzLmxvYWREYXRhKFwiYmVzdFwiLFwiLi4vLi4vcHVibGljL2ltYWdlL2Jlc3QucG5nXCIgKTtcclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBnYW1lb3ZlclRleHQgPSBuZXcgR2FtZU9iamVjdCh0aGlzLndpZHRoLzIgLSAxNTAsMjAwLDMwMCw4MCxcImdhbWVvdmVyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZGdhbWVPYmplY3QoZ2FtZW92ZXJUZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YShcImdhbWVvdmVyXCIsXCIuLi8uLi9wdWJsaWMvaW1hZ2UvZ2FtZW92ZXIucG5nXCIgKTtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbkhpZ2hzY29yZSA9IG5ldyBHYW1lT2JqZWN0KHRoaXMud2lkdGgvMiArIDEwLDQ2MCwxMTAsNzUsXCJ0b3ByYW5rZ2FtZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRnYW1lT2JqZWN0KGJ1dHRvbkhpZ2hzY29yZSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEoXCJ0b3ByYW5rZ2FtZVwiLFwiLi4vLi4vcHVibGljL2ltYWdlL3RvcHJhbmtnYW1lLnBuZ1wiICk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcclxuICAgICAgICAgICAgdmFyIHNpemVPZnNjb3JlID0gU3RyaW5nKHRoaXMuc2NvcmUuZ2V0U2NvcmUoKSkubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY29yZSA9bmV3IEdhbWVPYmplY3RUZXh0KCh0aGlzLndpZHRoLzIgKyA5NS0gc2l6ZU9mc2NvcmUqMTApLCAzNzAsXCJcIix0aGlzLnNjb3JlLmdldFNjb3JlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZGdhbWVPYmplY3RUZXh0KHRoaXMuY3VycmVudFNjb3JlKTtcclxuICAgICAgICAgICAgdmFyIHNpemVPZm1heHNjb3JlID0gU3RyaW5nKHRoaXMuc2NvcmUuZ2V0TWF4c2NvcmUoKSkubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLm1heFNjb3JlID0gbmV3IEdhbWVPYmplY3RUZXh0KCh0aGlzLndpZHRoLzIgKyA5NS0gc2l6ZU9mbWF4c2NvcmUqMTApLCA0MzAsXCJcIix0aGlzLnNjb3JlLmdldE1heHNjb3JlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZGdhbWVPYmplY3RUZXh0KHRoaXMubWF4U2NvcmUpO1xyXG4gICAgICAgIC8vICAgICBpZih0aGlzLnNjb3JlLmdldFNjb3JlKCkgPT0gdGhpcy5zY29yZS5nZXRNYXhzY29yZSgpKXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYWRkZ2FtZU9iamVjdChuZXcgR2FtZU9iamVjdCh0aGlzLndpZHRoLzIgLTEyMCwzNTAsOTAsNzAsXCJnb2xkUmFua1wiKSk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmxvYWREYXRhKFwiZ29sZFJhbmtcIixcIi4uLy4uL3B1YmxpYy9pbWFnZS9nb2xkUmFuay5wbmdcIiApO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFkZGdhbWVPYmplY3QobmV3IEdhbWVPYmplY3QodGhpcy53aWR0aC8yIC0xMjAsMzUwLDkwLDcwLFwiYnJvbnplUmFua1wiKSk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmxvYWREYXRhKFwiYnJvbnplUmFua1wiLFwiLi4vLi4vcHVibGljL2ltYWdlL2Jyb256ZVJhbmsucG5nXCIgKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRIYW5kbGVyLm9uKCdwb2ludGVyZG93bicgKyBuYW1lLCAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxldmVudCA6UG9pbnRlckV2ZW50ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zY2VuZXMuZ2V0Q3VycmVudFNjZW5lTmFtZSgpID09IFwiR2FtZU92ZXJTY2VuZVwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oY2FudmFzLGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YVswXT49dGhpcy53aWR0aC8yLTEyMCAmJiBkYXRhWzBdIDw9IHRoaXMud2lkdGgvMiAmJiBkYXRhWzFdPj0gNDUwICYmIGRhdGFbMV0gPD0gNDUwKzkwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lcy5jaGFuZ2VTY2VuZShcIkdhbWVQbGF5U2NlbmVcIik7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUuc2V0U2NvcmUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlLmFkZHN0b3JlU2NvcmUoKTsgIFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY29yZS51cGRhdGUodGhpcy5zY29yZS5nZXRTY29yZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5tYXhTY29yZS51cGRhdGUodGhpcy5zY29yZS5nZXRNYXhzY29yZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0TW91c2VQb3NpdGlvbihjYW52YXMgOiBhbnksIGV2ZW50IDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt4LHldO1xyXG4gICAgICAgIH1cclxufSIsImltcG9ydCB7IEJpcmQgfSBmcm9tIFwiLi4vQmlyZFwiO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tIFwiLi4vQ29sdW1uXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vR2FtZUVuZ2luZS9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3RUZXh0IH0gZnJvbSBcIi4uL0dhbWVFbmdpbmUvR2FtZU9iamVjdFRleHRcIjtcclxuaW1wb3J0IHsgSW5wdXRIYW5kbGVyIH0gZnJvbSBcIi4uL0dhbWVFbmdpbmUvSW5wdXRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL0dhbWVFbmdpbmUvU2NlbmVcIjtcclxuaW1wb3J0IHsgU2NlbmVNYW5hZ2VyIH0gZnJvbSBcIi4uL0dhbWVFbmdpbmUvU2NlbmVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNjb3JlIH0gZnJvbSBcIi4uL1Njb3JlXCI7XHJcbmV4cG9ydCBjbGFzcyBHYW1lUGxheVNjZW5lIGV4dGVuZHMgU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBiaXJkOiBCaXJkO1xyXG4gICAgcHJpdmF0ZSBhcnJDb2x1bW4gOiBDb2x1bW5bXTtcclxuICAgIHByaXZhdGUgYkdyb3VuZCA6IEdhbWVPYmplY3Q7XHJcbiAgICBwcml2YXRlIGZHcm91bmQgOiBHYW1lT2JqZWN0O1xyXG5cclxuICAgIHByaXZhdGUgc2NvcmUgOiBTY29yZTtcclxuICAgIHB1YmxpYyBibGFuayA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZGlzdGFuY2UgOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGNvbHVtbnNwZWVkIDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YVNjb3JlIDogR2FtZU9iamVjdFRleHQ7XHJcblxyXG4gICAgcHJpdmF0ZSBjb3VudCA6IG51bWJlciA9IDA7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBzY29yZTogU2NvcmUgLCBpbnB1dEhhbmRsZXI6IElucHV0SGFuZGxlcil7XHJcbiAgICAgICAgc3VwZXIobmFtZSx3aWR0aCxoZWlnaHQsaW5wdXRIYW5kbGVyKTsgXHJcblxyXG4gICAgICAgIHRoaXMuYkdyb3VuZCA9IG5ldyBHYW1lT2JqZWN0KDAsMCw4MDAsODAwLFwiYmFja2dyb3VuZFwiKTtcclxuICAgICAgICB0aGlzLmFkZGdhbWVPYmplY3QodGhpcy5iR3JvdW5kKTtcclxuICAgICAgICB0aGlzLmxvYWREYXRhKFwiYmFja2dyb3VuZFwiLFwiLi4vLi4vcHVibGljL2ltYWdlL2JnLnBuZ1wiICk7XHJcbiAgICAgICAgdGhpcy5mR3JvdW5kID0gbmV3IEdhbWVPYmplY3QoMCw4MDAsODAwLDEwMCxcImZsb29yZ3JvdW5kXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkZ2FtZU9iamVjdCh0aGlzLmZHcm91bmQpO1xyXG4gICAgICAgIHRoaXMubG9hZERhdGEoXCJmbG9vcmdyb3VuZFwiLFwiLi4vLi4vcHVibGljL2ltYWdlL2ZnLnBuZ1wiICk7XHJcbiAgICAgICAgdGhpcy5iaXJkID0gbmV3IEJpcmQoMTAwLDQwMCw3MCw1NSxcImJpcmRcIixbXCJiaXJkZmx5dXBcIixcImJpcmRcIixcImJpcmRmbHlkb3duXCJdKTtcclxuICAgICAgICB0aGlzLmFkZGdhbWVPYmplY3QodGhpcy5iaXJkKTtcclxuICAgICAgICB0aGlzLmxvYWREYXRhKFwiYmlyZFwiLFwiLi4vLi4vcHVibGljL2ltYWdlL2JpcmQucG5nXCIgKTtcclxuICAgICAgICB0aGlzLmxvYWREYXRhKFwiYmlyZGZseXVwXCIsXCIuLi8uLi9wdWJsaWMvaW1hZ2UvYmlyZGZseXVwLnBuZ1wiICk7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YShcImJpcmRmbHlkb3duXCIsXCIuLi8uLi9wdWJsaWMvaW1hZ2UvYmlyZGZseWRvd24ucG5nXCIgKTtcclxuICAgICAgICB0aGlzLmxvYWREYXRhKFwiY29sdW1uXCIsXCIuLi8uLi9wdWJsaWMvaW1hZ2UvY29sdW1uLnBuZ1wiICk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hcnJDb2x1bW4pO1xyXG4gICAgICAgIHRoaXMuYXJyQ29sdW1uID0gbmV3IEFycmF5KDMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYmxhbmsgPSAyNDA7XHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IDM1MDtcclxuICAgICAgICB0aGlzLmNvbHVtbnNwZWVkID0gMjtcclxuICAgICAgICB2YXIgeSA9IDE7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgNiA7IGkrPTIpe1xyXG4gICAgICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuaGVpZ2h0LTYwIC0gdGhpcy5ibGFuayArIDEpKSArIDYwO1xyXG4gICAgICAgICAgICB0aGlzLmFyckNvbHVtbltpXSA9IG5ldyBDb2x1bW4odGhpcy53aWR0aCArKHkpKnRoaXMuZGlzdGFuY2UsIC10aGlzLmhlaWdodCArIHJhbmRvbSAsNzAsOTAwLFwiY29sdW1uXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFyckNvbHVtbltpKzFdID0gbmV3IENvbHVtbih0aGlzLndpZHRoICsoeSkqdGhpcy5kaXN0YW5jZSwgcmFuZG9tICsgdGhpcy5ibGFuayw3MCw5MDAsXCJjb2x1bW5cIik7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkZ2FtZU9iamVjdCh0aGlzLmFyckNvbHVtbltpXSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkZ2FtZU9iamVjdCh0aGlzLmFyckNvbHVtbltpKzFdKTtcclxuICAgICAgICAgICAgeSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XHJcbiAgICAgICAgdGhpcy5kYXRhU2NvcmUgPSBuZXcgR2FtZU9iamVjdFRleHQoKHRoaXMud2lkdGgtNDAqNSkvMiwxMDAsXCJTY29yZTogXCIsdGhpcy5zY29yZS5nZXRTY29yZSgpKTtcclxuICAgICAgICB0aGlzLmFkZGdhbWVPYmplY3RUZXh0KHRoaXMuZGF0YVNjb3JlKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dEhhbmRsZXIub24oJ3BvaW50ZXJkb3duJyArIG5hbWUsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hcnJDb2x1bW4pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkdhbWVQbGF5U2NlbmVcIik7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2NlbmVzLmdldEN1cnJlbnRTY2VuZU5hbWUoKSA9PSBcIkdhbWVQbGF5U2NlbmVcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpcmQuZmx5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBJbnB1dEhhbmRsZXIodGltZTogbnVtYmVyLGRlbHRhIDpudW1iZXIgLCBzY2VuZXM6U2NlbmVNYW5hZ2VyICl7XHJcbiAgICB9XHJcbiAgICBnZXRNb3VzZVBvc2l0aW9uKGNhbnZhcyA6IGFueSwgZXZlbnQgOiBhbnkpIHtcclxuICAgICAgICAgICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGxldCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuICAgICAgICAgICAgbGV0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XHJcbiAgICAgICAgICAgIHJldHVybiBbeCx5XTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA6IHZvaWQge1xyXG4gICAgICAgIC8vIEdhbWUgbGl2ZVxyXG4gICAgICAgIGlmKHRoaXMuaXNHYW1lT3Zlcih0aGlzLmJpcmQsdGhpcy5hcnJDb2x1bW4pPT1mYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJpcmQudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICAgICAgdGhpcy5hcnJDb2x1bW4uZm9yRWFjaChvYmogPT4ge29iai51cGRhdGUoKTt9KTtcclxuICAgICAgICBpZih0aGlzLmFyckNvbHVtblswXS54IDwgLXRoaXMuYXJyQ29sdW1uWzBdLndpZHRoICl7XHJcbiAgICAgICAgICBmb3IodmFyIGkgPSAwIDsgaSA8PSAyIDsgaSs9Mil7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ29sdW1uW2ldLnggPSB0aGlzLmFyckNvbHVtbltpKzJdLng7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ29sdW1uW2ldLnkgPSB0aGlzLmFyckNvbHVtbltpKzJdLnk7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ29sdW1uW2krMV0ueCAgPSB0aGlzLmFyckNvbHVtbltpKzNdLng7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyQ29sdW1uW2krMV0ueSAgPSB0aGlzLmFyckNvbHVtbltpKzNdLnk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuaGVpZ2h0LTYwIC0gdGhpcy5ibGFuayArIDEpKSArIDYwO1xyXG4gICAgICAgICAgICB0aGlzLmFyckNvbHVtbls0XS54ID0gdGhpcy5hcnJDb2x1bW5bMl0ueCArIHRoaXMuZGlzdGFuY2UgO1xyXG4gICAgICAgICAgICB0aGlzLmFyckNvbHVtbls1XS54ID0gdGhpcy5hcnJDb2x1bW5bMl0ueCArIHRoaXMuZGlzdGFuY2UgO1xyXG4gICAgICAgICAgICB0aGlzLmFyckNvbHVtbls0XS55ID0gIC10aGlzLmhlaWdodCArIHJhbmRvbTtcclxuICAgICAgICAgICAgdGhpcy5hcnJDb2x1bW5bNV0ueSA9IHJhbmRvbSArIHRoaXMuYmxhbms7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLmNvdW50IDw9IDExKXtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY291bnQpOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuYmlyZC51cGRhdGVGcmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jb3VudCA9PTExKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmlyZC5zZXRDdXJyZW50RnJhbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlLnVwZGF0ZSh0aGlzLmJpcmQsdGhpcy5hcnJDb2x1bW4sdGhpcy5yZWN0Q29sbGlzaW9uKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zY29yZS5nZXRTY29yZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU2NvcmUudXBkYXRlKHRoaXMuc2NvcmUuZ2V0U2NvcmUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGllXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmJpcmQucmVzZXQoMjAwLDIwMCk7XHJcbiAgICAgICAgICAgIHZhciB5ID0gMTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgNiA7IGkrPTIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDb2x1bW5baV0ueCA9IHRoaXMud2lkdGggK3kqdGhpcy5kaXN0YW5jZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyQ29sdW1uW2krMV0ueCA9ICB0aGlzLndpZHRoICt5KnRoaXMuZGlzdGFuY2U7XHJcbiAgICAgICAgICAgICAgICB5Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2VuZXMuY2hhbmdlU2NlbmUoXCJHYW1lT3ZlclNjZW5lXCIpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWN0Q29sbGlzaW9uKHJlY3QxIDogYW55LCByZWN0MjogYW55KXtcclxuICAgICAgICBpZiAocmVjdDFbMF0gPD0gcmVjdDJbMF0rcmVjdDJbMl0gJiYgcmVjdDJbMF0gPD0gcmVjdDFbMF0rcmVjdDFbMl0gJiYgcmVjdDFbMV0gPD0gcmVjdDJbMV0rcmVjdDJbM10gJiYgcmVjdDJbMV0gPD0gcmVjdDFbMV0rcmVjdDFbM10pXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpc0dhbWVPdmVyKGJpcmQgOiBhbnksIGFyckNvbHVtbjogYW55KXtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCA7IGkgPCA2IDsgaSs9Mil7XHJcbiAgICAgICAgICAgIHZhciByZWN0QmlyZCA9IFtiaXJkLngsIGJpcmQueSwgYmlyZC53aWR0aCwgYmlyZC5oZWlnaHRdXHJcbiAgICAgICAgICAgIHZhciByZWN0Q29sdW1uMSA9IFsgYXJyQ29sdW1uW2ldLngsIGFyckNvbHVtbltpXS55LCBhcnJDb2x1bW5baV0ud2lkdGgsIGFyckNvbHVtbltpXS5oZWlnaHRdXHJcbiAgICAgICAgICAgIHZhciByZWN0Q29sdW1uMiA9IFsgYXJyQ29sdW1uW2krMV0ueCxhcnJDb2x1bW5baSsxXS55LCBhcnJDb2x1bW5baSsxXS53aWR0aCwgYXJyQ29sdW1uW2krMV0uaGVpZ2h0XVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWN0Q29sbGlzaW9uKHJlY3RCaXJkLCByZWN0Q29sdW1uMSkgPT0gdHJ1ZSB8fCB0aGlzLnJlY3RDb2xsaXNpb24ocmVjdEJpcmQsIHJlY3RDb2x1bW4yKSA9PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJpcmQueSArIGJpcmQuaGVpZ2h0IDwgMCB8fCBiaXJkLnkgKyBiaXJkLmhlaWdodCA+IHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmVNYW5hZ2VyIH0gZnJvbSAnLi8uLi9HYW1lRW5naW5lL1NjZW5lTWFuYWdlcic7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vR2FtZUVuZ2luZS9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZU1hbmFnZXIgfSBmcm9tIFwiLi4vR2FtZUVuZ2luZS9HYW1lU3RhdGVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL0dhbWVFbmdpbmUvU2NlbmVcIjtcclxuaW1wb3J0IHsgSW5wdXRIYW5kbGVyIH0gZnJvbSAnLi4vR2FtZUVuZ2luZS9JbnB1dEhhbmRsZXInO1xyXG5leHBvcnQgY2xhc3MgR2FtZVN0YXJ0U2NlbmUgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICAgICAgcHJpdmF0ZSBkIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgLCBpbnB1dEhhbmRsZXIgOiBJbnB1dEhhbmRsZXIpe1xyXG4gICAgICAgICAgIHN1cGVyKG5hbWUsd2lkdGgsaGVpZ2h0LGlucHV0SGFuZGxlcik7IFxyXG4gICAgICAgICAgIC8vIGNyZWF0ZSBvYmplY3RcclxuICAgICAgICAgICB0aGlzLmFkZGdhbWVPYmplY3QobmV3IEdhbWVPYmplY3QoMCwwLDgwMCw4MDAsXCJiYWNrZ3JvdW5kXCIpKTtcclxuICAgICAgICAgICB0aGlzLmxvYWREYXRhKFwiYmFja2dyb3VuZFwiLFwiLi4vLi4vcHVibGljL2ltYWdlL2JnLnBuZ1wiICk7XHJcbiAgICAgICAgICAgdGhpcy5hZGRnYW1lT2JqZWN0KG5ldyBHYW1lT2JqZWN0KDAsODAwLDgwMCwxMDAsXCJmbG9vcmdyb3VuZFwiKSk7XHJcbiAgICAgICAgICAgdGhpcy5sb2FkRGF0YShcImZsb29yZ3JvdW5kXCIsXCIuLi8uLi9wdWJsaWMvaW1hZ2UvZmcucG5nXCIgKTtcclxuICAgICAgICAgICB0aGlzLmFkZGdhbWVPYmplY3QobmV3IEdhbWVPYmplY3QoMTAwLDQwMCw3MCw1NSxcImJpcmRcIikpO1xyXG4gICAgICAgICAgIHRoaXMubG9hZERhdGEoXCJiaXJkXCIsXCIuLi8uLi9wdWJsaWMvaW1hZ2UvYmlyZC5wbmdcIiApO1xyXG4gICAgICAgICAgIHRoaXMuYWRkZ2FtZU9iamVjdChuZXcgR2FtZU9iamVjdCh3aWR0aC8yLTYwLDMwMCwxMjAsOTAsXCJuZXdnYW1lXCIpKTtcclxuICAgICAgICAgICB0aGlzLmxvYWREYXRhKFwibmV3Z2FtZVwiLFwiLi4vLi4vcHVibGljL2ltYWdlL25ld2dhbWUucG5nXCIpO1xyXG4gICAgICAgICAgIHRoaXMuYWRkZ2FtZU9iamVjdChuZXcgR2FtZU9iamVjdCh3aWR0aC8yLTEwMCwyMDAsMjAwLDkwLFwic3RhcnRnYW1lXCIpKTtcclxuICAgICAgICAgICB0aGlzLmxvYWREYXRhKFwic3RhcnRnYW1lXCIsXCIuLi8uLi9wdWJsaWMvaW1hZ2Uvc3RhcnRnYW1lLnBuZ1wiKTtcclxuICAgICAgICAgICB0aGlzLmlucHV0SGFuZGxlci5vbigncG9pbnRlcmRvd24nICsgbmFtZSwgKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsZXZlbnQgOlBvaW50ZXJFdmVudCApID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2NlbmVzLmdldEN1cnJlbnRTY2VuZU5hbWUoKSA9PSBcIkdhbWVTdGFydFNjZW5lXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihjYW52YXMsZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhWzBdPj10aGlzLndpZHRoLzItNjAgJiYgZGF0YVswXSA8PSB0aGlzLndpZHRoLzItNjAgKyAxMjAgJiYgZGF0YVsxXT49IDMwMCAmJiBkYXRhWzFdIDw9IDMwMCs5MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZXMuY2hhbmdlU2NlbmUoXCJHYW1lUGxheVNjZW5lXCIpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRNb3VzZVBvc2l0aW9uKGNhbnZhcyA6IGFueSwgZXZlbnQgOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3gseV07XHJcbiAgICAgICAgfVxyXG5cclxuLy8gICAgICAgIGFzeW5jIGxvYWRBc3NldHMoKSB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5sb2FkZXIubG9hZEltYWdlKCcuL2ltYWdlJylcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHkgPS4uLnRoaXMubG9hZGVyLlxyXG4vLyAgICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW3gsIHldKVxyXG4vLyAgICAgICAgICAgICAgICAgZ2FtZVNjZW5lLnN0YXJ0R2FtZSgpXHJcbi8vICAgICAgICAgfVxyXG59IiwiaW1wb3J0IHsgSW5wdXRIYW5kbGVyIH0gZnJvbSAnLi9JbnB1dEhhbmRsZXInO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gXCIuL1JlbmRlcmVyXCI7XHJcbmltcG9ydCB7IFNjZW5lTWFuYWdlciB9IGZyb20gXCIuL1NjZW5lTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuL1NjZW5lXCI7XHJcbmV4cG9ydCBjbGFzcyBDb3JlTG9vcHtcclxuICAgIHByaXZhdGUgc2NlbmVzOiBTY2VuZU1hbmFnZXI7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyIDogUmVuZGVyZXI7XHJcbiAgICBwdWJsaWMgaW5wdXQgOiBJbnB1dEhhbmRsZXI7XHJcbiAgICBwcml2YXRlIGxhc3RUaW1lOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuc2NlbmVzID0gbmV3IFNjZW5lTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcy5zY2VuZXMpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKTp2b2lke1xyXG4gICAgICAgIHRoaXMuc2NlbmVzLnN0YXJ0U2NlbmUoKTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmxvb3AoKSk7XHJcbiAgICB9XHJcbiAgICBsb29wKCk6dm9pZHtcclxuICAgICAgICBjb25zdCB0aW1lID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGNvbnN0IGRlbHRhID0gdGltZSAtIHRoaXMubGFzdFRpbWU7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5wcm9jZXNzSW5wdXQoKTtcclxuICAgICAgICB0aGlzLnNjZW5lcy51cGRhdGUodGltZSwgZGVsdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2NlbmVzLmdldEN1cnJlbnRTY2VuZSgpKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lcy5nZXRDdXJyZW50U2NlbmUoKSk7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMubG9vcCgpKTtcclxuICAgIH1cclxuICAgIC8vIENoZWNrIHNpbmdsZSByZXNwb25zaWJpbGl0eSBwcmluY2lwbGVcclxuICAgIGFkZFNjZW5lKHNjZW5lOiBTY2VuZSk6dm9pZHtcclxuICAgICAgICB0aGlzLnNjZW5lcy5hZGRTY2VuZShzY2VuZSk7XHJcbiAgICAgICAgc2NlbmUuc2NlbmVzID0gdGhpcy5zY2VuZXM7XHJcbiAgICB9XHJcbiAgICBnZXRJbnB1dEhhbmRsZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQ7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdhbWVPYmplY3R7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBpbWFnZUtleTogc3RyaW5nO1xyXG4gICAgcm90YXRlIDogbnVtYmVyO1xyXG4gICAgZGVwdGggOiBudW1iZXIgPSAwOyAvLyB0aGlldSBuZWBcclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbmFtZTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuaW1hZ2VLZXkgPSBuYW1lO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEdhbWVPYmplY3RUZXh0e1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIG51bWJlcjogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGxhYmVsOiBzdHJpbmcsbnVtYmVyOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUobnVtYmVyOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XHJcbiAgICB9XHJcbn0iLCJlbnVtIFN0YXRlR2FtZSB7XHJcbiAgICBzdGFydEdhbWUgPSAwLFxyXG4gICAgcGxheUdhbWUgPSAxLFxyXG4gICAgZW5kR2FtZSA9IDIsXHJcbiAgfVxyXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlTWFuYWdlcntcclxuICAgIHByaXZhdGUgY3VycmVudFN0YXRlIDogU3RhdGVHYW1lO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFN0YXRlR2FtZS5zdGFydEdhbWU7XHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZShuZXdTdGF0ZSA6IG51bWJlcik6IHZvaWR7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3U3RhdGUpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gbmV3U3RhdGU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jdXJyZW50U3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZ2V0U3RhdGUoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmVNYW5hZ2VyIH0gZnJvbSAnLi9TY2VuZU1hbmFnZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0SGFuZGxlcntcclxuICAgIHByaXZhdGUgc2NlbmVzOiBTY2VuZU1hbmFnZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBxdWV1ZU9mUG9pbnRlcjogUG9pbnRlckV2ZW50W10gPSBbXTtcclxuICAgIHByaXZhdGUgcXVldWVPZktleUJvYXJkOiBLZXlib2FyZEV2ZW50W10gPSBbXTtcclxuICAgIHByaXZhdGUgY2FsbEJhY2tzOiBNYXA8c3RyaW5nLEZ1bmN0aW9uPjsgLy8gbW9pIGNvIDEgZnVuY3Rpb24ga2lhYFxyXG4gICAgcHJpdmF0ZSBjYW52YXMgOiBIVE1MRWxlbWVudDtcclxuICAgIC8vIHByaXZhdGUgY2FsbEJhY2tzID0ge1trZXk6IHN0cmluZ106IH1cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lcyA6IFNjZW5lTWFuYWdlcikge1xyXG4gICAgICAgIHRoaXMuc2NlbmVzID0gc2NlbmVzO1xyXG4gICAgICAgIHRoaXMuY2FsbEJhY2tzID0gbmV3IE1hcCgpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gSW5wdXRIYW5kbGVyKHRpbWU6IGFueSxkZWx0YTogYW55KTogdm9pZCB7XHJcbiAgICAvLyAgICAgdGhpcy5zY2VuZXMuZ2V0Q3VycmVudFNjZW5lKCkuSW5wdXRIYW5kbGVyKHRpbWUsZGVsdGEsdGhpcy5zY2VuZXMpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpWzBdO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucXVldWVPZlBvaW50ZXIucHVzaChldmVudClcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jYW52YXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgLy8gU29tZXRoaW5nXHJcbiAgICAgICAgICAgIHRoaXMucXVldWVPZktleUJvYXJkLnB1c2goZXZlbnQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbihrZXk6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsQmFja3Muc2V0KGtleSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NJbnB1dCgpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5xdWV1ZU9mUG9pbnRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IHRoaXMucXVldWVPZlBvaW50ZXIucG9wKCk7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGV2ZW50LnR5cGUgKyB0aGlzLnNjZW5lcy5nZXRDdXJyZW50U2NlbmVOYW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEJhY2tzLmdldChpbnB1dCkodGhpcy5jYW52YXMsZXZlbnQpO1xyXG4gICAgICAgIC8vIC5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEdhbWVPYmplY3RUZXh0IH0gZnJvbSAnLi9HYW1lT2JqZWN0VGV4dCc7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vU2NlbmVcIjtcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vU3ByaXRlXCI7XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdiBpZD1cImNvbnRhaW5lclwiIHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6OTAwcHhcIj5cclxuICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogYXV0bzsgd2lkdGg6ODAwcHg7IGhlaWdodDo5MDBweDtcIj5cclxuICAgICAgICAgIDxjYW52YXMgIGlkPVwibXlDaGFydFwiIHdpZHRoPSR7d2lkdGh9IGhlaWdodD0ke2hlaWdodH0+PC9jYW52YXM+ICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgIDwvZGl2PmA7XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCh3aWR0aCwgaGVpZ2h0KSk7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xyXG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IGNvbnNvbGFzXCI7XHJcbiAgfVxyXG4gIHJlbmRlcihzY2VuZTogU2NlbmUpIHtcclxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBzY2VuZS53aWR0aCwgc2NlbmUuaGVpZ2h0KTtcclxuICAgIHNjZW5lLmdldEFsbEdhbWVPYmplY3QoKS5zb3J0KChhLGIpPT5hLmRlcHRoIC0gYi5kZXB0aCkuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnJlbmRlckdhbWVPYmplY3Qob2JqZWN0LHNjZW5lLmdldFRleHR1cmUob2JqZWN0LmltYWdlS2V5KSxzY2VuZSk7XHJcbiAgICB9KTtcclxuICAgIHNjZW5lLmdldEFsbEdhbWVPYmplY3RUZXh0KCkuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyVGV4dE9iamVjdChvYmplY3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgcmVuZGVyVGV4dE9iamVjdChvYmplY3Q6IEdhbWVPYmplY3RUZXh0KSB7XHJcbiAgICBpZiAob2JqZWN0LmxhYmVsID09IFwiXCIpIHtcclxuICAgICAgdGhpcy5jdHguZmlsbFRleHQob2JqZWN0Lm51bWJlci50b1N0cmluZygpLCBvYmplY3QueCwgb2JqZWN0LnkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KG9iamVjdC5sYWJlbCArIG9iamVjdC5udW1iZXIsIG9iamVjdC54LCBvYmplY3QueSk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhvYmplY3QpO1xyXG4gIH1cclxuICBwcml2YXRlIHJlbmRlclJvdGF0ZWRPYmplY3Qob2JqZWN0OiBhbnksIHNjZW5lIDogU2NlbmUpIHtcclxuICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICB0aGlzLmN0eC50cmFuc2xhdGUob2JqZWN0LngsIG9iamVjdC55KTtcclxuICAgICAgdGhpcy5jdHgucm90YXRlKCgrb2JqZWN0LnJvdGF0ZSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHNjZW5lLmdldFRleHR1cmUob2JqZWN0LmltYWdlS2V5KSwwLDAsb2JqZWN0LndpZHRoLG9iamVjdC5oZWlnaHQpO1xyXG4gICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyR2FtZU9iamVjdChvYmplY3Q6IEdhbWVPYmplY3QsaW1hZ2U6SFRNTEltYWdlRWxlbWVudCAsIHNjZW5lOlNjZW5lKXtcclxuICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShvYmplY3QueCwgb2JqZWN0LnkpO1xyXG4gICAgY29uc3Qgcm90YXRlID0gb2JqZWN0LnJvdGF0ZSB8fCAwO1xyXG4gICAgdGhpcy5jdHgucm90YXRlKChyb3RhdGUgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2Uoc2NlbmUuZ2V0VGV4dHVyZShvYmplY3QuaW1hZ2VLZXkpLDAsMCxvYmplY3Qud2lkdGgsb2JqZWN0LmhlaWdodCk7XHJcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IExvYWRlciB9IGZyb20gJy4vbG9hZGVyJztcclxuaW1wb3J0IHsgU2NlbmVNYW5hZ2VyIH0gZnJvbSAnLi9TY2VuZU1hbmFnZXInO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IHsgR2FtZVN0YXRlTWFuYWdlciB9IGZyb20gJy4vR2FtZVN0YXRlTWFuYWdlcic7XHJcbmltcG9ydCB7IEdhbWVPYmplY3RUZXh0IH0gZnJvbSAnLi9HYW1lT2JqZWN0VGV4dCc7XHJcbmltcG9ydCB7IFRleHR1cmVNYW5hZ2VyIH0gZnJvbSAnLi9UZXh0dXJlTWFuYWdlcic7XHJcbmltcG9ydCB7IElucHV0SGFuZGxlciB9IGZyb20gJy4vSW5wdXRIYW5kbGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZXtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZ2FtZU9iamVjdCA6QXJyYXk8R2FtZU9iamVjdD47XHJcbiAgICBwcml2YXRlIGdhbWVPYmplY3RUZXh0IDpBcnJheTxHYW1lT2JqZWN0VGV4dD47XHJcbiAgICBwcml2YXRlIGxvYWRlcjogTG9hZGVyO1xyXG4gICAgcHJpdmF0ZSB0ZXh0dXJlTWFuYWdlciA6IFRleHR1cmVNYW5hZ2VyO1xyXG4gICAgcHVibGljIGlucHV0SGFuZGxlcjogSW5wdXRIYW5kbGVyO1xyXG4gICAgcHVibGljIHNjZW5lcyA6IFNjZW5lTWFuYWdlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuZXduYW1lOiBzdHJpbmcsd2lkdGggOiBudW1iZXIsaGVpZ2h0IDogbnVtYmVyICwgaW5wdXRIYW5kbGVyIDogSW5wdXRIYW5kbGVyKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuZXduYW1lO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdCA9IG5ldyBBcnJheTxHYW1lT2JqZWN0PigpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdFRleHQgPSBuZXcgQXJyYXk8R2FtZU9iamVjdFRleHQ+KCk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudGV4dHVyZU1hbmFnZXIgPSBuZXcgVGV4dHVyZU1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBMb2FkZXIoKTtcclxuICAgICAgICB0aGlzLmlucHV0SGFuZGxlciA9IGlucHV0SGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcmVsb2FkKHVybDpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmxvYWRlci5sb2FkSW1hZ2UodXJsKVxyXG4gICAgfVxyXG4gICAgbG9hZERhdGEoaW1hZ2VLZXk6IHN0cmluZywgcGF0aE9mSW1hZ2U6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5wcmVsb2FkKHBhdGhPZkltYWdlKTtcclxuICAgICAgICB0aGlzLnRleHR1cmVNYW5hZ2VyLmFkZEltYWdlKGltYWdlS2V5LCBwYXRoT2ZJbWFnZSk7XHJcbiAgICB9XHJcbiAgICBhZGRnYW1lT2JqZWN0KGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpIDogdm9pZCB7XHJcbiAgICAgICAgbGV0IGxlbmd0aE9mR2FtZU9iamVjdCA9IHRoaXMuZ2FtZU9iamVjdC5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0W2xlbmd0aE9mR2FtZU9iamVjdF0gPSBnYW1lT2JqZWN0O1xyXG4gICAgfVxyXG4gICAgYWRkZ2FtZU9iamVjdFRleHQoZ2FtZU9iamVjdFRleHQ6YW55KXtcclxuICAgICAgICBsZXQgbGVuZ3RoT2ZHYW1lT2JqZWN0VGV4dCA9IHRoaXMuZ2FtZU9iamVjdFRleHQubGVuZ3RoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdFRleHRbbGVuZ3RoT2ZHYW1lT2JqZWN0VGV4dF0gPSBnYW1lT2JqZWN0VGV4dDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdhbWVPYmplY3RUZXh0W2xlbmd0aE9mR2FtZU9iamVjdFRleHRdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikgOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRBbGxHYW1lT2JqZWN0VGV4dCgpOiBBcnJheTxhbnk+IHtcclxuICAgICAgICBpZih0aGlzLmdhbWVPYmplY3RUZXh0WzBdKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZU9iamVjdFRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBlbHNlIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGdldEFsbEdhbWVPYmplY3QoKTogQXJyYXk8YW55PntcclxuICAgICAgICBpZih0aGlzLmdhbWVPYmplY3RbMF0pXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdhbWVPYmplY3Q7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBJbnB1dEhhbmRsZXIodGltZTogbnVtYmVyLGRlbHRhIDpudW1iZXIgLCBzY2VuZSA6IFNjZW5lTWFuYWdlciAgKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGdldFRleHR1cmUoa2V5IDogc3RyaW5nKSA6IEhUTUxJbWFnZUVsZW1lbnR7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dHVyZU1hbmFnZXIuZ2V0SW1hZ2Uoa2V5KTtcclxuICAgIH1cclxufSIsIlxyXG5pbXBvcnQgeyBHYW1lU3RhdGVNYW5hZ2VyIH0gZnJvbSAnLi9HYW1lU3RhdGVNYW5hZ2VyJztcclxuXHJcbmltcG9ydCB7U2NlbmV9IGZyb20gXCIuL1NjZW5lXCI7XHJcbmV4cG9ydCBjbGFzcyBTY2VuZU1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBzY2VuZXMgOiBTY2VuZVtdO1xyXG4gICAgcHJpdmF0ZSBnYW1lU3RhdGVNYW5hZ2VyOkdhbWVTdGF0ZU1hbmFnZXI7XHJcbiAgICBwdWJsaWMgY3VycmVudFNjZW5lIDogU2NlbmU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuc2NlbmVzID0gW107XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGVNYW5hZ2VyID0gbmV3IEdhbWVTdGF0ZU1hbmFnZXIoKTtcclxuICAgIH1cclxuICAgIGNoYW5nZVNjZW5lKHNjZW5lOiBzdHJpbmcpOnZvaWR7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coMjIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ2FtZVN0YXRlTWFuYWdlci5nZXRTdGF0ZSgpKTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnRTY2VuZShzY2VuZSk7XHJcbiAgICB9XHJcbiAgICBzZXRDdXJyZW50U2NlbmUoc2NlbmU6IHN0cmluZyk6dm9pZHtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5zY2VuZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLnNjZW5lc1tpXS5uYW1lID09IHNjZW5lKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodGltZTogbnVtYmVyLGRlbHRhIDpudW1iZXIpe1xyXG4gICAgICAgIC8vIHRoaXMuc2NlbmVzLmZvckVhY2goIHNjZW5lID0+IHtzY2VuZS51cGRhdGUodGltZSxkZWx0YSApfSApO1xyXG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFNjZW5lKCkudXBkYXRlKHRpbWUsZGVsdGEpO1xyXG4gICAgfVxyXG4gICAgYWRkU2NlbmUoc2NlbmU6IFNjZW5lKXtcclxuICAgICAgICB0aGlzLnNjZW5lcy5wdXNoKHNjZW5lKTtcclxuICAgICAgICAvLyBzY2VuZS5zY2VuZXMgPSB0aGlzO1xyXG4gICAgfVxyXG4gICAgc3RhcnRTY2VuZSgpe1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXNbMF07XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50U2NlbmVOYW1lKCkgOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTY2VuZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFNjZW5lKCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zY2VuZXNbdGhpcy5nYW1lU3RhdGVNYW5hZ2VyLmdldFN0YXRlKCldKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2NlbmU7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuc2NlbmVzWzJdO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJpbXBvcnQge0dhbWVPYmplY3R9IGZyb20gXCIuL0dhbWVPYmplY3RcIlxyXG5leHBvcnQgY2xhc3MgU3ByaXRlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgICBmcmFtZUtleXM6IHN0cmluZ1tdO1xyXG4gICAgY3VycmVudEZyYW1lSWQ6IG51bWJlciA9IDA7XHJcbiAgICBjb3VudDogbnVtYmVyID0gNjtcclxuICAgIGNvbnN0cnVjdG9yKHg6bnVtYmVyLCAgeSA6bnVtYmVyICwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGltYWdlS2V5OnN0cmluZyAsIGZyYW1lcyA6IHN0cmluZ1tdKXtcclxuICAgICAgICBzdXBlcih4LHksd2lkdGgsaGVpZ2h0LGltYWdlS2V5KTtcclxuICAgICAgICB0aGlzLmZyYW1lS2V5cyA9IGZyYW1lcztcclxuICAgIH1cclxuICAgIHNldEN1cnJlbnRGcmFtZSgpe1xyXG4gICAgICAgIHRoaXMuaW1hZ2VLZXkgPSB0aGlzLmZyYW1lS2V5c1swXTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUZyYW1lKCl7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVJZCA9IHRoaXMuY3VycmVudEZyYW1lSWQgPiAodGhpcy5mcmFtZUtleXMubGVuZ3RoLTIpID8gMCA6IHRoaXMuY3VycmVudEZyYW1lSWQgKyAxO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgICAgICB0aGlzLmltYWdlS2V5ID0gdGhpcy5mcmFtZUtleXNbdGhpcy5jdXJyZW50RnJhbWVJZF07XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIGRhdGFJbWFnZSA6IE1hcDxzdHJpbmcsSFRNTEltYWdlRWxlbWVudD47XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuZGF0YUltYWdlID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgYWRkSW1hZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZih0aGlzLmRhdGFJbWFnZS5nZXQoa2V5KSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHZhbHVlOztcclxuICAgICAgICAgICAgdGhpcy5kYXRhSW1hZ2Uuc2V0KGtleSwgaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBnZXRJbWFnZShrZXk6IHN0cmluZykgOiBIVE1MSW1hZ2VFbGVtZW50IHtcclxuICAgICAgIHJldHVybiB0aGlzLmRhdGFJbWFnZS5nZXQoa2V5KTtcclxuICAgIH1cclxufSIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRlciB7XHJcbiAgICBhc3luYyBsb2FkSW1hZ2UodXJsOiBzdHJpbmcpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHVybDtcclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU2NvcmV7XHJcbiAgICAgICAgcHJpdmF0ZSBzY29yZTpudW1iZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBhZGRTY29yZTogYm9vbGVhbjtcclxuICAgICAgICBwcml2YXRlIHN0b3JlU2NvcmU6IEFycmF5PG51bWJlcj4gPVtdO1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcigpe3tcclxuICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgICAgdGhpcy5hZGRTY29yZSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLnN0b3JlU2NvcmVbMF0gPSAwO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgcHVibGljIGFkZHN0b3JlU2NvcmUoKTp2b2lke1xyXG4gICAgICAgICAgdmFyIHNpemVPZlN0b3JlU2NvcmUgPSB0aGlzLnN0b3JlU2NvcmUubGVuZ3RoO1xyXG4gICAgICAgICAgdGhpcy5zdG9yZVNjb3JlW3NpemVPZlN0b3JlU2NvcmVdID0gdGhpcy5zY29yZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGdldE1heHNjb3JlKCk6YW55e1xyXG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsICB0aGlzLnN0b3JlU2NvcmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc2V0U2NvcmUoU2NvcmU6IGFueSk6dm9pZHtcclxuICAgICAgICAgIHRoaXMuc2NvcmUgPSBTY29yZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGdldFNjb3JlKCkgOm51bWJlcntcclxuICAgICAgICAgIHJldHVybiB0aGlzLnNjb3JlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgcmVzZXQoKTp2b2lke1xyXG4gICAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgICB0aGlzLmFkZFNjb3JlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHVwZGF0ZShiaXJkOmFueSwgY29sdW1uczphbnkscmVjdENvbGxpc2lvbjphbnkpIDp2b2lke1xyXG4gICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBmb3IodmFyIGkgPSAwIDsgaSA8IDYgOyBpKz0yKXtcclxuICAgICAgICAgICAgdmFyIHJlY3RDb2x1bW4gPSBbY29sdW1uc1tpXS54ICsgY29sdW1uc1swXS53aWR0aCwgY29sdW1uc1tpKzFdLnkgLSAyNDAsIDEsIGNvbHVtbnNbMF0uYmxhbmtdO1xyXG4gICAgICAgICAgICB2YXIgcmVjdEJpcmQgPSBbYmlyZC54LCBiaXJkLnksIGJpcmQud2lkdGgsIGJpcmQuaGVpZ2h0XTtcclxuICAgICAgICAgICAgaWYgKHJlY3RDb2xsaXNpb24ocmVjdEJpcmQsIHJlY3RDb2x1bW4pID09IHRydWUpXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGNvbGxpc2lvbiA9PSB0cnVlKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkU2NvcmUgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU2NvcmUgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU2NvcmUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9GbGFwcHlCaXJkL0ZsYXBweUJpcmRHYW1lLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9