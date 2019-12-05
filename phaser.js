const config = {
    type: Phaser.AUTO, // Which renderer to use
    width: 800, // Canvas width in pixels
    height: 600, // Canvas height in pixels
    parent: "game-container", // ID of the DOM element to add the canvas to
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };
  
  const game = new Phaser.Game(config);
  
  function preload() {
    // Runs once, loads up assets like images and audio
    this.load.image("grass", "./asset/png/tile/Grass_Tile (2).png");
  }
  
  function create() {
    // Runs once, after all assets in preload are loaded
    const level = [
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ]
      ];

      //const map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
      const map = this.make
      const tiles = map.Tile(layer, 0, 0, 0, 50, 50);
      const layer = map.createStaticLayer(0, tiles, 0, 0);
  }
  
  function update(time, delta) {
    // Runs once per frame for the duration of the scene
  }