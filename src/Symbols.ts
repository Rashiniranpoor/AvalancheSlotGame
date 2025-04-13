import { Container } from "pixi.js";
import { Reel } from "./Reel";
import { symbolCount } from "./GameSetting";

export class Symbols {
  _reel: Reel;
  _symbolContainer: Container[]=[];
  _index: number;

  constructor(reel: Reel, index: number) {
    this._reel = reel;
    this._index = index;
  }

  public Init() {
    this._reel._rellContainer.addChild(this._symbolContainer);
  }
}
