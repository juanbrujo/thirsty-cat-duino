const five = require("johnny-five");
const board = new five.Board();
board.on("ready", () => {
  
  const proximity = new five.Proximity({
    controller: "GP2Y0A21YK",
    pin: "A0"
  });
  
  const led = new five.Led(11);

  proximity.on("data", function() {

    let approach = this.cm;
    let minApproach = 5;
    let maxApproach = 50;

    console.log(approach + ' cms');

    if( approach >= minApproach && approach <= maxApproach) {
      led.on();
    } else {
      led.off();
    }

  });

});