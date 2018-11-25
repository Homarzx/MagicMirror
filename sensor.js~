var five = require("johnny-five")
var board = new five.Board()
let contador = 0;
const shell = require('python-shell').PythonShell
let tomando = false
let cantidad_fotos = 0

board.on("ready", function () {
	let led = new five.Led(11)
	var proximity = new five.Proximity({
		controller: "HCSR04",
		pin: 7
	})
	let self = this
	proximity.on("change",function () {
		if (this.cm < 30) {
			contador++
		} else {
			contador=0
			
		}
		if (contador === 3 && !tomando) {
			led.pulse()
			self.wait(3000, function () {
				led.stop().off()
			})
			tomando = true
			shell.run('camera.py', null, takePhoto)
			console.log("foto")
			tomando = false
		}
	})
})

function takePhoto (err) {
	if (err) {
		console.log("error al tomar fotos continuas????. No se todavia como solucionarlo")
	}
	cantidad_fotos++
	console.log('============= foto tomada')
}
