const EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor() {
        super();
        //Here when i call emit i should use it inside an event function to be triggered when i call on on emitter
        setInterval(() => this.emit('boom', 'Athlete is working out !'), 1000);
    }
}

var gym = new Gym();
//Here i add listener for the EventEmitter  to handle the emitted events i could have multiple listeners to the same event
gym.on('boom', (message) => console.log(message));
gym.on('boom', () => console.log("waiting 1 sec....."));