"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STitleScreen = void 0;
const index_1 = __importDefault(require("../../lib/index"));
const scene_js_1 = require("../components/scene.js");
const titleScreen_json_1 = __importDefault(require("../../assets/config/titleScreen.json"));
class STitleScreen extends scene_js_1.Scene {
    constructor(info) {
        super(info);
    }
    load(props) {
        console.log("title: i'm loading asset");
        this._titleSprite = index_1.default.LoadTexture(titleScreen_json_1.default.assets.textures.screenImage);
    }
    update(infoGame, props) {
        console.log("title: i'm updating");
        if (!index_1.default.IsKeyUp(index_1.default.KeyboardKey.KEY_R)) {
            console.log("UwU");
            return scene_js_1.IdScene.test;
        }
        return this._info.id;
    }
    draw() {
        index_1.default.DrawTexture(this._titleSprite, 0, 0, index_1.default.WHITE);
    }
}
exports.STitleScreen = STitleScreen;
//# sourceMappingURL=titleScreen.js.map