let screensaver = 0
input.onButtonPressed(Button.A, function () {
    screensaver = 1
    while (screensaver == 1) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, 0)
            led.plot(0, 4 - x)
            led.plot(4 - x, 4)
            led.plot(4, x)
            basic.pause(50)
            led.unplot(x, 0)
            led.unplot(4 - x, 4)
            led.unplot(0, 4 - x)
            led.unplot(4, x)
            basic.pause(50)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    screensaver = 0
    basic.showString("screen on")
})

// this screensaver makes points that bounce from one wall to the next 
