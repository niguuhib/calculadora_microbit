let _1 = 0
let _2 = 0
let OP = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (_1))
    basic.pause(500)
    if (OP == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (OP == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else if (OP == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else {
    	
    }
    basic.pause(500)
    basic.showString("" + (_2))
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    if (OP == 1) {
        basic.showString("" + (_1 + _2))
    }
    if (OP == 2) {
        basic.showString("" + (_1 - _2))
    }
    if (OP == 3) {
        basic.showString("" + (_1 * _2))
    }
    if (OP == 4) {
        basic.showString("" + (_1 / _2))
    }
})
input.onButtonPressed(Button.A, function () {
    _1 += 1
    basic.pause(100)
    basic.showString("" + (_1))
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.No)
    basic.pause(500)
    _1 = 0
    _2 = 0
    OP = 0
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    OP += 1
    if (OP == 5) {
        OP = 1
    }
    if (OP == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
    if (OP == 2) {
        basic.showLeds(`
            . . . . .
            # . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    }
    if (OP == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
    if (OP == 4) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    _2 += 1
    basic.pause(100)
    basic.showString("" + (_2))
})
