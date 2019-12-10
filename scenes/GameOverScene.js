import { ActiveScene } from './ACTIVE_SCENE.js';

// Menu Scene
/// Displays the Menu and shows options

export class GameOverScene extends Phaser.Scene{
    constructor(){
        super({
            key: ActiveScene.AvailableScenes.GameOver
        })
    }

    init(msg){
        console.log("GameOver: ",msg);
    }

    preload(){
    }

    create(){
        // Height and Width for screen
        const { width, height } = this.sys.game.config;

        const logo = this.add.image(400, 150, 'menu_logo' ).setDepth(2);
        logo.setScale(2);

        let carmouse = this.add.sprite(300,300,'car');
        carmouse.setScale(1/16).setOrigin(0).setVisible(false);

        let playButton = //this.add.text(350,300, 'Play', { fontFamily: '"Roboto Condensed"' });
        this.add
        .text(350, 300 , "Play Again!", {font: "18px monospace", color: "white"}).setShadow(5, 5, "#5588EE", 0, true, true);
        playButton.setScale(3).setResolution(5);
        playButton.setInteractive();
        playButton.on("pointerover", () => {
            carmouse.setVisible(true);
        })

        playButton.on("pointerout", () => {
            carmouse.setVisible(false);
        })

        playButton.on("pointerup", () => {
            console.log("Start Game");
            this.scene.start( ActiveScene.AvailableScenes.Menu, "GameOver -> Menu" );
        })
    }
}