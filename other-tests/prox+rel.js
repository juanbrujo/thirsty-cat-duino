const five = require("johnny-five");
const board = new five.Board();

board.on("ready", () => {
  
  const proximity = new five.Proximity({
    controller: "GP2Y0A21YK",
    pin: "A0"
  });
  
  //const led = new five.Led(11);
  const relay = new five.Relay(10);

  relay.off();
  //led.on();

  proximity.on("data", () => {

    let approach = this.cm;
    let minApproach = 5;
    let maxApproach = 50;

    if( approach >= minApproach && approach <= maxApproach) {
      //ed.on();
      relay.on();
      console.log('on')
    } else {
      //led.off();
      relay.off();
      console.log('off')
    }

  });

});
/*
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Create a standard `led` component
  // on a valid pwm pin
  var led = new five.Led(11);

  led.pulse();

  // Stop and turn off the led pulse loop after
  // 10 seconds (shown in ms)
  this.wait(10000, function() {

    // stop() terminates the interval
    // off() shuts the led off
    led.stop().off();
  });
});
*/