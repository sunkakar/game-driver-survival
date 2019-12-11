import { LoadScene } from './scenes/LoadScene';
import { MenuScene } from './scenes/MenuScene';
import { MinimapScene } from './scenes/MinimapScene';
import { GameOverScene } from './scenes/GameOverScene';
import { AboutScene } from './scenes/AboutScene';
import { InstructionScene } from './scenes/InstructionScene';

// Setup Config
const config = {
    type: Phaser.AUTO, // Which renderer to use
    width: 800, // Canvas width in pixels
    height: 600, // Canvas height in pixels
    backgroundColor: '#f09020',
    parent: "game-container",
    scene: [
      LoadScene, 
      MenuScene,
      MinimapScene,
      GameOverScene,
      AboutScene,
      InstructionScene
    ],
    // render:{
    //   pixelArt: true
    // },
    physics: {
      default: "matter",
      matter: {
        gravity: { x: 0, y: 0 } // 2D Game does not need Gravity
      }
    }
  };
  
  const game = new Phaser.Game(config);
  
