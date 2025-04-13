import { Application, Assets, Sprite } from "pixi.js";
import { AssetLoader } from "./AssetLoader";
import { BackGround } from "./BackGround";
import { ReelFrame } from "./ReelFrame";
import { reelCount } from "./GameSetting";
import { Reel } from "./Reel";
import {} from "../Assets/spineboy/export/spineboy-pro.json"
import { initDevtools } from '@pixi/devtools';


export class Game {
  public app: Application;
  public backGround: BackGround;
  public reelFrame: ReelFrame;
  public reel: Reel[] = [];

  constructor() {
    this.app = new Application();
    window.__PIXI_APP__ = this.app;
    
    this.backGround = new BackGround(this);
    this.reelFrame = new ReelFrame(this.backGround);
    for(let i=0; i<reelCount;i++){
      this.reel[i] = new Reel(this.reelFrame,i);
    }
 
  }

  public async Init() {
 
    await Assets.load('../Assets/spineboy/export/spineboy-ess.json');
    

    await this.app.init({
      background: "#fff",
      width: window.innerWidth,
      height: window.innerHeight,
    });
    document.body.appendChild(this.app.canvas);
    
 
    await AssetLoader.LoadAssets();
    this.backGround.Init();
    this.reelFrame.Init();

    for(let i=0; i<reelCount;i++){
      this.reel[i].Init();
    }
  }
}
