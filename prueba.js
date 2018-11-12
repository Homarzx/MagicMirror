var five = require("johnny-five")
var board = new five.Board()
let contador = 0;

board.on("ready", function () {
	var proximity = new five.Proximity({
		controller: "HCSR04",
		pin: 7
	})

	proximity.on("change",function () {
		if (this.cm > 10) {
			contador++
		} else {
			contador=0
		}
		if (contador === 3) {
			console.log("foto")
		}
	})
})