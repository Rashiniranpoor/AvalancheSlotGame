import { AssetType } from "./AssetType"; 
import assetsData from "./assets.json";
import { Assets } from "pixi.js";

export class AssetLoader {
  static async LoadAssets() {
    const assets: AssetType[] = assetsData;
    await Assets.load(assets);
  }
}