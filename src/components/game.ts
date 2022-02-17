import raylib from "raylib";
import { Scene, IdScene } from "./scene.js";
import { createScene } from "./createObject.js";
import config from "../../assets/config/game.json";

/*
  NOTE ON RAYLIB
  NOTE ON TYPESCRIPT
    to import the textures remerber the starting is ./ (where is the tsconfing.json) so always put ./assets/textures in all config.json
*/

export type InfoGame = {
  running: boolean;
  currentScene: IdScene;
  screenWidth: number;
  screenHeight: number;
  title: string;
  fpsLimit: number;
};

export class Game {
  info: InfoGame;
  allScene: Map<IdScene, Scene>;
  constructor() {
    // Init the raylib setup
    //for this init i will to a JSON to Typescript obj directly but not now, to optimise somethings you need sommething
    this.info = {
      running: true,
      currentScene: IdScene[config.scene.sceneAtStart],
      screenWidth: Number(config.game.screenWidth),
      screenHeight: Number(config.game.screenHeight),
      title: config.game.title,
      fpsLimit: Number(config.game.fpsLimit),
    };
    this.allScene = new Map<IdScene, Scene>();
  }
  load(): void {
    //later do a assetManager
    raylib.InitWindow(
      this.info.screenWidth,
      this.info.screenHeight,
      this.info.title
    );
    raylib.SetTargetFPS(this.info.fpsLimit);
    let sceneToLoad = config.scene.sceneToLoadAtStart;
    sceneToLoad.forEach((elem) => {
      this.allScene.set(IdScene[elem], createScene(IdScene[elem]));
      this.allScene.get(IdScene[elem]).load({});
    });
  }
  event(): void {
    //faudra faire une "modal" à termes bro
    // for (let i = 0; i < this._nbPlayer; i++) {
    //   if (r.IsGamepadAvailable(i) === false) {
    //     console.log("reconnect the " + i + " controller");
    //     while (r.IsGamepadAvailable(i) === false) {}
    //   }
  }
  update(): void {
    let bufferIdScene = this.allScene
      .get(this.info.currentScene)
      .update(this.info, {});
    if (bufferIdScene !== this.info.currentScene) {
      this.info.currentScene = bufferIdScene;
    }
  }
  draw(): void {
    raylib.BeginDrawing();
    raylib.ClearBackground(raylib.RAYWHITE);
    this.allScene.get(this.info.currentScene).draw();
    raylib.EndDrawing();
  }
  loop(): void {
    while (!raylib.WindowShouldClose() && this.info.running) {
      this.event();
      this.update();
      this.draw();
    }
    // maybe create and put this part into a unload method
    raylib.CloseWindow();
  }
}
