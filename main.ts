let ServAngle = 0
/**
 * Clock
 */
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 0)
    ServAngle = 6
    pins.servoWritePin(AnalogPin.P0, ServAngle)
    for (let index = 0; index <= index + 1; index++) {
        basic.pause(1000)
        ServAngle += 6
        pins.servoWritePin(AnalogPin.P0, ServAngle)
    }
    basic.pause(1000)
})
