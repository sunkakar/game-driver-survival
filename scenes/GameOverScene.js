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
        this.load.image('statistics', './asset/menu/statistics.png');
    }

    create(){
        // Height and Width for screen
        const { width, height } = this.sys.game.config;

        const logo = this.add.image(400, height*0.6, 'statistics' ).setDepth(2);
        logo.setScale(0.5);

        let title = this.add.text(width*0.3, height*0.05 , "You Crashed!", {font: "18px monospace", color: "white"}).setShadow(5, 5, "#5588EE", 0, true, true).setScale(3).setResolution(5);

        let goal_description = this.add.text(width*0.02, height*0.3 , 
            "It's important to be safe on the roads. Over 90% of crashes are the fault of \ndrivers. The most frequent driver mistake is 'Recognition Error' i.e. the\ndriver's inattention. Here are some statistics from the National Safety Council.\nIs it worth it? You decide 😀", {font: "18px monospace", color: "white"}).setShadow(5, 5, "#5588EE", 0, true, true).setScale(1).setResolution(5);

        let carmouse = this.add.sprite(120,height*0.8,'car');
        carmouse.setScale(1/16).setOrigin(0).setVisible(false);

        let playButton = //this.add.text(350,300, 'Play', { fontFamily: '"Roboto Condensed"' });
        this.add
        .text(220, height*0.8 , "Play Again!", {font: "18px monospace", color: "white"}).setShadow(5, 5, "#5588EE", 0, true, true);
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