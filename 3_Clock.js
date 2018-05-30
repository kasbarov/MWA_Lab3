var EventEmitter = require('events');

class Clock extends EventEmitter {

    constructor(){
        super();   
        
        // emits a tick event every second
        setInterval(()=>this.emit('tick'), 1000);   
    }

}

// register to tick event
var obj = new Clock();
obj.on('tick', ()=> console.log('woohoo'));