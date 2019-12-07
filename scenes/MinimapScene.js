import { ActiveScene } from './ACTIVE_SCENE.js';


export class MinimapScene extends Phaser.Scene{
    constructor(){
        super({
            key: ActiveScene.AvailableScenes.Menu
        })
    }

    init(msg){
        console.log("Minimap: ",msg);
    }

    preload(){

    }

    create(){
        //this.scene.start( ActiveScene.AvailableScenes.Menu, "Here!" )
    }
}