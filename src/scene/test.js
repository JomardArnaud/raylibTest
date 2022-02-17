"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STest = void 0;
const index_1 = __importDefault(require("../../lib/index"));
const scene_js_1 = require("../components/scene.js");
const test_json_1 = __importDefault(require("../../assets/config/test.json"));
class STest extends scene_js_1.Scene {
    constructor(info) {
        super(info);
    }
    load(props) {
        console.log("Test: i'm loading asset");
        this.p.sprite = index_1.default.LoadTexture(test_json_1.default.assets.textures.player);
        this.p.pos = props.posPlayer;
        this.p.speed = test_json_1.default.info.player.speed;
    }
    update(infoGame, props) {
        console.log("test: i'm updating");
        this.p.pos.x +=
            index_1.default.GetGamepadAxisMovement(0, index_1.default.GamepadAxis.GAMEPAD_AXIS_LEFT_X) *
                this.p.speed;
        this.p.pos.y +=
            index_1.default.GetGamepadAxisMovement(0, index_1.default.GamepadAxis.GAMEPAD_AXIS_LEFT_Y) *
                this.p.speed;
        return this._info.id;
    }
    draw() {
        index_1.default.DrawTexture(this.p.sprite, this.p.pos.x, this.p.pos.y, index_1.default.WHITE);
    }
}
exports.STest = STest;
//# sourceMappingURL=test.js.map