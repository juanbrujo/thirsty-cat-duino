# Thirsty Cat Duino

*Arduino-controlled water-supply for my 🐈*

This project gives fresh water to my cat when he get's closer to the fountain.

*What you'll achieve:*

![](https://i.imgur.com/AjLpfMs.jpg)

## Ingredients:

- Small water fountain, [like any of this](https://www.walmart.com/c/ep/small-water-fountains).
- Arduino Uno
- Relay
- Proximity sensor
- Raspberry PI (not needed if you code in C++ right to the Arduino but this project is in NodeJS).

## Steps:

- Connect the relay and proximity sensor to the Arduino and the Arduino to the Raspberry PI.
- Connect the fountain's power cable to the relay and make it sure to aislate this relay, the power will be passing through this thing. 
- Install [NodeJS](http://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/) to the Raspberry PI and clone this repo; install packages and run `node full.js`.
- Try to put everythink inside a plastic box so the water don't damage the components.
- Remember to point the proximity sensor to the fountain so the when the cat comes close the water starts to flow.

That's it.

![](https://i.imgur.com/7ZHGgJE.jpg)
![](https://i.imgur.com/uiTHMCY.jpg)
![](https://i.imgur.com/leSbqQl.jpg)
![](https://i.imgur.com/oxhi1Cg.jpg)
