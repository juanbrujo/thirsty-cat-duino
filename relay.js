var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var relay = new five.Relay(10);

  this.repl.inject({
    relay: relay
  });
  
});