parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ug2O":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ActiveScene=void 0;var e={AvailableScenes:{Load:"Load",Menu:"Menu",Minimap:"Minimap",GameOver:"GameOver"}};exports.ActiveScene=e;
},{}],"FUff":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadScene=void 0;var e=require("./ACTIVE_SCENE.js");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?a(e):n}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(t){function o(){return n(this,o),i(this,s(o).call(this,{key:e.ActiveScene.AvailableScenes.Load}))}return u(o,Phaser.Scene),r(o,[{key:"init",value:function(e){console.log("Load: ",e)}},{key:"preload",value:function(){for(var e=this,t=this.add.graphics({fillStyle:{color:16777215}}),n=0;n<100;n++)this.load.spritesheet("grass_tiles","../asset/spritesheet/grass_ss.png",{frameHeight:512,frameWidth:512}),this.load.image("car","./asset/png/car/Car_1_Main_Positions/Car_Sprite.png"),this.load.image("menu_logo","./asset/menu/game-logo.png"),this.load.image("menu_bg","./asset/menu/menu-bg.png"),this.load.audio("menu_music","./asset/menu/Sci-fi Pulse Loop.mp3");this.load.on("progress",function(n){t.fillRect(0,e.game.renderer.height/2,e.game.renderer.width*n,50)})}},{key:"create",value:function(){this.scene.start(e.ActiveScene.AvailableScenes.Menu,"Load -> Menu")}}]),o}();exports.LoadScene=l;
},{"./ACTIVE_SCENE.js":"ug2O"}],"JXnn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MenuScene=void 0;var e=require("./ACTIVE_SCENE.js");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function r(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?s(e):n}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(t){function o(){return n(this,o),r(this,c(o).call(this,{key:e.ActiveScene.AvailableScenes.Menu}))}return u(o,Phaser.Scene),i(o,[{key:"init",value:function(e){console.log("Menu: ",e)}},{key:"preload",value:function(){}},{key:"create",value:function(){var t=this,n=this.add.image("base_map","Decor/Racing_Lights (2).png").setOrigin(0);n.displayWidth=800,n.displayHeight=600;this.sound.play("menu_music");var o=this.sys.game.config;o.width,o.height;this.add.image(400,150,"menu_logo").setDepth(2).setScale(2);var i=this.add.sprite(250,310,"car");i.setScale(1/16).setOrigin(0).setVisible(!1);var r=this.add.text(350,300,"Play",{font:"18px monospace",color:"white"}).setShadow(5,5,"#5588EE",0,!0,!0);r.setScale(3).setResolution(5),r.setInteractive(),r.on("pointerover",function(){i.y=310,i.setVisible(!0)}),r.on("pointerout",function(){i.setVisible(!1)}),r.on("pointerup",function(){console.log("Start Game"),t.scene.start(e.ActiveScene.AvailableScenes.Minimap,"Menu -> Minimap")});var s=this.add.text(350,400,"Instructions",{font:"15px monospace",color:"white"}).setShadow(5,5,"#5588EE",0,!0,!0);s.setScale(3).setResolution(5),s.setInteractive(),s.on("pointerover",function(){i.y=410,i.setVisible(!0)}),s.on("pointerout",function(){i.setVisible(!1)}),s.on("pointerup",function(){console.log("Start Game"),t.scene.start(e.ActiveScene.AvailableScenes.Instruction,"Menu -> Instructions")});var c=this.add.text(350,500,"About",{font:"15px monospace",color:"white"}).setShadow(5,5,"#5588EE",0,!0,!0);c.setScale(3).setResolution(5),c.setInteractive(),c.on("pointerover",function(){i.y=510,i.setVisible(!0)}),c.on("pointerout",function(){i.setVisible(!1)}),c.on("pointerup",function(){console.log("Start Game"),t.scene.start(e.ActiveScene.AvailableScenes.About,"Menu -> Instructions")})}}]),o}();exports.MenuScene=l;
},{"./ACTIVE_SCENE.js":"ug2O"}],"Tb4I":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MinimapScene=void 0;var e,t,s,o,i=require("./ACTIVE_SCENE.js");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t,s){return t&&r(e.prototype,t),s&&r(e,s),e}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function a(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return n(this,a),(e=l(this,c(a).call(this,{key:i.ActiveScene.AvailableScenes.Minimap})))._player=t,e._text="Health: 100%",e._health=s,e._score=null,e._socialscore=null,e._socialscorevalue=10,e._lostGame=!1,e._phone=null,e._data=[],e._lastphoneEvent=null,e._phoneEventTimer=null,e._phonescreen_bg=null,e._option1=null,e._option2=null,e._option3=null,e._F11=null,e._angularVel=.03,e._thrust=.15,e._solved=0,e}return u(a,Phaser.Scene),h(a,[{key:"init",value:function(e){console.log("Minimap: ",e),this._text="Health: 100%",this._health=100,this._score=null,this._socialscore=null,this._socialscorevalue=10,this._lostGame=!1,this._phone=null,this._data=[],this._lastphoneEvent=this.time.now,this._phoneEventTimer=20,this._phonescreen_bg=null,this._option1=null,this._option2=null,this._option3=null,this._F11=null,this._angularVel=.03,this._thrust=.15,this._solved=0}},{key:"preload",value:function(){this.load.audio("crash_1","./asset/collision_audio/66780__kevinkace__crate-break-4.mp3"),this.load.audio("crash_2","./asset/collision_audio/237375__squareal__car-crash.mp3"),this.load.image("menu_bg","./asset/menu/menu-bg.png"),this.load.image("roads2W","./asset/spritesheet/roads2W.png"),this.load.image("RPGTileset","./asset/spritesheet/TilesetPyxel.png"),this.load.tilemapTiledJSON("map","./asset/spritesheet/map_updated.json"),this.load.image("phone","./asset/phone/mobile.png"),this.load.image("screen_bg","./asset/phone/bg.jpg"),this.load.image("screen_bg","./asset/phone/speech-bubble.png"),t=this.add.graphics({fillStyle:{color:16731935}})}},{key:"create",value:function(){var e=this.sys.game.config,t=e.width,i=e.height,a=this.make.tilemap({key:"map"}),n=a.addTilesetImage("roads2W","roads2W"),r=a.addTilesetImage("RPG TileSet","RPGTileset"),h=(a.createDynamicLayer("Map",n,0,0).setScale(3),a.createDynamicLayer("Trees",r,0,0).setScale(3));a.createDynamicLayer("Bridge",r,0,0).setScale(3);h.setCollisionByProperty({canCollide:!0}),this.matter.world.convertTilemapLayer(h),this._player=this.matter.add.image(450,150,"car").setScale(1/22),this._player.thrust(.1),this._score=this.add.text(16,16,this._text,{font:"18px monospace",fill:"#ffffff",padding:{x:20,y:10},backgroundColor:"#050505"}).setScrollFactor(0),this._socialscore=this.add.text(16,60,"Social Score: 10/10",{font:"18px monospace",fill:"#ffffff",padding:{x:20,y:10},backgroundColor:"#050505"}).setScrollFactor(0);var l=this.cameras.main;l.startFollow(this._player),l.setBounds(0,0,2300,1530);var p=this._health;this.matter.world.on("collisionstart",function(e,t,s){this.scene.sound.play("crash_1");if((p-=Math.floor(8*Math.random()+1))>0&&this.scene._socialscorevalue>0)this.scene._text="Health: "+p+"%",this.scene._score.setText(this.scene._text);else{this.scene.sound.play("crash_2");this.scene.endGame()}}),this._phone=this.add.image(.85*t,.8*i,"phone").setScale(.5).setDepth(10).setScrollFactor(0),this._phonescreen_bg=this.add.image(.85*t,.85*i,"screen_bg").setScale(.9).setDepth(8).setScrollFactor(0),this._question=this.add.text(.75*t,.6*i,"Wanna Hangout?",{font:"15px monospace",fill:"#ffffff",padding:{x:15,y:10},backgroundColor:"#000000"}).setDepth(11).setScrollFactor(0).setResolution(10),this._option1=this.add.text(.78*t,.7*i,"Bye").setFontSize(15).setDepth(11).setScrollFactor(0),this._option2=this.add.text(.78*t,.8*i,"I Dont Care").setFontSize(15).setDepth(11).setScrollFactor(0),this._option3=this.add.text(.78*t,.9*i,"Maybe").setFontSize(15).setDepth(11).setScrollFactor(0),this._phone.setAlpha(0),this._phonescreen_bg.setAlpha(0),this._question.setAlpha(0),this._option1.setAlpha(0),this._option2.setAlpha(0),this._option3.setAlpha(0),this.phoneHighlight(this._option1),this.phoneHighlight(this._option2),this.phoneHighlight(this._option3),s=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),o=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q)}},{key:"update",value:function(e,t){console.log("Thrust: ",this._thrust);var i=this.input.keyboard.addKeys({down:Phaser.Input.Keyboard.KeyCodes.SPACE,left:Phaser.Input.Keyboard.KeyCodes.A,right:Phaser.Input.Keyboard.KeyCodes.D}),a=this.sys.game.config;a.width,a.height;if(this._player.setFrictionAir(.15),this._player.setMass(100),this._player.setFixedRotation(),this._player.thrust(this._thrust),i.down.isDown&&this._player.thrust(-this._thrust/2),Phaser.Input.Keyboard.JustDown(s)?this._player.setAngularVelocity(18*Math.PI/180):Phaser.Input.Keyboard.JustDown(o)&&this._player.setAngularVelocity(18*-Math.PI/180),i.left.isDown?this._player.setAngularVelocity(-this._angularVel):i.right.isDown&&this._player.setAngularVelocity(this._angularVel),this.time.now-(this._lastphoneEvent+1e3*this._phoneEventTimer)>0){var n=this._solved;switch(console.log(n),n){case 0:this.onPhoneSubmit("How was your day?","💩","💩","😀","😀");break;case 1:this.onPhoneSubmit("Wanna Go Out?","With U?😂","💩","Yes!","Yes!");break;case 2:this.onPhoneSubmit("I'm Leaving You?","Okay","Lmao","NO","NO");break;default:n=0}this._solved=n+1}this._socialscorevalue<=0&&this.endGame()}},{key:"endGame",value:function(){this.scene.start(i.ActiveScene.AvailableScenes.GameOver,"Minimap -> Game Over")}},{key:"onPhoneSubmit",value:function(e,t,s,o,i,a){this._question.setText(e).setResolution(10),this._option1.setText(t).setResolution(10),this._option2.setText(s).setResolution(10),this._option3.setText(o).setResolution(10),this._correct_o=i,console.log("Phone Event Triggerrred"),this._lastphoneEvent=this.time.now,this._phoneEventTimer-1>10?(this.tweens.add({targets:this._phone,alpha:1,duration:2e3,ease:"Power2"},this),this.tweens.add({targets:this._phonescreen_bg,alpha:1,duration:2e3,ease:"Power2"},this),this.tweens.add({targets:this._question,alpha:1,duration:1e3,ease:"Power2",loop:1},this),this.tweens.add({targets:this._option1,alpha:1,duration:1e3,ease:"Power2",loop:1},this),this.tweens.add({targets:this._option2,alpha:1,duration:1e3,ease:"Power2",loop:1},this),this.tweens.add({targets:this._option3,alpha:1,duration:1e3,ease:"Power2",loop:1},this),this._phoneEventTimer-=1):(this.tweens.add({targets:this._phone,alpha:1,duration:1e3,ease:"Power2"},this),this.tweens.add({targets:this._phonescreen_bg,alpha:1,duration:1e3,ease:"Power2"},this),this.tweens.add({targets:this._question,alpha:1,duration:1e3,ease:"Power2",loop:-1},this),this.tweens.add({targets:this._option1,alpha:1,duration:1e3,ease:"Power2",loop:1},this),this.tweens.add({targets:this._option2,alpha:1,duration:1e3,ease:"Power2",loop:1},this),this.tweens.add({targets:this._option3,alpha:1,duration:1e3,ease:"Power2",loop:1},this),console.log("Fastest Speed"))}},{key:"phoneHighlight",value:function(e){var t=this;e.setInteractive(),e.on("pointerover",function(){e.setScale(1.5)}),e.on("pointerout",function(){e.setScale(1)}),e.on("pointerup",function(){console.log("Submission",e._text),t._phone.setAlpha(0),t._phonescreen_bg.setAlpha(0),t._question.setAlpha(0),t._option1.setAlpha(0),t._option2.setAlpha(0),t._option3.setAlpha(0),t._angularVel=t._angularVel+.013,t._thrust=t._thrust+.05,t._correct_o!==e._text&&(t._socialscorevalue-=5,t._socialscore.setText("Social Score: "+t._socialscorevalue+"/10"))})}},{key:"phoneResponseTimer",value:function(e){console.log("Here")}}]),a}();exports.MinimapScene=d;
},{"./ACTIVE_SCENE.js":"ug2O"}],"x772":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GameOverScene=void 0;var e=require("./ACTIVE_SCENE.js");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?c(e):n}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(t){function o(){return n(this,o),i(this,u(o).call(this,{key:e.ActiveScene.AvailableScenes.GameOver}))}return a(o,Phaser.Scene),r(o,[{key:"init",value:function(e){console.log("GameOver: ",e)}},{key:"preload",value:function(){}},{key:"create",value:function(){var t=this,n=this.sys.game.config;n.width,n.height;this.add.image(400,150,"menu_logo").setDepth(2).setScale(2);var o=this.add.sprite(300,300,"car");o.setScale(1/16).setOrigin(0).setVisible(!1);var r=this.add.text(220,300,"Play Again!",{font:"18px monospace",color:"white"}).setShadow(5,5,"#5588EE",0,!0,!0);r.setScale(3).setResolution(5),r.setInteractive(),r.on("pointerover",function(){o.setVisible(!0)}),r.on("pointerout",function(){o.setVisible(!1)}),r.on("pointerup",function(){console.log("Start Game"),t.scene.start(e.ActiveScene.AvailableScenes.Menu,"GameOver -> Menu")})}}]),o}();exports.GameOverScene=l;
},{"./ACTIVE_SCENE.js":"ug2O"}],"LaMq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AboutScene=void 0;var e=require("./ACTIVE_SCENE.js");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function r(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?s(e):n}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(t){function o(){return n(this,o),r(this,c(o).call(this,{key:e.ActiveScene.AvailableScenes.About}))}return u(o,Phaser.Scene),i(o,[{key:"init",value:function(e){console.log("About: ",e)}},{key:"preload",value:function(){}},{key:"create",value:function(){var t=this,n=(this.sound.play("menu_music"),this.sys.game.config);n.width,n.height;this.add.image(400,150,"menu_logo").setDepth(2).setScale(2);var o=this.add.sprite(250,310,"car");o.setScale(1/16).setOrigin(0).setVisible(!1);var i=this.add.text(350,300,"Play",{font:"18px monospace",color:"white"}).setShadow(5,5,"#5588EE",0,!0,!0);i.setScale(3).setResolution(5),i.setInteractive(),i.on("pointerover",function(){o.y=310,o.setVisible(!0)}),i.on("pointerout",function(){o.setVisible(!1)}),i.on("pointerup",function(){console.log("Start Game"),t.scene.start(e.ActiveScene.AvailableScenes.Minimap,"Menu -> Minimap")});var r=this.add.text(350,400,"Instructions",{font:"15px monospace",color:"white"}).setShadow(5,5,"#5588EE",0,!0,!0);r.setScale(3).setResolution(5),r.setInteractive(),r.on("pointerover",function(){o.y=410,o.setVisible(!0)}),r.on("pointerout",function(){o.setVisible(!1)}),r.on("pointerup",function(){console.log("Start Game"),t.scene.start(e.ActiveScene.AvailableScenes.Instructions,"Menu -> Instructions")});var s=this.add.text(350,500,"About",{font:"15px monospace",color:"white"}).setShadow(5,5,"#5588EE",0,!0,!0);s.setScale(3).setResolution(5),s.setInteractive(),s.on("pointerover",function(){o.y=510,o.setVisible(!0)}),s.on("pointerout",function(){o.setVisible(!1)}),s.on("pointerup",function(){console.log("Start Game"),t.scene.start(e.ActiveScene.AvailableScenes.About,"Menu -> Instructions")})}}]),o}();exports.AboutScene=l;
},{"./ACTIVE_SCENE.js":"ug2O"}],"ANUM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.InstructionScene=void 0;var e=require("./ACTIVE_SCENE.js");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?c(e):n}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(t){function o(){return n(this,o),i(this,u(o).call(this,{key:e.ActiveScene.AvailableScenes.Instruction}))}return s(o,Phaser.Scene),r(o,[{key:"init",value:function(e){console.log("Instruction: ",e)}},{key:"preload",value:function(){}},{key:"create",value:function(){var t=this,n=(this.sound.play("menu_music"),this.sys.game.config);n.width,n.height;this.add.image(400,150,"menu_logo").setDepth(2).setScale(2);var o=this.add.sprite(250,310,"car");o.setScale(1/16).setOrigin(0).setVisible(!1);var r=this.add.text(350,300,"Play",{font:"18px monospace",color:"white"}).setShadow(5,5,"#5588EE",0,!0,!0);r.setScale(3).setResolution(5),r.setInteractive(),r.on("pointerover",function(){o.y=310,o.setVisible(!0)}),r.on("pointerout",function(){o.setVisible(!1)}),r.on("pointerup",function(){console.log("Start Game"),t.scene.start(e.ActiveScene.AvailableScenes.Minimap,"Instruction -> Minimap")})}}]),o}();exports.InstructionScene=l;
},{"./ACTIVE_SCENE.js":"ug2O"}],"OB2H":[function(require,module,exports) {
"use strict";var e=require("./scenes/LoadScene"),n=require("./scenes/MenuScene"),r=require("./scenes/MinimapScene"),c=require("./scenes/GameOverScene"),s=require("./scenes/AboutScene"),t=require("./scenes/InstructionScene"),a={type:Phaser.AUTO,width:800,height:600,backgroundColor:"#f09020",parent:"game-container",scene:[e.LoadScene,n.MenuScene,r.MinimapScene,c.GameOverScene,s.AboutScene,t.InstructionScene],physics:{default:"matter",matter:{gravity:{x:0,y:0}}}},i=new Phaser.Game(a);
},{"./scenes/LoadScene":"FUff","./scenes/MenuScene":"JXnn","./scenes/MinimapScene":"Tb4I","./scenes/GameOverScene":"x772","./scenes/AboutScene":"LaMq","./scenes/InstructionScene":"ANUM"}]},{},["OB2H"], null)
//# sourceMappingURL=/game-driver-survival/phaser_endpoint.0c49f465.js.map