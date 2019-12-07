import { LoadScene } from './scenes/LoadScene.js';
import { MenuScene } from './scenes/MenuScene.js';
import { MinimapScene } from './scenes/MinimapScene.js';

const config = {
    type: Phaser.AUTO, // Which renderer to use
    width: 800, // Canvas width in pixels
    height: 600, // Canvas height in pixels
    parent: "game-container", // ID of the DOM element to add the canvas to
    // scene: {
    //   preload: preload,
    //   create: create,
    //   update: update
    // }
    scene: [
      LoadScene, 
      MenuScene,
      MinimapScene
    ]

  };
  
  // const game = new Phaser.Game(config);
  
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