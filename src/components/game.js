"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const raylib_1 = __importDefault(require("raylib"));
const scene_js_1 = require("./scene.js");
const createObject_js_1 = require("./createObject.js");
const game_json_1 = __importDefault(require("../../assets/config/game.json"));
class Game {
    constructor() {
        // Init the raylib setup
        //for this init i will to a JSON to Typescript obj directly but not now, to optimise somethings you need sommething
        this.info = {
            running: true,
            currentScene: scene_js_1.IdScene[game_json_1.default.scene.sceneAtStart],
            screenWidth: Number(game_json_1.default.game.screenWidth),
            screenHeight: Number(game_json_1.default.game.screenHeight),
            title: game_json_1.default.game.title,
            fpsLimit: Number(game_json_1.default.game.fpsLimit),
        };
        this.allScene = new Map();
    }
    load() {
        //later do a assetManager
        raylib_1.default.InitWindow(this.info.screenWidth, this.info.screenHeight, this.info.title);
        raylib_1.default.SetTargetFPS(this.info.fpsLimit);
        let sceneToLoad = game_json_1.default.scene.sceneToLoadAtStart;
        sceneToLoad.forEach((elem) => {
            this.allScene.set(scene_js_1.IdScene[elem], (0, createObject_js_1.createScene)(scene_js_1.IdScene[elem]));
            this.allScene.get(scene_js_1.IdScene[elem]).load({});
        });
    }
    event() {
        //faudra faire une "modal" à termes bro
        // for (let i = 0; i < this._nbPlayer; i++) {
        //   if (r.IsGamepadAvailable(i) === false) {
        //     console.log("reconnect the " + i + " controller");
        //     while (r.IsGamepadAvailable(i) === false) {}
        //   }
    }
    update() {
        let bufferIdScene = this.allScene
            .get(this.info.currentScene)
            .update(this.info, {});
        if (bufferIdScene !== this.info.currentScene) {
            this.info.currentScene = bufferIdScene;
        }
    }
    draw() {
        raylib_1.default.BeginDrawing();
        raylib_1.default.ClearBackground(raylib_1.default.RAYWHITE);
        this.allScene.get(this.info.currentScene).draw();
        raylib_1.default.EndDrawing();
    }
    loop() {
        while (!raylib_1.default.WindowShouldClose() && this.info.running) {
            this.event();
            this.update();
            this.draw();
        }
        // maybe create and put this part into a unload method
        raylib_1.default.CloseWindow();
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map