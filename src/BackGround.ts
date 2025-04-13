import { BackgroundLoader, Container, Sprite } from "pixi.js";
import { Game } from "./Game";
import { backgroundWidth, backgroundHeight } from "./GameSetting";

export class BackGround {
  _bgContainer: Container;
  _game: Game;

  constructor(game: Game) {
    this._game = game;
    this._bgContainer = new Container();
    this._bgContainer.label="Background"
  }

  public Init() {
    this._game.app.stage.addChild(this._bgContainer);
    const backGround = Sprite.from("background");
   
    backGround.anchor.set(0.5);
    backGround.width = backgroundWidth;
    backGround.height = backgroundHeight;
    this._bgContainer.addChild(backGround);
    this._bgContainer.position.x = innerWidth / 2;
    this._bgContainer.position.y = innerHeight / 2;
  }
}
