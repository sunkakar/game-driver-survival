import { LoadScene } from './scenes/LoadScene';
import { MenuScene } from './scenes/MenuScene';
import { MinimapScene } from './scenes/MinimapScene';

const config = {
    type: Phaser.AUTO, // Which renderer to use
    width: 800, // Canvas width in pixels
    height: 600, // Canvas height in pixels
    backgroundColor: '#f09020',
    parent: "game-container",
    scene: [
      LoadScene, 
      MenuScene,
      MinimapScene
    ],
    render:{
      pixelArt: true
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 } // Top down game, so no gravity
      }
    }
  };
  
  const game = new Phaser.Game(config);
  
  // function preload() {
  //   // Runs once, loads up assets like images and audio
  //   this.load.image("grass", "./asset/png/tile/Background_Tiles/Grass_Tile.png");
  //   //this.load.image("grass-tiles", "../spritesheet/grass_ss.png");
  //   this.load.tilemap("grass-tiles", "../spritesheet/grass_ss.png",32,32);

  //   this.load.image('car', './assets/png/car/Car_1_Main_Positions/Car_1_01.png');
  //   this.load.tilemapTiledJSON('map', './spritesheet/grass_ss.json');
  //   this.load.image('tiles1', 'assets/tilemaps/tiles/super-mario.png');
  // }
  
  // function create() {
  //   // Runs once, after all assets in preload are loaded
  //   const level = [
  //       [  0,   2,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
  //       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
  //       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
  //       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
  //       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
  //       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
  //       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
  //       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
  //       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
  //       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
  //       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ]
  //     ];

  //     map = game.add.tilemap('map');
      

  //     var background = this.add.sprite(0, 0, "grass", "./asset/png/tile/Grass_Tile (2).png");
  //     const map = this.make.tilemap({ data: level, tileWidth: 50, tileHeight: 50 });
  //     const tiles = map.addTilesetImage("grass-tiles");
  //     const layer = map.createStaticLayer(0, tiles, 0, 0);
  //     //background.setScale(3, 2.4);
  // }
  
  // function update(time, delta) {
  //   // Runs once per frame for the duration of the scene
  // }