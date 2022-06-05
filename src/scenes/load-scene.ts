import MenuScene from "./menu-scene";

export default class LoadScene extends Phaser.Scene {
  public static readonly SCENE_KEY = 'LoadScene';

  constructor () {
    super({ key: LoadScene.SCENE_KEY })
  }

  init () { }

  preload () { }

  create () {
    this.scene.start(MenuScene.SCENE_KEY)
  }

  update () { }
}