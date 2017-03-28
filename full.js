"use strict";

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {

  var proximity = new five.Proximity({
    controller: "GP2Y0A21YK",
    pin: "A0"
  });

  var led = new five.Led(13);
  var relay = new five.Relay(9);

  relay.off();

  proximity.on("data", function () {

    var approach = this.cm;
    var minApproach = 5;
    var maxApproach = 50;

    if (approach >= minApproach && approach <= maxApproach) {
      relay.on();
      led.on();
    } else {
      relay.off();
      led.off();
    }
  });
});
