let Start_time = 0
let End_time = 0
let tTotal = 0
function buttonTime () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        Start_time = input.runningTime()
    } else if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        End_time = input.runningTime()
    }
    tTotal = End_time - Start_time
}
basic.forever(function () {
	
})
