"use strict";

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {

  var proximity = new five.Proximity({
    controller: "GP2Y0A21YK",
    pin: "A0"
  });

  var relay = new five.Relay(9);

  relay.off();

   proximity.on("data", function () {

    var approach = this.cm;
    var minApproach = 1;
    var maxApproach = 10;

    if (approach >= minApproach && approach <= maxApproach) {
      relay.on();
    } else {
      relay.off();
    }
  });
});
