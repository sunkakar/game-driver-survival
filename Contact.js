class contact
{
    constructor(name = '\0', message = '\0', timeLeft = 0, state = -1, relationship = Math.floor(Math.random() * Math.floor(3)), threshold = ( 40 - (Math.floor(Math.random() * Math.floor(20)))), OpA = '\0', OpB = '\0', OpC = '\0')
    {
        /**
         *  States
         * -1 = reject
         * 0 = sent
         * 1 = confirmed
         * 2 = completed
         */
        this._name = name;
        this._message = message;
        this._duration = timeleft;
        this._state = state;
        this._relationship = relationship//  2- crush 1 - friend 2 - relative
        this._threshold = threshold;// start 100  with stand def of 20
        this._Options = [];
        this._Options.push(OpA);
        this._Options.push(OpB);
        this._Options.push(OpC);
    }
    //getters
    get name()//name of sender
    {
        return this._name;
    }
    get message()//sender message
    {
        return this._message;
    }
    get duration()//timeleft to finish
    {
        this._duration;
    }
    get state()//current phase to completion
    {
        return this._state;
    }
    get relationship()//who r they to you
    {
        return this._relationship;
    }
    get threshold()//How patient
    {
        return this._threshold;
    }
    //setters
    set name(n)//name of sender
    {
        this._name =n;
    }
    set message(m)//sender message
    {
        this._message = m;
    }
    set duration(t)//timeleft to finish
    {
        this._duration = t;
    }
    set state(s)//current relationship
    {
        this._state = s;
    }
    set relationship(r)//who r they to you
    {
        this._relationship = r;
    }
    set threshold(th)//How Patient
    {
        this._threshold = th;
    } 
    //method
    getOp(i)
    {
        return this._Options[i];
    }
    setOp(i, message)
    {
        this._Options[i] = message;
    }
    roll(social)//crystal ball, will we last? 
    {
        if(this._threshold > 0)
        {
            this._threshold += (Math.floor(Math.random() * Math.floor(this. relationship))) + (-1 + (Math.floor(Math.random() * Math.floor(2))))*social);
        }
        if(this._threshold <= 0)
        {
            return -1;
        }
        return 0;
    }
    response()
    {
        if(this.roll() == -1)
        {
            this.state = -1;
            //this._message = 'L8ter!';'srry somenthing came up! :( '; 'BYE!'; ':$'; 'Adieu'
        }

        return this._message;
    }

};