// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scenes/ACTIVE_SCENE.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActiveScene = void 0;
// Contains Scenes
var ActiveScene = {
  AvailableScenes: {
    Load: "Load",
    Menu: "Menu",
    Minimap: "Minimap",
    GameOver: "GameOver",
    About: "About",
    Instruction: "Instruction"
  }
};
exports.ActiveScene = ActiveScene;
},{}],"scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _ACTIVE_SCENE = require("./ACTIVE_SCENE.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Load Scene
/// Loads assets and Transfers over control to the Menu Scene
var LoadScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadScene).call(this, {
      key: _ACTIVE_SCENE.ActiveScene.AvailableScenes.Load
    }));
  }

  _createClass(LoadScene, [{
    key: "init",
    value: function init(msg) {
      console.log("Load: ", msg);
    }
  }, {
    key: "preload",
    value: function preload() {
      var _this = this;

      var loadBar = this.add.graphics({
        fillStyle: {
          color: 0xffffff
        }
      });

      for (var i = 0; i < 100; i++) {
        this.load.spritesheet("grass_tiles", "../asset/spritesheet/grass_ss.png", {
          frameHeight: 512,
          frameWidth: 512
        });
        this.load.image('car', './asset/png/car/Car_1_Main_Positions/Car_Sprite.png');
        this.load.image('menu_logo', './asset/menu/game-logo.png');
        this.load.image('menu_bg', './asset/menu/menu-bg.png'); //this.load.image("tiles", "../dist/asset/spritesheet/roads2W.png");
        //this.load.tilemapTiledJSON("map", "../dist/asset/spritesheet/map_updated.json");
        //this.load.audio()

        this.load.audio('menu_music', './asset/menu/Sci-fi Pulse Loop.mp3');
        this.load.audio('ss_loss', './asset/menu/343835_tristan-lohengrin_happy-8bit-loop-01.mp3');
        this.load.audio('game_music', './asset/menu/Blazer Rail.mp3');
        this.load.audio('alert', './asset/menu/insight.mp3');
      }

      this.load.on("progress", function (percentage) {
        loadBar.fillRect(0, _this.game.renderer.height / 2, _this.game.renderer.width * percentage, 50);
      });
    }
  }, {
    key: "create",
    value: function create() {
      //this.scene.add(ActiveScene.AvailableScenes.Menu, MenuScene, false)
      this.scene.start(_ACTIVE_SCENE.ActiveScene.AvailableScenes.Menu, "Load -> Menu");
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"./ACTIVE_SCENE.js":"scenes/ACTIVE_SCENE.js"}],"scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

var _ACTIVE_SCENE = require("./ACTIVE_SCENE.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Menu Scene
/// Displays the Menu and shows options
var MenuScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuScene).call(this, {
      key: _ACTIVE_SCENE.ActiveScene.AvailableScenes.Menu
    }));
  }

  _createClass(MenuScene, [{
    key: "init",
    value: function init(msg) {
      console.log("Menu: ", msg);
    }
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      var background = this.add.image('base_map').setOrigin(0); //this.add.image(0,0, "menu_bg").setOrigin(0);

      background.displayWidth = 800;
      background.displayHeight = 600; // Music

      var menu_music = this.sound.add('menu_music', {
        loop: true
      });
      menu_music.play();
      var _this$sys$game$config = this.sys.game.config,
          width = _this$sys$game$config.width,
          height = _this$sys$game$config.height;
      var logo = this.add.image(400, 150, 'menu_logo').setDepth(2);
      logo.setScale(2);
      var carmouse = this.add.sprite(250, 310, 'car');
      carmouse;
      carmouse.setScale(1 / 16).setOrigin(0).setVisible(false); //carmouse.setRotation(10);

      var playButton = //this.add.text(350,300, 'Play', { fontFamily: '"Roboto Condensed"' });
      this.add.text(350, 300, "Play", {
        font: "18px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true);
      playButton.setScale(3).setResolution(5);
      playButton.setInteractive();
      playButton.on("pointerover", function () {
        carmouse.y = 310;
        carmouse.setVisible(true);
      });
      playButton.on("pointerout", function () {
        carmouse.setVisible(false);
      });
      playButton.on("pointerup", function () {
        console.log("Start Game");
        menu_music.stop();

        _this.scene.start(_ACTIVE_SCENE.ActiveScene.AvailableScenes.Minimap, "Menu -> Minimap");
      });
      var instructionsButton = this.add.text(350, 400, "Instructions", {
        font: "15px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true);
      instructionsButton.setScale(3).setResolution(5);
      instructionsButton.setInteractive();
      instructionsButton.on("pointerover", function () {
        carmouse.y = 410;
        carmouse.setVisible(true);
      });
      instructionsButton.on("pointerout", function () {
        carmouse.setVisible(false);
      });
      instructionsButton.on("pointerup", function () {
        _this.scene.start(_ACTIVE_SCENE.ActiveScene.AvailableScenes.Instruction, "Menu -> Instructions");
      });
      var AboutButton = this.add.text(350, 500, "About", {
        font: "15px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true);
      AboutButton.setScale(3).setResolution(5);
      AboutButton.setInteractive();
      AboutButton.on("pointerover", function () {
        carmouse.y = 510;
        carmouse.setVisible(true);
      });
      AboutButton.on("pointerout", function () {
        carmouse.setVisible(false);
      });
      AboutButton.on("pointerup", function () {
        console.log("Start Game");

        _this.scene.start(_ACTIVE_SCENE.ActiveScene.AvailableScenes.About, "Menu -> Instructions");
      });
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"./ACTIVE_SCENE.js":"scenes/ACTIVE_SCENE.js"}],"scenes/MinimapScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MinimapScene = void 0;

var _ACTIVE_SCENE = require("./ACTIVE_SCENE.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var controls;
var HighlightBar;
var rightTurn;
var leftTurn;

var MinimapScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MinimapScene, _Phaser$Scene);

  function MinimapScene() {
    var _this;

    var player = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var health = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    _classCallCheck(this, MinimapScene);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MinimapScene).call(this, {
      key: _ACTIVE_SCENE.ActiveScene.AvailableScenes.Minimap
    }));
    _this._player = player;
    _this._text = "Health: 100%";
    _this._health = health;
    _this._score = null;
    _this._socialscore = null;
    _this._socialscorevalue = 10;
    _this._lostGame = false;
    _this._phone = null;
    _this._data = [];
    _this._lastphoneEvent = null;
    _this._phoneEventTimer = null;
    _this._phonescreen_bg = null;
    _this._option1 = null;
    _this._option2 = null;
    _this._option3 = null; //this._F11 = null;

    _this._angularVel = 0.03;
    _this._thrust = 0.15;
    _this._solved = 0;
    return _this;
  }

  _createClass(MinimapScene, [{
    key: "init",
    value: function init(msg) {
      console.log("Minimap: ", msg);
      this._text = "Health: 100%";
      this._health = 100;
      this._score = null;
      this._socialscore = null;
      this._socialscorevalue = 10;
      this._lostGame = false;
      this._phone = null;
      this._data = [];
      this._lastphoneEvent = this.time.now;
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
  }, {
    key: "preload",
    value: function preload() {
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
      HighlightBar = this.add.graphics({
        fillStyle: {
          color: 0xff4f1f
        }
      });
    }
  }, {
    key: "create",
    value: function create() {
      // Screen Data
      var _this$sys$game$config = this.sys.game.config,
          width = _this$sys$game$config.width,
          height = _this$sys$game$config.height; //Create Music

      var game_music = this.sound.add('game_music', {
        loop: true
      });
      game_music.play(); // Map Setup

      var map = this.make.tilemap({
        key: "map"
      });
      var tileset = map.addTilesetImage("roads2W", "roads2W");
      var tileset2 = map.addTilesetImage("RPG TileSet", "RPGTileset"); // Map rendered based on Layers 

      var baseLayer = map.createDynamicLayer("Map", tileset, 0, 0).setScale(3);
      var collisionLayer = map.createDynamicLayer("Collidables", tileset2, 0, 0).setScale(3);
      var layer3 = map.createDynamicLayer("Above Player", tileset2, 0, 0).setScale(3).setDepth(2);
      collisionLayer.setCollisionByProperty({
        canCollide: true
      });
      this.matter.world.convertTilemapLayer(collisionLayer); //collisionLayer.setDepth(2);

      this._player = this.matter.add.image(450, 150, 'car').setScale(1 / 22);

      this._player.thrust(0.1); //this._player.setInertia(body,10);
      //this._F11 = this.input.keyboard.addKey(this.Keyboard.F11);  //Fix


      this._score = this.add.text(16, 16, this._text, {
        font: "18px monospace",
        fill: "#ffffff",
        padding: {
          x: 20,
          y: 10
        },
        backgroundColor: "#050505"
      }).setScrollFactor(0).setDepth(20);
      this._socialscore = this.add.text(16, 60, "Social Score: 10/10", {
        font: "18px monospace",
        fill: "#ffffff",
        padding: {
          x: 20,
          y: 10
        },
        backgroundColor: "#050505"
      }).setScrollFactor(0).setDepth(20); // Camera View Settings

      var camera = this.cameras.main;
      camera.startFollow(this._player);
      camera.setBounds(0, 0, 2300, 1530); // DEBUG Rules
      // this.matter.world.createDebugGraphic();
      // this.matter.world.drawDebug = false;
      // this.input.keyboard.on("keydown_D", event => {
      //     this.matter.world.drawDebug = !this.matter.world.drawDebug;
      //     this.matter.world.debugGraphic.clear();
      // });
      // Update Damage taken by player 

      var healthvalue = this._health;
      this.matter.world.on('collisionstart', function (event, bodyA, bodyB) {
        var crash_sound = this.scene.sound.play('crash_1');
        healthvalue = healthvalue - Math.floor(Math.random() * 8 + 1);

        if (healthvalue > 0 && this.scene._socialscorevalue > 0) {
          this.scene._text = "Health: " + healthvalue + "%";

          this.scene._score.setText(this.scene._text);
        } else {
          // Game Over: Send to new Game Over scene
          var lose = this.scene.sound.play('crash_2');
          this.scene.endGame();
        }
      }); // Phone Graphic
      /// We create a Container for the Phone 

      this._phone = this.add.image(width * 0.85, height * 0.8, "phone").setScale(0.5).setDepth(10).setScrollFactor(0);
      this._phonescreen_bg = this.add.image(width * 0.85, height * 0.85, 'screen_bg').setScale(0.9).setDepth(8).setScrollFactor(0);
      this._question = this.add.text(width * 0.75, height * 0.6, "Wanna Hangout?", {
        font: "15px monospace",
        fill: "#ffffff",
        padding: {
          x: 15,
          y: 10
        },
        backgroundColor: "#000000"
      }).setDepth(11).setScrollFactor(0).setResolution(10);
      this._option1 = this.add.text(width * 0.78, height * 0.7, 'Bye').setFontSize(15).setDepth(11).setScrollFactor(0);
      this._option2 = this.add.text(width * 0.78, height * 0.8, 'I Dont Care').setFontSize(15).setDepth(11).setScrollFactor(0);
      this._option3 = this.add.text(width * 0.78, height * 0.9, 'Maybe').setFontSize(15).setDepth(11).setScrollFactor(0);

      this._phone.setAlpha(0);

      this._phonescreen_bg.setAlpha(0);

      this._question.setAlpha(0);

      this._option1.setAlpha(0);

      this._option2.setAlpha(0);

      this._option3.setAlpha(0); //Interactive Setup


      this.phoneHighlight(this._option1);
      this.phoneHighlight(this._option2);
      this.phoneHighlight(this._option3); //let timedEvent = this.time.now;
      //console.log(timedEvent);
      //delayedCall(3000, this.onPhoneSubmit, [], this);

      rightTurn = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
      leftTurn = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    }
  }, {
    key: "update",
    value: function update(time, delta) {
      console.log("Thrust: ", this._thrust); // Cursor Keyboard Input

      var cursors = this.input.keyboard.addKeys({
        //up:Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.SPACE,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D
      }); // Canvas Dimensions

      var _this$sys$game$config2 = this.sys.game.config,
          width = _this$sys$game$config2.width,
          height = _this$sys$game$config2.height; // Car Physics  

      this._player.setFrictionAir(0.15);

      this._player.setMass(100);

      this._player.setFixedRotation(); // CONSTANT FORWARD MOTION


      this._player.thrust(this._thrust);

      if (cursors.down.isDown) {
        this._player.thrust(-this._thrust / 2);
      } // Turning Motion


      if (Phaser.Input.Keyboard.JustDown(rightTurn)) {
        this._player.setAngularVelocity(Math.PI * 18 / 180);
      } else if (Phaser.Input.Keyboard.JustDown(leftTurn)) {
        this._player.setAngularVelocity(-Math.PI * 18 / 180);
      }

      if (cursors.left.isDown) {
        this._player.setAngularVelocity(-this._angularVel);
      } else if (cursors.right.isDown) {
        this._player.setAngularVelocity(this._angularVel);
      } // Timer Setup for Phone Events


      var phone_timer = this.time.now - (this._lastphoneEvent + this._phoneEventTimer * 1000);
      console.log(phone_timer / 1000);

      if (phone_timer > 0) {
        this.phoneEventTimer(phone_timer);
      } else {} //Nothing
      // Lose if Score too low 


      if (this._socialscorevalue <= 0) {
        this.endGame();
      }
    }
  }, {
    key: "endGame",
    value: function endGame() {
      this.scene.start(_ACTIVE_SCENE.ActiveScene.AvailableScenes.GameOver, "Minimap -> Game Over");
    }
  }, {
    key: "phoneEventTimer",
    value: function phoneEventTimer(phone_timer) {
      var i = this._solved;
      console.log(i);

      switch (i) {
        case 0:
          this.onPhoneSubmit("How was your day?", "💩", "💩", "😀", "😀");
          break;

        case 1:
          this.onPhoneSubmit("Wanna Go Out?", "With U?😂", "💩", "Yes!", "Yes!");
          break;

        case 2:
          this.onPhoneSubmit("I'm Leaving You?", "Okay", "Lmao", "NO", "NO");
          break;

        default:
          i = 0;
      }

      this._solved = i + 1;
    }
  }, {
    key: "onPhoneSubmit",
    value: function onPhoneSubmit(q, o1, o2, o3, correct_o) {
      this._question.setText(q).setResolution(10);

      this._option1.setText(o1).setResolution(10);

      this._option2.setText(o2).setResolution(10);

      this._option3.setText(o3).setResolution(10);

      this._correct_o = correct_o;
      console.log("Phone Event Triggerrred");
      var alert = this.sound.add('alert');
      alert.play();
      this._lastphoneEvent = this.time.now;

      if (this._phoneEventTimer - 1 > 10) {
        // Fade In Phone Overlay
        this.tweens.add({
          targets: this._phone,
          alpha: 1,
          duration: 2000,
          ease: 'Power2'
        }, this);
        this.tweens.add({
          targets: this._phonescreen_bg,
          alpha: 1,
          duration: 2000,
          ease: 'Power2'
        }, this);
        this.tweens.add({
          targets: this._question,
          alpha: 1,
          duration: 1000,
          ease: 'Power2',
          loop: 1
        }, this);
        this.tweens.add({
          targets: this._option1,
          alpha: 1,
          duration: 1000,
          ease: 'Power2',
          loop: 1
        }, this);
        this.tweens.add({
          targets: this._option2,
          alpha: 1,
          duration: 1000,
          ease: 'Power2',
          loop: 1
        }, this);
        this.tweens.add({
          targets: this._option3,
          alpha: 1,
          duration: 1000,
          ease: 'Power2',
          loop: 1
        }, this);
        this._phoneEventTimer -= 1;
      } else {
        //Do Nothing
        // Fade In Phone Overlay
        this.tweens.add({
          targets: this._phone,
          alpha: 1,
          duration: 1000,
          ease: 'Power2'
        }, this);
        this.tweens.add({
          targets: this._phonescreen_bg,
          alpha: 1,
          duration: 1000,
          ease: 'Power2'
        }, this);
        this.tweens.add({
          targets: this._question,
          alpha: 1,
          duration: 1000,
          ease: 'Power2',
          loop: -1
        }, this);
        this.tweens.add({
          targets: this._option1,
          alpha: 1,
          duration: 1000,
          ease: 'Power2',
          loop: 1
        }, this);
        this.tweens.add({
          targets: this._option2,
          alpha: 1,
          duration: 1000,
          ease: 'Power2',
          loop: 1
        }, this);
        this.tweens.add({
          targets: this._option3,
          alpha: 1,
          duration: 1000,
          ease: 'Power2',
          loop: 1
        }, this);
        console.log("Fastest Speed");
      }
    }
  }, {
    key: "phoneHighlight",
    value: function phoneHighlight(option) {
      var _this2 = this;

      option.setInteractive();
      option.on("pointerover", function () {
        option.setScale(1.5);
      });
      option.on("pointerout", function () {
        option.setScale(1);
      });
      option.on("pointerup", function () {
        // Submission Check
        console.log("Submission", option._text);

        _this2._phone.setAlpha(0);

        _this2._phonescreen_bg.setAlpha(0);

        _this2._question.setAlpha(0);

        _this2._option1.setAlpha(0);

        _this2._option2.setAlpha(0);

        _this2._option3.setAlpha(0); // Difficulty Increased


        _this2._angularVel = _this2._angularVel + 0.012;
        _this2._thrust = _this2._thrust + 0.04;

        if (_this2._correct_o !== option._text) {
          _this2.notCorrectPhoneInput();
        }
      });
    }
  }, {
    key: "notCorrectPhoneInput",
    value: function notCorrectPhoneInput() {
      // Reduce phone 
      this._socialscorevalue -= 5;

      this._socialscore.setText("Social Score: " + this._socialscorevalue + "/10");
    }
  }, {
    key: "phoneResponseTimer",
    value: function phoneResponseTimer(time) {
      console.log("Here");
    }
  }]);

  return MinimapScene;
}(Phaser.Scene);

exports.MinimapScene = MinimapScene;
},{"./ACTIVE_SCENE.js":"scenes/ACTIVE_SCENE.js"}],"scenes/GameOverScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameOverScene = void 0;

var _ACTIVE_SCENE = require("./ACTIVE_SCENE.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Menu Scene
/// Displays the Menu and shows options
var GameOverScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(GameOverScene, _Phaser$Scene);

  function GameOverScene() {
    _classCallCheck(this, GameOverScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameOverScene).call(this, {
      key: _ACTIVE_SCENE.ActiveScene.AvailableScenes.GameOver
    }));
  }

  _createClass(GameOverScene, [{
    key: "init",
    value: function init(msg) {
      console.log("GameOver: ", msg);
    }
  }, {
    key: "preload",
    value: function preload() {
      this.load.image('statistics', './asset/menu/statistics.png');
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      // Height and Width for screen
      var _this$sys$game$config = this.sys.game.config,
          width = _this$sys$game$config.width,
          height = _this$sys$game$config.height;
      var logo = this.add.image(400, height * 0.6, 'statistics').setDepth(2);
      logo.setScale(0.5);
      var title = this.add.text(width * 0.3, height * 0.05, "You Crashed!", {
        font: "18px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true).setScale(3).setResolution(5);
      var goal_description = this.add.text(width * 0.02, height * 0.3, "It's important to be safe on the roads. Over 90% of crashes are the fault of \ndrivers. The most frequent driver mistake is 'Recognition Error' i.e. the\ndriver's inattention. Here are some statistics from the National Safety Council.\nIs it worth it? You decide 😀", {
        font: "18px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true).setScale(1).setResolution(5);
      var carmouse = this.add.sprite(120, height * 0.8, 'car');
      carmouse.setScale(1 / 16).setOrigin(0).setVisible(false);
      var playButton = //this.add.text(350,300, 'Play', { fontFamily: '"Roboto Condensed"' });
      this.add.text(220, height * 0.8, "Play Again!", {
        font: "18px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true);
      playButton.setScale(3).setResolution(5);
      playButton.setInteractive();
      playButton.on("pointerover", function () {
        carmouse.setVisible(true);
      });
      playButton.on("pointerout", function () {
        carmouse.setVisible(false);
      });
      playButton.on("pointerup", function () {
        console.log("Start Game");

        _this.scene.start(_ACTIVE_SCENE.ActiveScene.AvailableScenes.Menu, "GameOver -> Menu");
      });
    }
  }]);

  return GameOverScene;
}(Phaser.Scene);

exports.GameOverScene = GameOverScene;
},{"./ACTIVE_SCENE.js":"scenes/ACTIVE_SCENE.js"}],"scenes/AboutScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AboutScene = void 0;

var _ACTIVE_SCENE = require("./ACTIVE_SCENE.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Menu Scene
/// Displays the Menu and shows options
var AboutScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(AboutScene, _Phaser$Scene);

  function AboutScene() {
    _classCallCheck(this, AboutScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(AboutScene).call(this, {
      key: _ACTIVE_SCENE.ActiveScene.AvailableScenes.About
    }));
  }

  _createClass(AboutScene, [{
    key: "init",
    value: function init(msg) {
      console.log("About: ", msg);
    }
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      // Height and Width for screen
      var menu_music = this.sound.play('menu_music'); //menu_music.setVolume(0.7);

      var _this$sys$game$config = this.sys.game.config,
          width = _this$sys$game$config.width,
          height = _this$sys$game$config.height;
      var logo = this.add.image(400, 150, 'menu_logo').setDepth(2);
      logo.setScale(2);
      var carmouse = this.add.sprite(250, 310, 'car');
      carmouse;
      carmouse.setScale(1 / 16).setOrigin(0).setVisible(false); //carmouse.setRotation(10);

      var playButton = //this.add.text(350,300, 'Play', { fontFamily: '"Roboto Condensed"' });
      this.add.text(350, 300, "Play", {
        font: "18px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true);
      playButton.setScale(3).setResolution(5);
      playButton.setInteractive();
      playButton.on("pointerover", function () {
        carmouse.y = 310;
        carmouse.setVisible(true);
      });
      playButton.on("pointerout", function () {
        carmouse.setVisible(false);
      });
      playButton.on("pointerup", function () {
        console.log("Start Game");

        _this.scene.start(_ACTIVE_SCENE.ActiveScene.AvailableScenes.Minimap, "Menu -> Minimap");
      });
      var instructionsButton = this.add.text(350, 400, "Instructions", {
        font: "15px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true);
      instructionsButton.setScale(3).setResolution(5);
      instructionsButton.setInteractive();
      instructionsButton.on("pointerover", function () {
        carmouse.y = 410;
        carmouse.setVisible(true);
      });
      instructionsButton.on("pointerout", function () {
        carmouse.setVisible(false);
      });
      instructionsButton.on("pointerup", function () {
        console.log("Start Game");

        _this.scene.start(_ACTIVE_SCENE.ActiveScene.AvailableScenes.Instructions, "Menu -> Instructions");
      });
      var AboutButton = this.add.text(350, 500, "About", {
        font: "15px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true);
      AboutButton.setScale(3).setResolution(5);
      AboutButton.setInteractive();
      AboutButton.on("pointerover", function () {
        carmouse.y = 510;
        carmouse.setVisible(true);
      });
      AboutButton.on("pointerout", function () {
        carmouse.setVisible(false);
      });
      AboutButton.on("pointerup", function () {
        console.log("Start Game");

        _this.scene.start(_ACTIVE_SCENE.ActiveScene.AvailableScenes.About, "Menu -> Instructions");
      });
    }
  }]);

  return AboutScene;
}(Phaser.Scene);

exports.AboutScene = AboutScene;
},{"./ACTIVE_SCENE.js":"scenes/ACTIVE_SCENE.js"}],"scenes/InstructionScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InstructionScene = void 0;

var _ACTIVE_SCENE = require("./ACTIVE_SCENE.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Menu Scene
/// Displays the Menu and shows options
var InstructionScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(InstructionScene, _Phaser$Scene);

  function InstructionScene() {
    _classCallCheck(this, InstructionScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(InstructionScene).call(this, {
      key: _ACTIVE_SCENE.ActiveScene.AvailableScenes.Instruction
    }));
  }

  _createClass(InstructionScene, [{
    key: "init",
    value: function init(msg) {
      console.log("Instruction: ", msg);
    }
  }, {
    key: "preload",
    value: function preload() {
      this.load.image('concept', './asset/menu/concept.png');
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      // Height and Width for screen
      //menu_music.setVolume(0.7);
      var _this$sys$game$config = this.sys.game.config,
          width = _this$sys$game$config.width,
          height = _this$sys$game$config.height;
      var concept_image = this.add.image(600, 150, 'concept').setScale(0.4).setDepth(2);
      var title = this.add.text(width * 0.02, height * 0.05, "Instructions:", {
        font: "18px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true).setScale(3).setResolution(5);
      var goal = this.add.text(width * 0.02, height * 0.15, "Goal: ", {
        font: "18px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true).setScale(2).setResolution(5);
      var goal_description = this.add.text(width * 0.02, height * 0.21, "It's important to be safe on the roads, \nbut if you don't post your 5th video of \nsome song playing on the radio, you might\njust go into anaphylactic shock. You\nthink you're good at Texting and\nDriving? We'll see 👀", {
        font: "18px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true).setScale(1).setResolution(5);
      var controls = this.add.text(width * 0.02, height * 0.41, "Controls:", {
        font: "18px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true).setScale(2).setResolution(5);
      var controls_list = this.add.text(width * 0.02, height * 0.5, " [A] - Turn Left \t [Q] - Quick Left Turn (90*) \n [D] - Turn Right\t [E] - Quick Right Turn (90*)\n [SPACEBAR] - Slow/Drift", {
        font: "18px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true).setScale(1.5).setResolution(5);
      var controls_description = this.add.text(width * 0.02, height * 0.65, " Use your LEFT HAND on the [ASD]. \n Use your RIGHT HAND for the MOUSE to answer any texts\n The car moves forward freely and as the timer ticks down, gets \n slightly faster 🤔. Use Quick Turns occassionally to turn \n swiftly and ENDANGER TRAFFIC.\n Good Luck! ", {
        font: "18px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true).setScale(1.2).setResolution(5);
      var carmouse = this.add.sprite(width * 0.82 - 60, height * 0.9 + 20, 'car').setScale(1 / 16).setVisible(false);
      var playButton = this.add.text(width * 0.82, height * 0.9, "Play!", {
        font: "18px monospace",
        color: "white"
      }).setShadow(5, 5, "#5588EE", 0, true, true);
      playButton.setScale(3).setResolution(5);
      playButton.setInteractive();
      playButton.on("pointerover", function () {
        carmouse.setVisible(true);
      });
      playButton.on("pointerout", function () {
        carmouse.setVisible(false);
      });
      playButton.on("pointerup", function () {
        console.log("Start Game");

        _this.scene.start(_ACTIVE_SCENE.ActiveScene.AvailableScenes.Minimap, "Instruction -> Minimap");
      });
    }
  }]);

  return InstructionScene;
}(Phaser.Scene);

exports.InstructionScene = InstructionScene;
},{"./ACTIVE_SCENE.js":"scenes/ACTIVE_SCENE.js"}],"phaser_endpoint.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./scenes/LoadScene");

var _MenuScene = require("./scenes/MenuScene");

var _MinimapScene = require("./scenes/MinimapScene");

var _GameOverScene = require("./scenes/GameOverScene");

var _AboutScene = require("./scenes/AboutScene");

var _InstructionScene = require("./scenes/InstructionScene");

// Setup Config
var config = {
  type: Phaser.AUTO,
  // Which renderer to use
  width: 800,
  // Canvas width in pixels
  height: 600,
  // Canvas height in pixels
  backgroundColor: '#f09020',
  parent: "game-container",
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _MinimapScene.MinimapScene, _GameOverScene.GameOverScene, _AboutScene.AboutScene, _InstructionScene.InstructionScene],
  // render:{
  //   pixelArt: true
  // },
  physics: {
    default: "matter",
    matter: {
      gravity: {
        x: 0,
        y: 0
      } // 2D Game does not need Gravity

    }
  }
};
var game = new Phaser.Game(config);
},{"./scenes/LoadScene":"scenes/LoadScene.js","./scenes/MenuScene":"scenes/MenuScene.js","./scenes/MinimapScene":"scenes/MinimapScene.js","./scenes/GameOverScene":"scenes/GameOverScene.js","./scenes/AboutScene":"scenes/AboutScene.js","./scenes/InstructionScene":"scenes/InstructionScene.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51259" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","phaser_endpoint.js"], null)
//# sourceMappingURL=/phaser_endpoint.7e5a8d08.js.map