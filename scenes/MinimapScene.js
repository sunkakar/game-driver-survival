import { ActiveScene } from './ACTIVE_SCENE.js';


export class MinimapScene extends Phaser.Scene{
    constructor(){
        super({
            key: ActiveScene.AvailableScenes.Minimap
        })
    }

    init(msg){
        console.log("Minimap: ",msg);
    }

    preload(){

        this.load.image('menu_bg', './asset/menu/menu-bg.png');
        //this.load.spritesheet('base_tiles_ss', './asset/spritesheet/tiles_spritesheet.png');
        //this.load.atlas('base_map', './asset/spritesheet/tiles_spritesheet.png', 'asset/spritesheet/tiles_spritesheet.json');

        this.load.image("tiles", "dist/asset/spritesheet/roads2W.png");
        this.load.tilemapTiledJSON("map", "dist/asset/spritesheet/tile_map.json");

    }

    create(){
        //this.scene.start( ActiveScene.AvailableScenes.Menu, "Here!" )
        //const background = this.add.image('base_map', 'Decor/Racing_Lights (2).png').setOrigin(0) //this.add.image(0,0, "menu_bg").setOrigin(0);
        //background.displayWidth = 800;
        //background.displayHeight = 600;

        const map = this.make.tilemap({ key: "map" });
        const tileset1 = map.addTilesetImage("tuxmon-sample-32px-extruded", "tiles");
        const tileset2 = map.addTilesetImage("tuxmon-sample-32px-extruded", "tiles");

    }
}