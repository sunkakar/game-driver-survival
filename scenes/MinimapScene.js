import { ActiveScene } from './ACTIVE_SCENE.js';


let controls;
let HighlightBar;
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
        this._lostGame = false;
        this._phone = null;
        this._data = [];
        this._lastphoneEvent = null;
        this._phoneEventTimer = null; 
        this._phonescreen_bg = null;
        this._option1 = null;
        this._option2 = null;
        this._option3 = null;
        this._F11 = null;
    }

    init(msg)
    {
        console.log("Minimap: ", msg );
        this._text = "Health: 100%";
        this._lastphoneEvent = this.time.now;
        this._phoneEventTimer = 10;
    }

    preload()
    {

        this.load.image('menu_bg', './asset/menu/menu-bg.png');
        //this.load.spritesheet('base_tiles_ss', './asset/spritesheet/tiles_spritesheet.png');
        //this.load.atlas('base_map', './asset/spritesheet/tiles_spritesheet.png', 'asset/spritesheet/tiles_spritesheet.json');

        this.load.image("roads2W", "./asset/spritesheet/roads2W.png");
        this.load.image("RPGTileset", "./asset/spritesheet/TilesetPyxel.png");
        this.load.tilemapTiledJSON("map", "./asset/spritesheet/map_updated.json");

        this.load.image("phone", "./asset/phone/mobile.png");
        this.load.image("screen_bg", "./asset/phone/bg.jpg");
        this.load.image("screen_bg", "./asset/phone/speech-bubble.png");

        HighlightBar = this.add.graphics({fillStyle: {color: 0xff4f1f}});
    }

    create()
    {   
        // Screen Data
        const { width, height } = this.sys.game.config;

        // Map Setup
        const map = this.make.tilemap({ key: "map" });
        const tileset = map.addTilesetImage("roads2W", "roads2W");
        const tileset2 = map.addTilesetImage("RPG TileSet", "RPGTileset");

        // Map rendered based on Layers 
        const baseLayer = map.createDynamicLayer("Map", tileset, 0, 0).setScale(3);
        const collisionLayer = map.createDynamicLayer("Trees", tileset2, 0, 0).setScale(3);
        const layer3 = map.createDynamicLayer("Bridge", tileset2, 0, 0).setScale(3);
        collisionLayer.setCollisionByProperty({ canCollide: true });

        this.matter.world.convertTilemapLayer(collisionLayer);
    

        //collisionLayer.setDepth(2);
        this._player = this.matter.add.image(450,150,'car').setScale(1/20);
        
        this._F11 = this.input.keyboard.addKey(Phaser.Keyboard.F11);
        this._score = this.add.text(16, 16, this._text, {
                font: "18px monospace",
                fill: "#ffffff",
                padding: { x: 20, y: 10 },
                backgroundColor: "#000000"
            })
            .setScrollFactor(0);

        let socialscore = this.add.text(16, 60, "Social Score: 10/10", {
                font: "18px monospace",
                fill: "#ffffff",
                padding: { x: 20, y: 10 },
                backgroundColor: "#000000"
            })
            .setScrollFactor(0);
        
        // Camera View Settings
        const camera = this.cameras.main;
        camera.startFollow(this._player);
        camera.setBounds(0, 0, 2300, 1530);


        // DEBUG Rules
        this.matter.world.createDebugGraphic();
        this.matter.world.drawDebug = false;
        this.input.keyboard.on("keydown_D", event => {
            this.matter.world.drawDebug = !this.matter.world.drawDebug;
            this.matter.world.debugGraphic.clear();
        });

        // Update Damage taken by player 
        let healthvalue = this._health;
        this.matter.world.on('collisionstart', function (event, bodyA, bodyB) {
            healthvalue = healthvalue - Math.floor(Math.random()*(8)+1);
            if(healthvalue > 0)
            {
                this.scene._text = "Health: " + healthvalue + "%";
                this.scene._score.setText(this.scene._text);    
            } 
            else
            {
                // Game Over: Send to new Game Over scene
                this.scene.endGame();
            }
        });


        // Phone Graphic
        /// We create a Container for the Phone 
        this._phone = this.add.image( width*0.85 , height*0.8 ,"phone").setScale(0.5).setDepth(10).setScrollFactor(0);
        this._phonescreen_bg = this.add.image(width*0.85,height*0.85, 'screen_bg').setScale(0.9).setDepth(8).setScrollFactor(0);
        this._question = this.add.text(width*0.75,height*0.6, "Wanna Hangout?", {
            font: "15px monospace",
            fill: "#ffffff",padding: { x: 15, y: 10 },backgroundColor: "#000000"}).setDepth(9).setScrollFactor(0).setResolution(10);
        this._option1 = this.add.text(width*0.78,height*0.7, 'Bye').setFontSize(15).setDepth(11).setScrollFactor(0);
        this._option2 = this.add.text(width*0.78,height*0.8, 'I Dont Care').setFontSize(15).setDepth(11).setScrollFactor(0);
        this._option3 = this.add.text(width*0.78,height*0.9, 'Maybe').setFontSize(15).setDepth(11).setScrollFactor(0);

        
        let option1_bar = HighlightBar.fillRect(width*0.78,height*0.69, 300 , 30).setAlpha(0).setDepth(10);
        let option2_bar = HighlightBar.fillRect(width*0.78,height*0.79, 300 , 30).setAlpha(0).setDepth(10);
        let option3_bar = HighlightBar.fillRect(width*0.78,height*0.89, 300 , 30).setAlpha(0).setDepth(10);
            
        this._lastphoneEvent = this.time.now;

        this._phone.setAlpha(0);
        this._phonescreen_bg.setAlpha(0);
        this._question.setAlpha(0);
        this._option1.setAlpha(0);
        this._option2.setAlpha(0);
        this._option3.setAlpha(0);
          

        //Interactive Setup
        this.phoneHighlight(this._option1, option1_bar);
        this.phoneHighlight(this._option2, option2_bar);
        this.phoneHighlight(this._option3, option3_bar);


        
        //let timedEvent = this.time.now;
        //console.log(timedEvent);

        
        
        //delayedCall(3000, this.onPhoneSubmit, [], this);


    }

    update(time, delta)
    {
        //controls.update(delta);
        let cursors = this.input.keyboard.createCursorKeys();
        const { width, height } = this.sys.game.config;

        this._player.setVelocity(0);
        //this._player.velocity.normalize().scale(playerSpeed);

        this._player.setFrictionAir(0.15);
        this._player.setMass(50);
        this._player.setFixedRotation();

        // Forward Motion 
        if (cursors.up.isDown)
        {
            this._player.thrust(0.5);
        }
        else if (cursors.down.isDown)
        {
            this._player.thrust(-0.5);
        }


        // Turning Motion
        if (cursors.left.isDown)
        {
            this._player.setAngularVelocity(-0.03);
        }
        else if (cursors.right.isDown)
        {
            this._player.setAngularVelocity(0.03);
        }        
        if(this._F11.isDown)
        {
            /**
             * this._map.height = window.screen.height;
             * this._map.width = window.screen.width;
             */
        }
        // Timer Setup for Phone Events
        if(this.time.now - (this._lastphoneEvent + this._phoneEventTimer*1000) > 0)
        {
            this.onPhoneSubmit();
        }
        else
        {
            //Nothing
        }

    }

    endGame() {
        this.scene.start( ActiveScene.AvailableScenes.GameOver, "Minimap -> Game Over" );
    }

    onPhoneSubmit ()
    {
        console.log("Phone Event Triggerrred");

        this._lastphoneEvent = this.time.now;
        if(this._phoneEventTimer - 1 > 5)
        {
            // Fade In Phone Overlay
            this.tweens.add({targets: this._phone,alpha: 1,duration: 2000,ease: 'Power2'}, this);
            this.tweens.add({targets: this._phonescreen_bg,alpha: 1,duration: 2000,ease: 'Power2'}, this);
            this.tweens.add({targets: this._question,alpha: 1,duration: 1000,ease: 'Power2', loop: 1}, this);
            this.tweens.add({targets: this._option1,alpha: 1,duration: 1000,ease: 'Power2', loop: 1}, this);
            this.tweens.add({targets: this._option2,alpha: 1,duration: 1000,ease: 'Power2', loop: 1}, this);
            this.tweens.add({targets: this._option3,alpha: 1,duration: 1000,ease: 'Power2', loop: 1}, this);

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

    phoneHighlight(option, highlight) 
    {
        // option.setScale(3).setResolution(5);
        option.setInteractive();
        option.on("pointerover", () => {
            //highlight.setAlpha(1);
            option.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        })

        option.on("pointerout", () => {
            option.setTint("#ffffff", 0);
        })

        option.on("pointerup", () => {
            console.log("Submission", option);
        })
    }

}