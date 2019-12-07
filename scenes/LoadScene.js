import { ActiveScene } from './ACTIVE_SCENE.js';


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

    }

    create(){
        //this.scene.add(ActiveScene.AvailableScenes.Menu, MenuScene, false)
        this.scene.start( ActiveScene.AvailableScenes.Menu, "Here!" );
        
    }
}