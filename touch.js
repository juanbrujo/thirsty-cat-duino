const five = require("johnny-five");
const board = new five.Board();

board.on("ready", () => {
  
  const touch = new five.Button(4);
  
  const led = new five.Led(11);

    touch.on("press", function() {
      led.on();
    });

    touch.on("release", function() {
      led.off();
    });

});