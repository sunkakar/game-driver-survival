# game-driver-survival
HTML5 GAME! 

## Phaser DOCS

#### State Transition in Phaser.js
```
[Start] -> init() -> preload() -> create() -> update()
```

#### Phaser Plugins 
```
this.events;  //  Event emitter
this.cameras; //  2D camera
this.add;     //  Game Object Factory
this.make;    //  Game Object Creator
this.scene;   //  Scene Manager
this.children;        //  Display List
this.sys.updateList   //  Update List
```


## Live https://sunkakar.github.io/game-driver-survival/

## Link to Andy's Tile Based World Example  
- http://aharrisbooks.net/h5g/h5g_13/tbw/

## Full Screen Canvas 
```
var can = document.getElementById("my-canvas");

function resizeCanvas() {
  can.style.width = window.innerWidth + "px";
  setTimeout(function() {
    can.style.height = window.innerHeight + "px";
  }, 0);
};

// Webkit/Blink will fire this on load, but Gecko doesn't.
window.onresize = resizeCanvas;

// So we fire it manually...
resizeCanvas();

```

### Get Music From 
```

https://www.audioblocks.com/collections/video-game-music

https://kubigames.itch.io/road-tiles

https://midnite6.itch.io/classic-rpg-tileset-16x16?download

http://www.transparentpng.com/download/mobile-clipart-hd_10842.html

https://www.zedge.net/find/wallpapers/minions

http://www.transparentpng.com/download/speech-bubble-clip-art-at-pic_4233.html

Photo by Anisur Rahman on Unsplash

https://www.findsounds.com/ISAPI/search.dll?keywords=crash

https://freesound.org/people/kevinkace/sounds/66780/

<a target="_blank" href="/icons/set/circled-left-2">Back Arrow icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

Photo by Acharaporn Kamornboonyarush from Pexels

```
