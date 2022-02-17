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
exports.STitleScreen = void 0;
const raylib_1 = __importDefault(require("raylib"));
const scene_js_1 = require("../components/scene.js");
const titleScreen_json_1 = __importDefault(require("../../assets/config/titleScreen.json"));
const enums = __importStar(require("../../lib/src/types/enums"));
class STitleScreen extends scene_js_1.Scene {
    constructor(info) {
        super(info);
    }
    load(props) {
        this._titleSprite = raylib_1.default.LoadTexture(titleScreen_json_1.default.assets.textures.screenImage);
    }
    update(infoGame, props) {
        if (!raylib_1.default.IsKeyUp(enums.KeyboardKey.KEY_R)) {
            console.log("UwU");
            return scene_js_1.IdScene.test;
        }
        return this._info.id;
    }
    draw() {
        raylib_1.default.DrawTexture(this._titleSprite, 0, 0, raylib_1.default.WHITE);
    }
}
exports.STitleScreen = STitleScreen;
//# sourceMappingURL=titleScreen.js.map