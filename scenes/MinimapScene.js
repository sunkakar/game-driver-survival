import { ActiveScene } from './ACTIVE_SCENE.js';


let controls;
let HighlightBar;
let rightTurn;
let leftTurn;
let i = 0;

export class MinimapScene extends Phaser.Scene{
    constructor(player = null, health = 100){
        super({
            key: ActiveScene.AvailableScenes.Minimap
        })
        this._player = player;
        this._text = "Health: 100%";
        this._health = health;
        this._score = null;
        this._socialscore = null;
        this._socialscorevalue = 10;
        this._lostGame = false;
        this._phone = null;
        this._data = [];
        this._lastphoneEvent = null;
        this._phoneEventTimer = null; 
        this._phonescreen_bg = null;
        this._option1 = null;
        this._option2 = null;
        this._option3 = null;
        //this._F11 = null;
        this._angularVel = 0.03;
        this._thrust = 0.15;
        this._solved = 0;
        this._timer = null;
    }

    init(msg)
    {
        console.log("Minimap: ", msg );

        this._text = "Health: 100%";
        this._health = 100;
        this._score = null;
        this._socialscore = null;
        this._socialscorevalue = 10;
        this._lostGame = false;
        this._phone = null;
        this._data = [];
        //this._lastphoneEvent = this.time.now;
        this._phoneEventTimer = 20;
        this._phonescreen_bg = null;
        this._option1 = null;
        this._option2 = null;
        this._option3 = null;
        this._F11 = null;
        this._angularVel = 0.03;
        this._thrust = 0.15;
        this._solved = 0;
    }

    preload()
    {
        //this.load.audio('menu_music', './asset/menu/Sci-fi Pulse Loop.mp3');
        this.load.audio('crash_1', './asset/collision_audio/66780__kevinkace__crate-break-4.mp3');
        this.load.audio('crash_2', './asset/collision_audio/237375__squareal__car-crash.mp3');

        this.load.image('menu_bg', './asset/menu/menu-bg.png');

        this.load.image("roads2W", "./asset/spritesheet/roads2W.png");
        this.load.image("RPGTileset", "./asset/spritesheet/TilesetPyxel.png");
        this.load.tilemapTiledJSON("map", "./asset/spritesheet/map_updated.json");

        this.load.image("phone", "./asset/phone/mobile.png");
        this.load.image("screen_bg", "./asset/phone/bg.jpg");
        this.load.image("msg_bg", "./asset/phone/speech-bubble.png");

        HighlightBar = this.add.graphics({fillStyle: {color: 0xff4f1f}});
    }

    create()
    {   
        // Screen Data
        const { width, height } = this.sys.game.config;

        //Create Music
        let game_music = this.sound.add('game_music',{
            loop: true
        });
        game_music.play();

        // Map Setup
        const map = this.make.tilemap({ key: "map" });
        const tileset = map.addTilesetImage("roads2W", "roads2W");
        const tileset2 = map.addTilesetImage("RPG TileSet", "RPGTileset");

        // Map rendered based on Layers 
        const baseLayer = map.createDynamicLayer("Map", tileset, 0, 0).setScale(3);
        const collisionLayer = map.createDynamicLayer("Collidables", tileset2, 0, 0).setScale(3);
        const layer3 = map.createDynamicLayer("Above Player", tileset2, 0, 0).setScale(3).setDepth(2);
        collisionLayer.setCollisionByProperty({ canCollide: true });

        this.matter.world.convertTilemapLayer(collisionLayer);
    

        //collisionLayer.setDepth(2);
        this._player = this.matter.add.image(450,150,'car').setScale(1/22);
        this._player.thrust(0.1);
        //this._player.setInertia(body,10);
        
        //this._F11 = this.input.keyboard.addKey(this.Keyboard.F11);  //Fix
        this._score = this.add.text(16, 16, this._text, {
                font: "18px monospace",
                fill: "#ffffff",
                padding: { x: 20, y: 10 },
                backgroundColor: "#050505"
            })
            .setScrollFactor(0).setDepth(20);

        this._socialscore = this.add.text(16, 60, "Social Score: 10/10", {
                font: "18px monospace",
                fill: "#ffffff",
                padding: { x: 20, y: 10 },
                backgroundColor: "#050505"
            })
            .setScrollFactor(0).setDepth(20);
        
        // Camera View Settings
        const camera = this.cameras.main;
        camera.startFollow(this._player);
        camera.setBounds(0, 0, 2300, 1530);


        // DEBUG Rules
        // this.matter.world.createDebugGraphic();
        // this.matter.world.drawDebug = false;
        // this.input.keyboard.on("keydown_D", event => {
        //     this.matter.world.drawDebug = !this.matter.world.drawDebug;
        //     this.matter.world.debugGraphic.clear();
        // });

        // Update Damage taken by player 
        let healthvalue = this._health;
        this.matter.world.on('collisionstart', function (event, bodyA, bodyB) 
        {
            let crash_sound = this.scene.sound.play('crash_1');
            healthvalue = healthvalue - Math.floor(Math.random()*(8)+1);
            if(healthvalue > 0)
            {
                this.scene._text = "Health: " + healthvalue + "%";
                this.scene._score.setText(this.scene._text);    
            } 
            else
            {
                // Game Over: Send to new Game Over scene
                let lose = this.scene.sound.play('crash_2');
                console.log("Crash Loss");
                this.scene.endGame();
            }
        });


        // Phone Graphic
        /// We create a Container for the Phone 
        this._phone = this.add.image( width*0.85 , height*0.8 ,"phone").setScale(0.5).setDepth(10).setScrollFactor(0);
        this._phonescreen_bg = this.add.image(width*0.85,height*0.85, 'screen_bg').setScale(0.9).setDepth(8).setScrollFactor(0);
        this._question = this.add.text(width*0.75,height*0.6, "Wanna Hangout?", {
            font: "15px monospace",
            fill: "#ffffff",padding: { x: 15, y: 10 },backgroundColor: "#000000"}).setDepth(11).setScrollFactor(0).setResolution(10);
        this._option1 = this.add.text(width*0.78,height*0.7, 'Bye').setFontSize(15).setDepth(11).setScrollFactor(0);
        this._option2 = this.add.text(width*0.78,height*0.8, 'I Dont Care').setFontSize(15).setDepth(11).setScrollFactor(0);
        this._option3 = this.add.text(width*0.78,height*0.9, 'Maybe').setFontSize(15).setDepth(11).setScrollFactor(0);
        
        this._timer = this.add.text(width*0.74,height*0.51, "10s", {font: "16px monospace"}).setScrollFactor(0).setDepth(20);
    

        this._phone.setAlpha(0);
        this._phonescreen_bg.setAlpha(0);
        this._question.setAlpha(0);
        this._option1.setAlpha(0);
        this._option2.setAlpha(0);
        this._option3.setAlpha(0);
        this._timer.setAlpha(0);

          

        //Make Interactive Setup
        this.phoneHighlight(this._option1);
        this.phoneHighlight(this._option2);
        this.phoneHighlight(this._option3);

        
        
        //delayedCall(3000, this.onPhoneSubmit, [], this);
        rightTurn = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        leftTurn = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);

    }

    update(time, delta)
    {
        console.log("Thrust: ", this._thrust);

        // Cursor Keyboard Input
        let cursors = this.input.keyboard.addKeys({
            //up:Phaser.Input.Keyboard.KeyCodes.W,
            down:Phaser.Input.Keyboard.KeyCodes.SPACE,
            left:Phaser.Input.Keyboard.KeyCodes.A,
            right:Phaser.Input.Keyboard.KeyCodes.D
        });


        // Canvas Dimensions
        const { width, height } = this.sys.game.config;

        // Car Physics  
        this._player.setFrictionAir(0.15);
        this._player.setMass(100);
        this._player.setFixedRotation();


        // CONSTANT FORWARD MOTION
        this._player.thrust(this._thrust);

        if (cursors.down.isDown)
        {
            this._player.thrust(-this._thrust/2);
        }

        // Turning Motion
        if (Phaser.Input.Keyboard.JustDown(rightTurn))
        {
            this._player.setAngularVelocity( ( Math.PI * 18 ) / 180);
        }
        else if (Phaser.Input.Keyboard.JustDown(leftTurn))
        {
            this._player.setAngularVelocity( ( - Math.PI * 18 ) / 180);
        }
        if (cursors.left.isDown)
        {
            this._player.setAngularVelocity( - this._angularVel);   
        }
        else if (cursors.right.isDown)
        {
            this._player.setAngularVelocity( this._angularVel);
        }
        

        // Timer Setup for Phone Events
        this._phone_timer = this.time.now - (this._lastphoneEvent + this._phoneEventTimer*1000);
        this._timer.setText( Math.round( (-this._phone_timer/1000) * 10 ) / 10 + "s");
        console.log("Phone Timer: ", Math.round( (-this._phone_timer/1000) * 10 ) / 10, "| Other " ,this._solved, "| LPE " ,this._lastphoneEvent);
        
        if(this._phone_timer > 0)
        {
            this.phoneEventTimer();
            // this.
        }
        else
        {
            // Nothing
        }


        // Lose if Score too low 
        if(this._socialscorevalue <= 0)
        {
            console.log("Score Loss");
            this.endGame();
        }

    }

    endGame() {
        this.scene.start( ActiveScene.AvailableScenes.GameOver, "Minimap -> Game Over" );
    }

    phoneEventTimer(){
        //let i = this._solved;

        if(this._solved)
        {
            //Nothing
            //this._solved = 0;
        }
        else
        {
            // Reduce Points
            if(this._lastphoneEvent != null)
            {this.hidePhone()}
        }

        console.log(i);
            switch(i)
            {
                case 0:  this.onPhoneSubmit("How was your day?", "💩" , "💩" , "😀", "😀"); break;
                case 1:  this.onPhoneSubmit("Wanna Go Out?", "With U?😂" , "💩" , "Yes!", "Yes!"); break;
                case 2:  this.onPhoneSubmit("I'm Leaving You?", "Okay" , "Lmao" , "NO", "NO"); break; 
                default: i = 0;
            }


    }

    onPhoneSubmit (q, o1, o2, o3, correct_o)
    {
        this._question.setText(q).setResolution(10);
        this._option1.setText(o1).setResolution(10);
        this._option2.setText(o2).setResolution(10);
        this._option3.setText(o3).setResolution(10);
        this._correct_o = (correct_o);

        console.log("Phone Event Triggerrred");
        let alert = this.sound.add('alert');
        alert.play();
        this._lastphoneEvent = this.time.now;

        if(this._phoneEventTimer - 1 > 10)
        {
            // Fade In Phone Overlay
            this.tweens.add({targets: this._phone,alpha: 1,duration: 2000,ease: 'Power2'}, this);
            this.tweens.add({targets: this._phonescreen_bg,alpha: 1,duration: 2000,ease: 'Power2'}, this);
            this.tweens.add({targets: this._question,alpha: 1,duration: 1000,ease: 'Power2'}, this);
            this.tweens.add({targets: this._option1,alpha: 1,duration: 1000,ease: 'Power2'}, this);
            this.tweens.add({targets: this._option2,alpha: 1,duration: 1000,ease: 'Power2'}, this);
            this.tweens.add({targets: this._option3,alpha: 1,duration: 1000,ease: 'Power2'}, this);
            this.tweens.add({targets: this._option3,alpha: 1,duration: 1000,ease: 'Power2'}, this);
            this.tweens.add({targets: this._timer,alpha: 1,duration: 1000,ease: 'Power2'}, this);

            this._phoneEventTimer -= 1;
        }
        else 
        {
            //Do Nothing
            // Fade In Phone Overlay
            this.tweens.add({targets: this._phone,alpha: 1,duration: 1000,ease: 'Power2'}, this);
            this.tweens.add({targets: this._phonescreen_bg,alpha: 1,duration: 1000,ease: 'Power2'}, this);
            this.tweens.add({targets: this._question,alpha: 1,duration: 1000,ease: 'Power2',loop: -1}, this);
            this.tweens.add({targets: this._option1,alpha: 1,duration: 1000,ease: 'Power2', loop: 1}, this);
            this.tweens.add({targets: this._option2,alpha: 1,duration: 1000,ease: 'Power2', loop: 1}, this);
            this.tweens.add({targets: this._option3,alpha: 1,duration: 1000,ease: 'Power2', loop: 1}, this);
            console.log("Fastest Speed");
        }

    }

    phoneHighlight(option) 
    {

        option.setInteractive();
        option.on("pointerover", () => {
            option.setScale(1.5);
        })

        option.on("pointerout", () => {
            option.setScale(1);
        })

        option.on("pointerup", () => {
            // Submission Check
            console.log("Submission", option._text);
            this._solved = 1;
            this._phone.setAlpha(0);
            this._phonescreen_bg.setAlpha(0);
            this._question.setAlpha(0);
            this._option1.setAlpha(0);
            this._option2.setAlpha(0);
            this._option3.setAlpha(0);
            this._timer.setAlpha(0);

            // Difficulty Increased
            this._angularVel = this._angularVel + 0.012;
            this._thrust = this._thrust + 0.04;

            if(this._correct_o !== option._text)
            {
                this.notCorrectPhoneInput(2);
            }

            this._solved = 1;
        })
    }

    hidePhone() {
        this._phone.setAlpha(0);
        this._phonescreen_bg.setAlpha(0);
        this._question.setAlpha(0);
        this._option1.setAlpha(0);
        this._option2.setAlpha(0);
        this._option3.setAlpha(0);
        this._timer.setAlpha(0);

        this.notCorrectPhoneInput(5);
    }

    notCorrectPhoneInput(change){
        // Reduce phone 
        this._socialscorevalue -= change; 
        this._socialscore.setText("Social Score: " + this._socialscorevalue + "/10"); 
    }

    phoneResponseTimer(time)
    {
        console.log("Here");
    }

}