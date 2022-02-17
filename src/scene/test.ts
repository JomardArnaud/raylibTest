import r from "raylib";
import { InfoGame } from "../components/game.js";
import { Scene, InfoScene, IdScene } from "../components/scene.js";
import config from "../../assets/config/test.json";
import * as maths from "../../lib/src/types/maths";
import * as texture from "../../lib/src/types/texture";
import * as enums from "../../lib/src/types/enums";

type Player = {
  pos: maths.Vector2;
  speed: number;
  sprite: texture.Texture2D; //raylib is not typescript
};

export class STest extends Scene {
  constructor(info: InfoScene) {
    super(info);
    this.p = {
      pos: new maths.Vector2(0, 0),
      speed: config.info.player.speed,
      sprite: r.LoadTexture(config.assets.textures.player),
    };
  }

  p: Player;
  load(props: any): void {}
  update(infoGame: InfoGame, props: object): IdScene {
    // this.p.pos.x +=
    //   r.GetGamepadAxisMovement(0, GamepadAxis.GAMEPAD_AXIS_RIGHT_Y) *
    //   this.p.speed;
    // this.p.pos.y +=
    //   r.GetGamepadAxisMovement(0, GamepadAxis.GAMEPAD_AXIS_LEFT_X) *
    //   this.p.speed;
    return this._info.id;
  }
  draw(): void {
    r.DrawTexture(this.p.sprite, this.p.pos.x, this.p.pos.y, r.WHITE);
    r.DrawCircle(259, 152, 39, r.BLACK);
    r.DrawCircle(259, 152, 34, r.LIGHTGRAY);
    r.DrawCircle(
      259 +
        r.GetGamepadAxisMovement(0, enums.GamepadAxis.GAMEPAD_AXIS_LEFT_X) * 20,
      152 +
        r.GetGamepadAxisMovement(0, enums.GamepadAxis.GAMEPAD_AXIS_LEFT_Y) * 20,
      25,
      r.BLACK
    );
  }
}
