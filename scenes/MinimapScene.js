import { ActiveScene } from './ACTIVE_SCENE.js';


let controls;

export class MinimapScene extends Phaser.Scene{
    constructor(player = null){
        super({
            key: ActiveScene.AvailableScenes.Minimap
        })
        this._player = player;
    }

    init(msg){
        console.log("Minimap: ",msg);
    }

    preload(){

        this.load.image('menu_bg', './asset/menu/menu-bg.png');
        //this.load.spritesheet('base_tiles_ss', './asset/spritesheet/tiles_spritesheet.png');
        //this.load.atlas('base_map', './asset/spritesheet/tiles_spritesheet.png', 'asset/spritesheet/tiles_spritesheet.json');

        this.load.image("roads2W", "./asset/spritesheet/roads2W.png");
        this.load.image("RPGTileset", "./asset/spritesheet/TilesetPyxel.png");
        this.load.tilemapTiledJSON("map", "./asset/spritesheet/map_updated.json");

    }

    create(){
        //this.scene.start( ActiveScene.AvailableScenes.Menu, "Here!" )
        const background = this.add.image('base_map', 'Decor/Racing_Lights (2).png').setOrigin(0) //this.add.image(0,0, "menu_bg").setOrigin(0);
        background.displayWidth = 800;
        background.displayHeight = 600;

        const map = this.make.tilemap({ key: "map" });
        const tileset = map.addTilesetImage("roads2W", "roads2W");
        const tileset2 = map.addTilesetImage("RPG TileSet", "RPGTileset");
        
        //const tileset = map.addTilesetImage("tuxmon-sample-32px-extruded", "tiles");

        const layer1 = map.createStaticLayer("Map", tileset, 0, 0).setScale(3);
        const layer2 = map.createStaticLayer("Trees", tileset2, 0, 0).setScale(3);
        const layer3 = map.createStaticLayer("Bridge", tileset2, 0, 0).setScale(3);

        // Phaser supports multiple cameras, but you can access the default camera like this:
        const camera = this.cameras.main;

        let cursors = this.input.keyboard.createCursorKeys();
        controls = new Phaser.Cameras.Controls.FixedKeyControl({
            camera: camera,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            speed: 0.7
        });

        // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
        camera.setBounds(0, 0, 2300, 1530);
        //console.log(map.widthInPixels*5, map.heightInPixels*5);

        // Help text that has a "fixed" position on the screen
        this.add
            .text(16, 16, "Arrow keys to scroll", {
            font: "18px monospace",
            fill: "#ffffff",
            padding: { x: 20, y: 10 },
            backgroundColor: "#000000"
            })
            .setScrollFactor(0);

        this._player = this.physics.add.sprite(300,300,'car').setScale(1/16);

    }

    update(time, delta){
        controls.update(delta);

        this._player.body.setVelocity(0);

        
    }
}