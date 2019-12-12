import { ActiveScene } from './ACTIVE_SCENE.js';

// Load Scene
/// Loads assets and Transfers over control to the Menu Scene

export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: ActiveScene.AvailableScenes.Load
        })
    }

    init(msg){
        console.log("Load: ",msg);
    }

    preload(){

        let loadBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff
            }
        })

        for(let i = 0; i< 100; i++)
        {
            this.load.spritesheet("grass_tiles","../asset/spritesheet/grass_ss.png" , {
                frameHeight: 512,
                frameWidth: 512
            })

            this.load.image('car', './asset/png/car/Car_1_Main_Positions/Car_Sprite.png');
            this.load.image('menu_logo', './asset/menu/game-logo.png');
            this.load.image('menu_bg', './asset/menu/menu-bg.png');

            //this.load.image("tiles", "../dist/asset/spritesheet/roads2W.png");
            //this.load.tilemapTiledJSON("map", "../dist/asset/spritesheet/map_updated.json");

            //this.load.audio()
            this.load.audio('menu_music', './asset/menu/Sci-fi Pulse Loop.mp3');
            this.load.audio('ss_loss', './asset/menu/343835_tristan-lohengrin_happy-8bit-loop-01.mp3');
            this.load.audio('game_music', './asset/menu/Blazer Rail.mp3');
            this.load.audio('alert', './asset/menu/insight.mp3');

        }

        this.load.on("progress", (percentage) => {
                loadBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percentage, 50);
        })
    }
    

    create(){
        //this.scene.add(ActiveScene.AvailableScenes.Menu, MenuScene, false)
        this.scene.start( ActiveScene.AvailableScenes.Menu, "Load -> Menu" );
        
    }
}