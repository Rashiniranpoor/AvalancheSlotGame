import { Container, Sprite } from "pixi.js";
import {
  reelFrameBorderSize,
  reelHeight,
  reelWidth,
  symbolWidth,
} from "./GameSetting";
import { ReelFrame } from "./ReelFrame";

export class Reel {
  _rellContainer: Container;
  _index: number;
  _reelFrame: ReelFrame;

  constructor(reelFrame: ReelFrame, index: number) {
    this._reelFrame = reelFrame;
    this._index = index;
    this._rellContainer = new Container();
    this._rellContainer.label = "Reel";
  }

  public Init() {
    this._reelFrame._reelFrameContainer.addChild(this._rellContainer);

    const reel = Sprite.from("reel");

    this._rellContainer.addChild(reel);

    const xPosition = this._reelFrame._reelFrameContainer.width / 2;
    const yPosition = this._reelFrame._reelFrameContainer.height ;
    console.log(yPosition);
    console.log(xPosition);

    this._rellContainer.position.set(
      (this._index * reelWidth) - xPosition + reelFrameBorderSize,
      -yPosition + reelHeight + reelFrameBorderSize
    );
  }
}
