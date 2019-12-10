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

            this.load.image('car', './asset/png/car/Car_1_Main_Positions/Car_1_01.png');
            this.load.image('menu_logo', './asset/menu/game-logo.png');
            this.load.image('menu_bg', './asset/menu/menu-bg.png');

            //this.load.audio()
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