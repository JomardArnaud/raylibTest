"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createScene = void 0;
const scene_1 = require("./scene");
const test_1 = require("../scene/test");
const titleScreen_1 = require("../scene/titleScreen");
function createScene(type) {
    console.log("type = " + type);
    switch (type) {
        case scene_1.IdScene.titleScreen:
            return new titleScreen_1.STitleScreen({ id: type });
        case scene_1.IdScene.test:
            return new test_1.STest({ id: type });
        default:
            console.log("ERROR ON TYPE SCENE");
            return null;
    }
}
exports.createScene = createScene;
//# sourceMappingURL=createObject.js.map