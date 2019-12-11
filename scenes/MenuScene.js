import { ActiveScene } from './ACTIVE_SCENE.js';

// Menu Scene
/// Displays the Menu and shows options

export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: ActiveScene.AvailableScenes.Menu
        })
    }

    init(msg){
        console.log("Menu: " , msg);
    }

    preload(){
    }

    create(){

        const background = this.add.image('base_map', 'Decor/Racing_Lights (2).png').setOrigin(0) //this.add.image(0,0, "menu_bg").setOrigin(0);
        background.displayWidth = 800;
        background.displayHeight = 600;

        // Height and Width for screen
        let menu_music = this.sound.play('menu_music');
        //menu_music.setVolume(0.7);
        const { width, height } = this.sys.game.config;

        const logo = this.add.image(400, 150, 'menu_logo' ).setDepth(2);
        logo.setScale(2);

        let carmouse = this.add.sprite(250,310,'car');
        carmouse
        carmouse.setScale(1/16).setOrigin(0).setVisible(false);
        //carmouse.setRotation(10);

        let playButton = //this.add.text(350,300, 'Play', { fontFamily: '"Roboto Condensed"' });
        this.add
        .text(350, 300 , "Play", {font: "18px monospace", color: "white"}).setShadow(5, 5, "#5588EE", 0, true, true);
        playButton.setScale(3).setResolution(5);
        playButton.setInteractive();
        playButton.on("pointerover", () => {
            carmouse.y = 310;
            carmouse.setVisible(true);
        })

        playButton.on("pointerout", () => {
            carmouse.setVisible(false);
        })

        playButton.on("pointerup", () => {
            console.log("Start Game");
            this.scene.start( ActiveScene.AvailableScenes.Minimap, "Menu -> Minimap" );
        })

        let instructionsButton = this.add.text(350, 400 , "Instructions", {font: "15px monospace", color: "white"}).setShadow(5, 5, "#5588EE", 0, true, true);
        instructionsButton.setScale(3).setResolution(5);
        instructionsButton.setInteractive();
        instructionsButton.on("pointerover", () => {
            carmouse.y = 410;
            carmouse.setVisible(true);
        })

        instructionsButton.on("pointerout", () => {
            carmouse.setVisible(false);
        })

        instructionsButton.on("pointerup", () => {
            console.log("Start Game");
            this.scene.start( ActiveScene.AvailableScenes.Instruction, "Menu -> Instructions" );
        })


        let AboutButton = this.add.text(350, 500 , "About", {font: "15px monospace", color: "white"}).setShadow(5, 5, "#5588EE", 0, true, true);
        AboutButton.setScale(3).setResolution(5);
        AboutButton.setInteractive();
        AboutButton.on("pointerover", () => {
            carmouse.y = 510;
            carmouse.setVisible(true);
        })

        AboutButton.on("pointerout", () => {
            carmouse.setVisible(false);
        })

        AboutButton.on("pointerup", () => {
            console.log("Start Game");
            this.scene.start( ActiveScene.AvailableScenes.About, "Menu -> Instructions" );
        })
    }
}