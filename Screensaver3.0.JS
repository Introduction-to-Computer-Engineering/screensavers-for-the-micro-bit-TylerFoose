input.onButtonPressed(Button.B, function () {
    basic.showString("not a plane")
})
input.onButtonPressed(Button.A, function () {
    rotating3 = 1
    while (rotating3 = 1) {
        serial.writeLine("loop")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
})
let rotating3 = 0
let rotating = false
let rotating2 = 0
