import r from "raylib";
import { InfoGame } from "../components/game.js";
import { Scene, InfoScene, IdScene } from "../components/scene.js";
import config from "../../assets/config/titleScreen.json";
import * as enums from "../../lib/src/types/enums";

export class STitleScreen extends Scene {
  constructor(info: InfoScene) {
    super(info);
  }
  _titleSprite: any;
  load(props: any): void {
    this._titleSprite = r.LoadTexture(config.assets.textures.screenImage);
  }
  update(infoGame: InfoGame, props: object): IdScene {
    if (!r.IsKeyUp(enums.KeyboardKey.KEY_R)) {
      console.log("UwU");
      return IdScene.test;
    }
    return this._info.id;
  }
  draw(): void {
    r.DrawTexture(this._titleSprite, 0, 0, r.WHITE);
  }
}
