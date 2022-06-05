import Phaser from 'phaser';
import LoadScene from './scenes/load-scene';
import MenuScene from './scenes/menu-scene';
import PlayScene from './scenes/play-scene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#33A5E7',
  scale: {
    width: 800,
    height: 600,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [LoadScene, MenuScene, PlayScene]
}

export default config;