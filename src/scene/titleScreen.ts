import raylib from "../../lib/index";
import { InfoGame } from "../components/game.js";
import { Scene, InfoScene, IdScene } from "../components/scene.js";
import config from "../../assets/config/titleScreen.json";

export class STitleScreen extends Scene {
  constructor(info: InfoScene) {
    super(info);
  }
  _titleSprite: any;
  load(props: any): void {
    console.log("title: i'm loading asset");
    this._titleSprite = raylib.LoadTexture(config.assets.textures.screenImage);
  }
  update(infoGame: InfoGame, props: object): IdScene {
    console.log("title: i'm updating");
    if (!raylib.IsKeyUp(raylib.KeyboardKey.KEY_R)) {
      console.log("UwU");
      return IdScene.test;
    }
    return this._info.id;
  }
  draw(): void {
    raylib.DrawTexture(this._titleSprite, 0, 0, raylib.WHITE);
  }
}
