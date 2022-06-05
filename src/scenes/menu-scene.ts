import PlayScene from "./play-scene";

export default class MenuScene extends Phaser.Scene {
  public static readonly SCENE_KEY = 'MenuScene';

  constructor () {
    super({ key: MenuScene.SCENE_KEY })
  }

  init () { }

  preload () { }

  create () {
    this.scene.start(PlayScene.SCENE_KEY)
  }

  update () { }
}