import { ActiveScene } from './ACTIVE_SCENE.js';


export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: ActiveScene.AvailableScenes.Menu
        })
    }

    init(msg){
        console.log("Menu: ",msg);
    }

    preload(){

    }

    create(){
        //this.scene.start( ActiveScene.AvailableScenes.Menu, "Here!" )
    }
}