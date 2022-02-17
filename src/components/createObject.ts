import { Scene, IdScene } from "./scene";
import { STest } from "../scene/test";
import { STitleScreen } from "../scene/titleScreen";

export function createScene(type: IdScene): Scene {
  console.log("type = " + type);
  switch (type) {
    case IdScene.titleScreen:
      return new STitleScreen({ id: type });
    case IdScene.test:
      return new STest({ id: type });
    default:
      console.log("ERROR ON TYPE SCENE");
      return null;
  }
}
