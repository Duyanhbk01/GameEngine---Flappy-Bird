/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
var CoreLoop_1 = __webpack_require__(/*! ../GameEngine/CoreLoop */ "./src/GameEngine/CoreLoop.ts");
var GameObject_1 = __webpack_require__(/*! ../GameEngine/GameObject */ "./src/GameEngine/GameObject.ts");
var GameStartScene_1 = __webpack_require__(/*! ./GameStartScene */ "./src/FlappyBird/GameStartScene.ts");
var FlappyBirdGame = /** @class */ (function (_super) {
    __extends(FlappyBirdGame, _super);
    function FlappyBirdGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FlappyBirdGame;
}(CoreLoop_1.CoreLoop));
var flappyBirdGame = new FlappyBirdGame(800, 900);
var gameStartScene = new GameStartScene_1.GameStartScene("GameStartScene");
// flappyBirdGame.addScene(gameStartScene);
gameStartScene.addgameObject(new GameObject_1.GameObject(0, 0, 600, 700, "../../public/image/bg.png"));
flappyBirdGame.start();


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
var Scene_1 = __webpack_require__(/*! ../GameEngine/Scene */ "./src/GameEngine/Scene.ts");
var GameStartScene = /** @class */ (function (_super) {
    __extends(GameStartScene, _super);
    function GameStartScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
        this.input = new InputHandler_1.InputHandler();
        // console.log(this.input);
    }
    CoreLoop.prototype.start = function () {
        this.lastTime = window.performance.now();
        requestAnimationFrame(this.loop);
    };
    CoreLoop.prototype.loop = function () {
        var time = window.performance.now();
        var delta = 0;
        this.input.update(time, delta);
        // this.scenes.update(time,delta);
        // this.renderer.render(this.scenes.getCurrentScene());
    };
    CoreLoop.prototype.addScene = function (scene) {
        this.scenes.addScene(scene);
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
    function GameObject(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }
    return GameObject;
}());
exports.GameObject = GameObject;


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
    StateGame[StateGame["startGame"] = 1] = "startGame";
    StateGame[StateGame["playGame"] = 2] = "playGame";
    StateGame[StateGame["endGame"] = 3] = "endGame";
})(StateGame || (StateGame = {}));
var GameStateManager = /** @class */ (function () {
    function GameStateManager() {
        this.currentState = StateGame.startGame;
    }
    GameStateManager.prototype.setState = function (newState) {
        this.currentState = newState;
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
    // pointer: Pointer;
    function InputHandler() {
        // this.pointer = new Pointer();
    }
    InputHandler.prototype.update = function (time, delta) {
    };
    return InputHandler;
}());
exports.InputHandler = InputHandler;


/***/ }),

/***/ "./src/GameEngine/Renderer.ts":
/*!************************************!*\
  !*** ./src/GameEngine/Renderer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Renderer = void 0;
function component(width, height) {
    var element = document.createElement('div');
    element.innerHTML =
        "<div id=\"container\" style=\"width:100%;height:900px\">\n      <div style=\"margin: auto; width:800px; height:900px;\">\n          <canvas  id=\"myChart\" width=".concat(width, " height=").concat(height, "></canvas>   \n      </div>\n     </div>");
    return element;
}
var Renderer = /** @class */ (function () {
    function Renderer(width, height) {
        document.body.appendChild(component(width, height));
        this.canvas = document.getElementsByTagName('canvas')[0];
        this.ctx = this.canvas.getContext('2d');
    }
    Renderer.prototype.render = function (scene) {
        var _this = this;
        scene.getAllGameObjectText().forEach(function (object) { _this.renderObject(object); });
        scene.getAllGameObject().forEach(function (object) { _this.renderObject(object); });
    };
    Renderer.prototype.renderObject = function (object) {
        console.log(typeof (object));
    };
    return Renderer;
}());
exports.Renderer = Renderer;


/***/ }),

/***/ "./src/GameEngine/Scene.ts":
/*!*********************************!*\
  !*** ./src/GameEngine/Scene.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scene = void 0;
var Scene = /** @class */ (function () {
    function Scene(newname) {
        this.name = newname;
        this.gameObject = new Array();
    }
    Scene.prototype.addgameObject = function (gameObject) {
        var lengthOfGameObject = this.gameObject.length;
        this.gameObject[lengthOfGameObject] = gameObject;
    };
    Scene.prototype.addgameObjectText = function (gameObjectText) {
        var lengthOfGameObjectText = this.gameObjectText.length;
        gameObjectText[lengthOfGameObjectText] = gameObjectText;
    };
    Scene.prototype.update = function (time, delta) {
    };
    Scene.prototype.getAllGameObjectText = function () {
        return this.gameObjectText;
    };
    Scene.prototype.getAllGameObject = function () {
        return this.gameObject;
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
    SceneManager.prototype.changeScene = function () {
    };
    SceneManager.prototype.update = function (time, delta) {
        this.scenes.forEach(function (scene) { scene.update(time, delta); });
    };
    SceneManager.prototype.addScene = function (scene) {
        this.scenes.push(scene);
    };
    SceneManager.prototype.startScene = function (name) {
    };
    SceneManager.prototype.getCurrentScene = function () {
        return this.scenes[this.gameStateManager.getState()];
    };
    return SceneManager;
}());
exports.SceneManager = SceneManager;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLG1DQUFnQixFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUNELGtDQUFXLEdBQVg7SUFFQSxDQUFDO0lBQ0QsNkJBQU0sR0FBTixVQUFPLElBQVksRUFBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLGVBQUssSUFBSyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQyxLQUFLLENBQUUsR0FBQyxDQUFFLENBQUM7SUFDaEUsQ0FBQztJQUNELCtCQUFRLEdBQVIsVUFBUyxLQUFZO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxpQ0FBVSxHQUFWLFVBQVcsSUFBWTtJQUV2QixDQUFDO0lBQ0Qsc0NBQWUsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDO0FBdEJZLG9DQUFZOzs7Ozs7O1VDSHpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWVrMS8uL3NyYy9GbGFwcHlCaXJkL0ZsYXBweUJpcmRHYW1lLnRzIiwid2VicGFjazovL3dlZWsxLy4vc3JjL0ZsYXBweUJpcmQvR2FtZVN0YXJ0U2NlbmUudHMiLCJ3ZWJwYWNrOi8vd2VlazEvLi9zcmMvR2FtZUVuZ2luZS9Db3JlTG9vcC50cyIsIndlYnBhY2s6Ly93ZWVrMS8uL3NyYy9HYW1lRW5naW5lL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vd2VlazEvLi9zcmMvR2FtZUVuZ2luZS9HYW1lU3RhdGVNYW5hZ2VyLnRzIiwid2VicGFjazovL3dlZWsxLy4vc3JjL0dhbWVFbmdpbmUvSW5wdXRIYW5kbGVyLnRzIiwid2VicGFjazovL3dlZWsxLy4vc3JjL0dhbWVFbmdpbmUvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vd2VlazEvLi9zcmMvR2FtZUVuZ2luZS9TY2VuZS50cyIsIndlYnBhY2s6Ly93ZWVrMS8uL3NyYy9HYW1lRW5naW5lL1NjZW5lTWFuYWdlci50cyIsIndlYnBhY2s6Ly93ZWVrMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWVrMS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlZWsxL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWVrMS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZUxvb3AgfSBmcm9tIFwiLi4vR2FtZUVuZ2luZS9Db3JlTG9vcFwiXHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vR2FtZUVuZ2luZS9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEdhbWVQbGF5U2NlbmUgfSBmcm9tIFwiLi9HYW1lUGxheVNjZW5lXCJcclxuaW1wb3J0IHsgR2FtZVN0YXJ0U2NlbmUgfSBmcm9tIFwiLi9HYW1lU3RhcnRTY2VuZVwiXHJcbmNsYXNzIEZsYXBweUJpcmRHYW1lIGV4dGVuZHMgQ29yZUxvb3Age1xyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IGZsYXBweUJpcmRHYW1lID0gbmV3IEZsYXBweUJpcmRHYW1lKDgwMCw5MDApXHJcbmNvbnN0IGdhbWVTdGFydFNjZW5lID0gbmV3IEdhbWVTdGFydFNjZW5lKFwiR2FtZVN0YXJ0U2NlbmVcIik7XHJcbi8vIGZsYXBweUJpcmRHYW1lLmFkZFNjZW5lKGdhbWVTdGFydFNjZW5lKTtcclxuZ2FtZVN0YXJ0U2NlbmUuYWRkZ2FtZU9iamVjdChuZXcgR2FtZU9iamVjdCgwLDAsNjAwLDcwMCxcIi4uLy4uL3B1YmxpYy9pbWFnZS9iZy5wbmdcIikpO1xyXG5mbGFwcHlCaXJkR2FtZS5zdGFydCgpIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vR2FtZUVuZ2luZS9TY2VuZVwiO1xyXG5leHBvcnQgY2xhc3MgR2FtZVN0YXJ0U2NlbmUgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICAgICAgXHJcbn0iLCJpbXBvcnQgeyBJbnB1dEhhbmRsZXIgfSBmcm9tICcuL0lucHV0SGFuZGxlcic7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSBcIi4vUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgU2NlbmVNYW5hZ2VyIH0gZnJvbSBcIi4vU2NlbmVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vU2NlbmVcIjtcclxuZXhwb3J0IGNsYXNzIENvcmVMb29we1xyXG4gICAgc2NlbmVzOiBTY2VuZU1hbmFnZXI7XHJcbiAgICByZW5kZXJlciA6IFJlbmRlcmVyO1xyXG4gICAgaW5wdXQgOiBJbnB1dEhhbmRsZXI7XHJcbiAgICBsYXN0VGltZTogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3Iod2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLnNjZW5lcyA9IG5ldyBTY2VuZU1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXRIYW5kbGVyKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pbnB1dCk7XHJcblxyXG4gICAgfVxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xyXG4gICAgfVxyXG4gICAgbG9vcCgpe1xyXG4gICAgICAgIGNvbnN0IHRpbWUgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgY29uc3QgZGVsdGEgPSAwO1xyXG4gICAgICAgIHRoaXMuaW5wdXQudXBkYXRlKHRpbWUsZGVsdGEpO1xyXG4gICAgICAgIC8vIHRoaXMuc2NlbmVzLnVwZGF0ZSh0aW1lLGRlbHRhKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZXMuZ2V0Q3VycmVudFNjZW5lKCkpO1xyXG4gICAgfVxyXG4gICAgYWRkU2NlbmUoc2NlbmU6IFNjZW5lKXtcclxuICAgICAgICB0aGlzLnNjZW5lcy5hZGRTY2VuZShzY2VuZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEdhbWVPYmplY3R7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBpbWFnZTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgIH1cclxufSIsImVudW0gU3RhdGVHYW1lIHtcclxuICAgIHN0YXJ0R2FtZSA9IDEsXHJcbiAgICBwbGF5R2FtZSxcclxuICAgIGVuZEdhbWUsXHJcbiAgfVxyXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlTWFuYWdlcntcclxuICAgIHByaXZhdGUgY3VycmVudFN0YXRlIDogU3RhdGVHYW1lO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFN0YXRlR2FtZS5zdGFydEdhbWU7XHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZShuZXdTdGF0ZSA6IFN0YXRlR2FtZSk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgIH1cclxuICAgIGdldFN0YXRlKCk6U3RhdGVHYW1le1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBvaW50ZXIgfSBmcm9tIFwiLi9Qb2ludGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBJbnB1dEhhbmRsZXJ7XHJcbiAgICAvLyBwb2ludGVyOiBQb2ludGVyO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICAvLyB0aGlzLnBvaW50ZXIgPSBuZXcgUG9pbnRlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIsZGVsdGE6IG51bWJlcik6dm9pZHtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuL1NjZW5lXCI7XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQod2lkdGggOiBudW1iZXIsaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXHJcbiAgICBgPGRpdiBpZD1cImNvbnRhaW5lclwiIHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6OTAwcHhcIj5cclxuICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogYXV0bzsgd2lkdGg6ODAwcHg7IGhlaWdodDo5MDBweDtcIj5cclxuICAgICAgICAgIDxjYW52YXMgIGlkPVwibXlDaGFydFwiIHdpZHRoPSR7d2lkdGh9IGhlaWdodD0ke2hlaWdodH0+PC9jYW52YXM+ICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgIDwvZGl2PmA7XHJcbiAgICAgIFxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlcmVye1xyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgY29uc3RydWN0b3Iod2lkdGggOiBudW1iZXIsIGhlaWdodCA6IG51bWJlcikge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCh3aWR0aCxoZWlnaHQpKTtcclxuICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJylbMF07XHJcbiAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuICAgIHJlbmRlcihzY2VuZTogU2NlbmUpe1xyXG4gICAgICBzY2VuZS5nZXRBbGxHYW1lT2JqZWN0VGV4dCgpLmZvckVhY2gob2JqZWN0ID0+IHt0aGlzLnJlbmRlck9iamVjdChvYmplY3QpfSk7XHJcbiAgICAgIHNjZW5lLmdldEFsbEdhbWVPYmplY3QoKS5mb3JFYWNoKG9iamVjdCA9PiB7dGhpcy5yZW5kZXJPYmplY3Qob2JqZWN0KX0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW5kZXJPYmplY3Qob2JqZWN0OiBhbnkpeyAgXHJcbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZihvYmplY3QpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5le1xyXG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lT2JqZWN0IDpBcnJheTxHYW1lT2JqZWN0PjtcclxuICAgIHByaXZhdGUgZ2FtZU9iamVjdFRleHQgOkFycmF5PGFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IobmV3bmFtZTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuZXduYW1lO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdCA9IG5ldyBBcnJheTxHYW1lT2JqZWN0PigpO1xyXG4gICAgfVxyXG4gICAgYWRkZ2FtZU9iamVjdChnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KSA6IHZvaWQge1xyXG4gICAgICAgIGxldCBsZW5ndGhPZkdhbWVPYmplY3QgPSB0aGlzLmdhbWVPYmplY3QubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdFtsZW5ndGhPZkdhbWVPYmplY3RdID0gZ2FtZU9iamVjdDtcclxuICAgIH1cclxuICAgIGFkZGdhbWVPYmplY3RUZXh0KGdhbWVPYmplY3RUZXh0OmFueSl7XHJcbiAgICAgICAgbGV0IGxlbmd0aE9mR2FtZU9iamVjdFRleHQgPSB0aGlzLmdhbWVPYmplY3RUZXh0Lmxlbmd0aDtcclxuICAgICAgICBnYW1lT2JqZWN0VGV4dFtsZW5ndGhPZkdhbWVPYmplY3RUZXh0XSA9IGdhbWVPYmplY3RUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA6IHZvaWQge1xyXG5cclxuICAgIH1cclxuICAgIGdldEFsbEdhbWVPYmplY3RUZXh0KCk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVPYmplY3RUZXh0O1xyXG4gICAgfVxyXG4gICAgZ2V0QWxsR2FtZU9iamVjdCgpOiBBcnJheTxHYW1lT2JqZWN0PntcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lT2JqZWN0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZVN0YXRlTWFuYWdlciB9IGZyb20gJy4vR2FtZVN0YXRlTWFuYWdlcic7XHJcblxyXG5pbXBvcnQge1NjZW5lfSBmcm9tIFwiLi9TY2VuZVwiO1xyXG5leHBvcnQgY2xhc3MgU2NlbmVNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgc2NlbmVzIDogU2NlbmVbXTtcclxuICAgIHByaXZhdGUgZ2FtZVN0YXRlTWFuYWdlcjpHYW1lU3RhdGVNYW5hZ2VyO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnNjZW5lcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlTWFuYWdlciA9IG5ldyBHYW1lU3RhdGVNYW5hZ2VyKCk7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VTY2VuZSgpOnZvaWR7XHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlKHRpbWU6IG51bWJlcixkZWx0YSA6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLnNjZW5lcy5mb3JFYWNoKCBzY2VuZSA9PiB7c2NlbmUudXBkYXRlKHRpbWUsZGVsdGEgKX0gKTtcclxuICAgIH1cclxuICAgIGFkZFNjZW5lKHNjZW5lOiBTY2VuZSl7XHJcbiAgICAgICAgdGhpcy5zY2VuZXMucHVzaChzY2VuZSk7XHJcbiAgICB9XHJcbiAgICBzdGFydFNjZW5lKG5hbWU6IHN0cmluZyl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50U2NlbmUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXNbdGhpcy5nYW1lU3RhdGVNYW5hZ2VyLmdldFN0YXRlKCldO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL0ZsYXBweUJpcmQvRmxhcHB5QmlyZEdhbWUudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=