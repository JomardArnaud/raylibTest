"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = exports.IdScene = void 0;
// String instead if interger to be able to set easly scene from json
var IdScene;
(function (IdScene) {
    IdScene[IdScene["titleScreen"] = 0] = "titleScreen";
    IdScene[IdScene["test"] = 1] = "test";
    IdScene[IdScene["nbScene"] = 2] = "nbScene";
})(IdScene = exports.IdScene || (exports.IdScene = {}));
class Scene {
    constructor(info) {
        this._info = info;
    }
    load(props) {
        console.log("Scene: i'm loading asset");
    }
    // can send a props = {}, but it is better than put props optional (https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
    update(infoGame, props) {
        console.log("Scene: i'm updating");
        return this._info.id;
    }
    draw() {
        console.log("Scene: i'm drawing");
    }
}
exports.Scene = Scene;
//# sourceMappingURL=scene.js.map