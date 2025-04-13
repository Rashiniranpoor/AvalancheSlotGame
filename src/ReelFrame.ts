import { Container, Sprite } from "pixi.js";
import { BackGround } from "./BackGround";
import { reelFrameHeight, reelFrameWidth } from "./GameSetting";

export class ReelFrame {
  public _bg: BackGround;
  public _reelFrameContainer: Container;

  constructor(backGround: BackGround) {
    this._bg = backGround;
    this._reelFrameContainer = new Container();
    this._reelFrameContainer.label="ReelFrame"
  }

  public Init() {
    this._bg._bgContainer.addChild(this._reelFrameContainer);

    const reelFrame = Sprite.from("reelFrame");
    reelFrame.anchor.set(0.5);
    reelFrame.width = reelFrameWidth;
    reelFrame.height = reelFrameHeight;

    this._reelFrameContainer.addChild(reelFrame);

    this._reelFrameContainer.position.set(0,0);
    
  }
}
