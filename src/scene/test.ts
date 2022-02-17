import raylib from "../../lib/index";
import { InfoGame } from "../components/game.js";
import { Scene, InfoScene, IdScene } from "../components/scene.js";
import config from "../../assets/config/test.json";
import { Texture2D } from "../../lib/src/types/texture";
import { Vector2 } from "../../lib/src/types/maths";
type Player = {
  pos: Vector2;
  speed: number;
  sprite: Texture2D; //raylib is not typescript
};

export class STest extends Scene {
  constructor(info: InfoScene) {
    super(info);
  }

  p: Player;
  load(props: any): void {
    console.log("Test: i'm loading asset");
    this.p.sprite = raylib.LoadTexture(config.assets.textures.player);
    this.p.pos = props.posPlayer;
    this.p.speed = config.info.player.speed;
  }
  update(infoGame: InfoGame, props: object): IdScene {
    console.log("test: i'm updating");
    this.p.pos.x +=
      raylib.GetGamepadAxisMovement(0, raylib.GamepadAxis.GAMEPAD_AXIS_LEFT_X) *
      this.p.speed;
    this.p.pos.y +=
      raylib.GetGamepadAxisMovement(0, raylib.GamepadAxis.GAMEPAD_AXIS_LEFT_Y) *
      this.p.speed;
    return this._info.id;
  }
  draw(): void {
    raylib.DrawTexture(this.p.sprite, this.p.pos.x, this.p.pos.y, raylib.WHITE);
  }
}
