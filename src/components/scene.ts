import { InfoGame } from "./game.js";
import { STest } from "../scene/test.js";
import { STitleScreen } from "../scene/titleScreen";

// String instead if interger to be able to set easly scene from json
export enum IdScene {
  "titleScreen" = 0,
  "test" = 1,
  "nbScene",
}

export type InfoScene = {
  id: IdScene;
};

export class Scene {
  _info: InfoScene;
  load(props: any): void {
    console.log("Scene: i'm loading asset");
  }
  // can send a props = {}, but it is better than put props optional (https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
  update(infoGame: InfoGame, props: any): IdScene {
    console.log("Scene: i'm updating");
    return this._info.id;
  }
  draw(): void {
    console.log("Scene: i'm drawing");
  }
  constructor(info: InfoScene) {
    this._info = info;
  }
}
