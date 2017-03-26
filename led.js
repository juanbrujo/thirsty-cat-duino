const five = require("johnny-five");
const board = new five.Board();
board.on("ready", () => {
  
  const ledOne = new five.Led(13);
  ledOne.blink(500);
   
});