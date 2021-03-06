class player
{
    constructor()
    {
        this._name = 'player';
        this._image = new Image;// make a source array for cars
        this._image.src = './asset/png/car/Car_1_Main_Positions/Car_1_01.png';//def
        this._x = 0;
        this._y = 0;
        this._width = 32;
        this._height = 32;
        this._dir = 0;
        this._shift = 0;
        this._timer = 60000;
        this._speed = 1;
    }
    //setter
    set x(x)
    {
        this._x = x;
    }
    set y(y)
    {
        this._y = y;
    }
    set dir(dir)
    {
        this._dir = dir;
    }
    set timer(time)
    {
        this._timer = time;
    }
    set width(width)
    {
        this._width = width;
    }
    set height(height)
    {
        this._height = height;
    }
    set speed(s)
    {
        this._speed = s;
    }
    set shift(s)
    {
        this._shift = s;
    }
    //getter
    get x()
    {
        return this._x;
    }
    get y()
    {
        return this._y;
    }
    get dir()
    {
        return this._dir;
    }
    get timeLeft()
    {
        return this._timer;
    }
    get width()
    {
        return this._width;
    }
    get height()
    {
        return this._height;
    }
    get speed()
    {
        return this._speed;
    }
    get image()
    {
        return this._image;
    }
    get shift()
    {
        return this._shift;
    }
    //method
    rotate(a)
    {
        //clockwise increments
        if(this._dir === 3 && a === 1)
        {
            this._dir = 0;
        }
        else if(this._dir === 0 && a === -1)
        {
            this._dir = 3;
        }
        else
        {
            this._dir += a;
        }
    }
    move(a)
    {
        switch(this._dir)
        {
            case 0:
            case 2:
                this._y += (a * this._speed);
                break;
            case 1:
            case 3:
                this._x += (a * this._speed);
                break;
            default:
                break;
        }

    }
};//end of player class
//initialize player
let user = new player();

//new class
class gameHandler
{
    constructor(user = null)
    {
        this._map = document.getElementsByTagName("canvas")[0];
        //document.getElementById("gameBoard");
        this._map.height = window.height;
        this._map.width = window.width;
        this._game = this._map.getContext("2d");
        //this._touchies = [];
        //let user = new player();
        this._user = user;
        this._playing = false;
        this._runtime = 0;// in ms -> 1000 = 1 sec
        this._keyDur = 0;
        this._interval = 20;
        this._key = '\0';
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
                    
    }
    keyUpHandler(e)
    {
        if(this._key != '\0')
        {
            if(this._keyDur > 1000)
            {
                if(this._key == 'ArrowRight')
                {
                    this._user.rotate(1);
                    this._game.rotate(Math.PI/2);
                    this._user.shift += (Math.PI/2);
                }
                else if(this._key == 'ArrowLeft')
                {
                    this._user.rotate(-1);
                    this._game.rotate(-1*(Math.PI/2));
                    this._user.shift -= (Math.PI/2);
                }
            }
            else if(this._key == 'ArrowRight')
            {
                this._user.move(1);
            }
            else if(this._key == 'ArrowLeft')
            {
                this._user.move(-1);
            }
        }
        this._key = '\0';
        this._keyDur = 0;
    }
    keyDownHandler(e)
    {
        switch(e.key)
        {
            case 'ArrowRight':
            case '6':
            case 'd':
                this._key = 'ArrowRight';
                break;
            case 'ArrowLeft':
            case '4':
            case 'a':
                this._key = 'ArrowLeft';
                break;
            case 'Enter':
                this.start();
                break;
            default:
                break;
        }
    }
                
    run()
    {
        if(this._playing == true && this._user.timeLeft > 0 )
        {
            this._keyDur += this._interval;
            this._runtime += this._interval;
            this._user.timer -= this._interval;


        }
        else if(this._playing == true && this._user != null)
        {
            this._playing = false;
            //this._user.reset= this._playing;
            document.getElementById("startBtn").disabled = false;
            clearInterval();
        }               
    }
    start()
    {
        if(this._playing === false)
        {
            this._user.x = (this._map.width - this._user.width)/2;
            this._user.y = (this._map.height - this._user.height)/2;
            document.getElementById("startBtn").disabled = true;
            this._playing = true;
            this._user= new player();
            setInterval(this.run, this._interval);
        }
    }
    drawPlayer() 
    {
        this._game.rotate(-1* (this._user.shift));
        this._game.beginPath();
        this._game.drawImage(this._user.image, this._user.x, this._userr.y, this._user.width, this._user.height);
        this._game.fillStyle = "#ffe0bd";
        this._game.fill();
        this._game.closePath();
        this._game.rotate(this._user.shift);
    }
};
    var invoEngine = new gameHandler(user);