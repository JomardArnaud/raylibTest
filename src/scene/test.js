"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STest = void 0;
const raylib_1 = __importDefault(require("raylib"));
const scene_js_1 = require("../components/scene.js");
const test_json_1 = __importDefault(require("../../assets/config/test.json"));
const maths = __importStar(require("../../lib/src/types/maths"));
const enums = __importStar(require("../../lib/src/types/enums"));
class STest extends scene_js_1.Scene {
    constructor(info) {
        super(info);
        this.p = {
            pos: new maths.Vector2(0, 0),
            speed: test_json_1.default.info.player.speed,
            sprite: raylib_1.default.LoadTexture(test_json_1.default.assets.textures.player),
        };
    }
    load(props) { }
    update(infoGame, props) {
        // this.p.pos.x +=
        //   r.GetGamepadAxisMovement(0, GamepadAxis.GAMEPAD_AXIS_RIGHT_Y) *
        //   this.p.speed;
        // this.p.pos.y +=
        //   r.GetGamepadAxisMovement(0, GamepadAxis.GAMEPAD_AXIS_LEFT_X) *
        //   this.p.speed;
        return this._info.id;
    }
    draw() {
        raylib_1.default.DrawTexture(this.p.sprite, this.p.pos.x, this.p.pos.y, raylib_1.default.WHITE);
        raylib_1.default.DrawCircle(259, 152, 39, raylib_1.default.BLACK);
        raylib_1.default.DrawCircle(259, 152, 34, raylib_1.default.LIGHTGRAY);
        raylib_1.default.DrawCircle(259 +
            raylib_1.default.GetGamepadAxisMovement(0, enums.GamepadAxis.GAMEPAD_AXIS_LEFT_Y) * 20, 152 +
            raylib_1.default.GetGamepadAxisMovement(0, enums.GamepadAxis.GAMEPAD_AXIS_RIGHT_X) *
                20, 25, raylib_1.default.BLACK);
    }
}
exports.STest = STest;
//# sourceMappingURL=test.js.map