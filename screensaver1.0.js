input.onGesture(Gesture.TiltLeft, function () {
    screensaver = 1
    while (screensaver == 1) {
        for (let outer2 = 0; outer2 <= 4; outer2++) {
            reverse = 4 - outer2
            for (let inner2 = 0; inner2 <= 4; inner2++) {
                led.plot(outer2, reverse)
                basic.pause(speed)
                led.plot(reverse, outer2)
                basic.pause(speed)
                led.plot(reverse - inner2, reverse)
                basic.pause(speed)
                led.plot(reverse, reverse - inner2)
                basic.pause(speed)
            }
        }
        for (let outer3 = 0; outer3 <= 4; outer3++) {
            reverse = 4 - outer3
            for (let inner3 = 0; inner3 <= 4; inner3++) {
                led.unplot(outer3, reverse)
                basic.pause(speed)
                led.unplot(reverse, outer3)
                basic.pause(speed)
                led.unplot(reverse - inner3, reverse)
                basic.pause(speed)
                led.unplot(reverse, reverse - inner3)
                basic.pause(speed)
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    screensaver = 0
})
let reverse = 0
let screensaver = 0
let speed = 0
let inner = 0
let outer = 0
speed = 10
