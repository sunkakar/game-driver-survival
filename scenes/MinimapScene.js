import { ActiveScene } from './ACTIVE_SCENE.js';


let controls;

export class MinimapScene extends Phaser.Scene{
    constructor(player = null){
        super({
            key: ActiveScene.AvailableScenes.Minimap
        })
        this._player = player;
    }

    init(msg){
        console.log("Minimap: ",msg);
    }

    preload(){

        this.load.image('menu_bg', './asset/menu/menu-bg.png');
        //this.load.spritesheet('base_tiles_ss', './asset/spritesheet/tiles_spritesheet.png');
        //this.load.atlas('base_map', './asset/spritesheet/tiles_spritesheet.png', 'asset/spritesheet/tiles_spritesheet.json');

        this.load.image("roads2W", "./asset/spritesheet/roads2W.png");
        this.load.image("RPGTileset", "./asset/spritesheet/TilesetPyxel.png");
        this.load.tilemapTiledJSON("map", "./asset/spritesheet/map_updated.json");

    }

    create(){

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
        //this._player.body.rotate = 90;
        //this._player.setFixedRotation(90);
        //this.physics.add.collider(this._player, collisionLayer);
        

        this.add
            .text(16, 16, "Get to your Destinations!", {
            font: "18px monospace",
            fill: "#ffffff",
            padding: { x: 20, y: 10 },
            backgroundColor: "#000000"
            })
            .setScrollFactor(0);

        const camera = this.cameras.main;
        camera.startFollow(this._player);
        camera.setBounds(0, 0, 2300, 1530);

        this.matter.world.createDebugGraphic();
        this.matter.world.drawDebug = false;
        this.input.keyboard.on("keydown_D", event => {
            this.matter.world.drawDebug = !this.matter.world.drawDebug;
            this.matter.world.debugGraphic.clear();
        });
        
        this.matter.world.on('collisionstart', function (event, bodyA, bodyB) {
            console.log('collision :', this.scene);
            //LostGame();
        });
    }

    update(time, delta){
        //controls.update(delta);
        let cursors = this.input.keyboard.createCursorKeys();
        let playerSpeed = 200;

        this._player.setVelocity(0);
        //this._player.velocity.normalize().scale(playerSpeed);

        this._player.setFrictionAir(0.15);
        this._player.setMass(50);
        this._player.setFixedRotation();

        if (cursors.left.isDown)
        {
            this._player.setAngularVelocity(-0.03);
        }
        else if (cursors.right.isDown)
        {
            this._player.setAngularVelocity(0.03);
        }

        if (cursors.up.isDown)
        {
            this._player.thrust(0.5);
        }
        else if (cursors.down.isDown)
        {
            this._player.thrust(-0.5);
        }
        
    }

}