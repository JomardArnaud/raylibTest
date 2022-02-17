import { Game } from "./components/game.js";

function main(): void {
  let game = new Game();
  game.load();
  game.loop();
}

main();
