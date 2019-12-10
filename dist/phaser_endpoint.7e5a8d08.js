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
var ActiveScene = {
  AvailableScenes: {
    Load: "Load",
    Menu: "Menu",
    Minimap: "Minimap"
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
        this.load.image('car', './asset/png/car/Car_1_Main_Positions/Car_1_01.png');
        this.load.image('menu_logo', './asset/menu/game-logo.png');
        this.load.image('menu_bg', './asset/menu/menu-bg.png'); //this.load.image("tiles", "../dist/asset/spritesheet/roads2W.png");
        //this.load.tilemapTiledJSON("map", "../dist/asset/spritesheet/map_updated.json");
        //this.load.audio()
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

      // Height and Width for screen
      var _this$sys$game$config = this.sys.game.config,
          width = _this$sys$game$config.width,
          height = _this$sys$game$config.height;
      var logo = this.add.image(400, 150, 'menu_logo').setDepth(2);
      logo.setScale(2);
      var carmouse = this.add.sprite(300, 300, 'car');
      carmouse.setScale(1 / 16).setOrigin(0).setVisible(false);
      var playButton = //this.add.text(350,300, 'Play', { fontFamily: '"Roboto Condensed"' });
      this.add.text(350, 300, "Play", {
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

        _this.scene.start(_ACTIVE_SCENE.ActiveScene.AvailableScenes.Minimap, "Menu -> Minimap");
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

var MinimapScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MinimapScene, _Phaser$Scene);

  function MinimapScene() {
    var _this;

    var player = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, MinimapScene);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MinimapScene).call(this, {
      key: _ACTIVE_SCENE.ActiveScene.AvailableScenes.Minimap
    }));
    _this._player = player;
    return _this;
  }

  _createClass(MinimapScene, [{
    key: "init",
    value: function init(msg) {
      console.log("Minimap: ", msg);
    }
  }, {
    key: "preload",
    value: function preload() {
      this.load.image('menu_bg', './asset/menu/menu-bg.png'); //this.load.spritesheet('base_tiles_ss', './asset/spritesheet/tiles_spritesheet.png');
      //this.load.atlas('base_map', './asset/spritesheet/tiles_spritesheet.png', 'asset/spritesheet/tiles_spritesheet.json');

      this.load.image("roads2W", "./asset/spritesheet/roads2W.png");
      this.load.image("RPGTileset", "./asset/spritesheet/TilesetPyxel.png");
      this.load.tilemapTiledJSON("map", "./asset/spritesheet/map_updated.json");
    }
  }, {
    key: "create",
    value: function create() {
      //this.scene.start( ActiveScene.AvailableScenes.Menu, "Here!" )
      var background = this.add.image('base_map', 'Decor/Racing_Lights (2).png').setOrigin(0); //this.add.image(0,0, "menu_bg").setOrigin(0);

      background.displayWidth = 800;
      background.displayHeight = 600;
      var map = this.make.tilemap({
        key: "map"
      });
      var tileset = map.addTilesetImage("roads2W", "roads2W");
      var tileset2 = map.addTilesetImage("RPG TileSet", "RPGTileset"); //const tileset = map.addTilesetImage("tuxmon-sample-32px-extruded", "tiles");

      var layer1 = map.createStaticLayer("Map", tileset, 0, 0).setScale(3);
      var layer2 = map.createStaticLayer("Trees", tileset2, 0, 0).setScale(3);
      var layer3 = map.createStaticLayer("Bridge", tileset2, 0, 0).setScale(3); // Phaser supports multiple cameras, but you can access the default camera like this:

      var camera = this.cameras.main;
      var cursors = this.input.keyboard.createCursorKeys();
      controls = new Phaser.Cameras.Controls.FixedKeyControl({
        camera: camera,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        speed: 0.7
      }); // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap

      camera.setBounds(0, 0, 2300, 1530); //console.log(map.widthInPixels*5, map.heightInPixels*5);
      // Help text that has a "fixed" position on the screen

      this.add.text(16, 16, "Arrow keys to scroll", {
        font: "18px monospace",
        fill: "#ffffff",
        padding: {
          x: 20,
          y: 10
        },
        backgroundColor: "#000000"
      }).setScrollFactor(0);
      this._player = this.physics.add.sprite(300, 300, 'car').setScale(1 / 16);
    }
  }, {
    key: "update",
    value: function update(time, delta) {
      controls.update(delta);

      this._player.body.setVelocity(0);
    }
  }]);

  return MinimapScene;
}(Phaser.Scene);

exports.MinimapScene = MinimapScene;
},{"./ACTIVE_SCENE.js":"scenes/ACTIVE_SCENE.js"}],"phaser_endpoint.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./scenes/LoadScene");

var _MenuScene = require("./scenes/MenuScene");

var _MinimapScene = require("./scenes/MinimapScene");

var config = {
  type: Phaser.AUTO,
  // Which renderer to use
  width: 800,
  // Canvas width in pixels
  height: 600,
  // Canvas height in pixels
  backgroundColor: '#f09020',
  parent: "game-container",
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _MinimapScene.MinimapScene],
  render: {
    pixelArt: true
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 0
      } // Top down game, so no gravity

    }
  }
};
var game = new Phaser.Game(config); // function preload() {
//   // Runs once, loads up assets like images and audio
//   this.load.image("grass", "./asset/png/tile/Background_Tiles/Grass_Tile.png");
//   //this.load.image("grass-tiles", "../spritesheet/grass_ss.png");
//   this.load.tilemap("grass-tiles", "../spritesheet/grass_ss.png",32,32);
//   this.load.image('car', './assets/png/car/Car_1_Main_Positions/Car_1_01.png');
//   this.load.tilemapTiledJSON('map', './spritesheet/grass_ss.json');
//   this.load.image('tiles1', 'assets/tilemaps/tiles/super-mario.png');
// }
// function create() {
//   // Runs once, after all assets in preload are loaded
//   const level = [
//       [  0,   2,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
//       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
//       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
//       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
//       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
//       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
//       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
//       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
//       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
//       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
//       [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ]
//     ];
//     map = game.add.tilemap('map');
//     var background = this.add.sprite(0, 0, "grass", "./asset/png/tile/Grass_Tile (2).png");
//     const map = this.make.tilemap({ data: level, tileWidth: 50, tileHeight: 50 });
//     const tiles = map.addTilesetImage("grass-tiles");
//     const layer = map.createStaticLayer(0, tiles, 0, 0);
//     //background.setScale(3, 2.4);
// }
// function update(time, delta) {
//   // Runs once per frame for the duration of the scene
// }
},{"./scenes/LoadScene":"scenes/LoadScene.js","./scenes/MenuScene":"scenes/MenuScene.js","./scenes/MinimapScene":"scenes/MinimapScene.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54899" + '/');

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
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","phaser_endpoint.js"], null)
//# sourceMappingURL=/phaser_endpoint.7e5a8d08.js.map