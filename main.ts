basic.clearScreen()
pins.analogWritePin(AnalogPin.P1, 0)
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P10) > 0 && pins.analogReadPin(AnalogReadWritePin.P10) < 205) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (pins.analogReadPin(AnalogReadWritePin.P10) > 204 && pins.analogReadPin(AnalogReadWritePin.P10) < 410) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            `)
    }
    if (pins.analogReadPin(AnalogReadWritePin.P10) > 409 && pins.analogReadPin(AnalogReadWritePin.P10) < 615) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (pins.analogReadPin(AnalogReadWritePin.P10) > 614 && pins.analogReadPin(AnalogReadWritePin.P10) < 820) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    }
    if (pins.analogReadPin(AnalogReadWritePin.P10) > 819 && pins.analogReadPin(AnalogReadWritePin.P10) < 1025) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    }
})
