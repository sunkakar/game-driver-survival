# game-driver-survival
HTML5 GAME! 

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