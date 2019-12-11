import { ActiveScene } from './ACTIVE_SCENE.js';

// Menu Scene
/// Displays the Menu and shows options

export class InstructionScene extends Phaser.Scene{
    constructor(){
        super({
            key: ActiveScene.AvailableScenes.Instruction
        })
    }

    init(msg){
        console.log("Instruction: " , msg);
    }

    preload(){
        this.load.image('concept','./asset/menu/concept.png');
    }

    create(){
        // Height and Width for screen
        //menu_music.setVolume(0.7);
        const { width, height } = this.sys.game.config;

        const concept_image = this.add.image(600, 150, 'concept' ).setScale(0.4).setDepth(2);

        let title = this.add.text(width*0.02, height*0.05 , "Instructions:", {font: "18px monospace", color: "white"}).setShadow(5, 5, "#5588EE", 0, true, true).setScale(3).setResolution(5);

        let goal = this.add.text(width*0.02, height*0.15 , "Goal: ", {font: "18px monospace", color: "white"}).setShadow(5, 5, "#5588EE", 0, true, true).setScale(2).setResolution(5);

        let goal_description = this.add.text(width*0.02, height*0.21 , "It's important to be safe on the roads, \nbut if you don't post your 5th video of \nsome song playing on the radio, you might\njust go into anaphylactic shock. You\nthink you're good at Texting and\nDriving? We'll see 👀", {font: "18px monospace", color: "white"}).setShadow(5, 5, "#5588EE", 0, true, true).setScale(1).setResolution(5);

        let controls = this.add.text(width*0.02, height*0.41 , "Controls:", {font: "18px monospace", color: "white"}).setShadow(5, 5, "#5588EE", 0, true, true).setScale(2).setResolution(5);

        let controls_list = this.add.text(width*0.02, height*0.5 , " [A] - Turn Left \t [Q] - Quick Left Turn (90*) \n [D] - Turn Right\t [E] - Quick Right Turn (90*)\n [SPACEBAR] - Slow/Drift", {font: "18px monospace", color: "white"}).setShadow(5, 5, "#5588EE", 0, true, true).setScale(1.5).setResolution(5);

        let controls_description = this.add.text(width*0.02, height*0.65 , " Use your LEFT HAND on the [ASD]. \n Use your RIGHT HAND for the MOUSE to answer any texts\n The car moves forward freely and as the timer ticks down, gets \n slightly faster 🤔. Use Quick Turns occassionally to turn \n swiftly and ENDANGER TRAFFIC.\n Good Luck! ", {font: "18px monospace", color: "white"}).setShadow(5, 5, "#5588EE", 0, true, true).setScale(1.2).setResolution(5);

        let carmouse = this.add.sprite(width*0.82 - 60, height*0.9 + 20,'car').setScale(1/16).setVisible(false);
        
        let playButton = this.add.text(width*0.82, height*0.9 , "Play!", {font: "18px monospace", color: "white"}).setShadow(5, 5, "#5588EE", 0, true, true);
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
            this.scene.start( ActiveScene.AvailableScenes.Minimap, "Instruction -> Minimap" );
        })

    }
}