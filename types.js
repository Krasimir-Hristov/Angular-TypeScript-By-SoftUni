let isDone = true;
let decimals = 5;
let hex = 0xf00D;
let binary = 0b1010;
let octal = 0o744;
let message = '';
let messages = ['Message 1', 'Message 2', 'Message 3', 'Message 4', 'Message5'];
let strictMessage = [1, 2];
let strictMessage1 = ['a', 'b', 'c', 'd', 'e', 'f'];
let strictMessage2 = ['Message 1', 'Message 2', 'Message 3'];
let strictMessage3 = ['Message 1', 1];
let anyType = {};
var Truck;
(function (Truck) {
    Truck["Ford"] = "ford";
    Truck["Tesla"] = "tesla";
})(Truck || (Truck = {}));
