input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    pick = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    pick = 2
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # . .
        . . . # .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(500)
    Coin = randint(1, 2)
})
let Coin = 0
let pick = 0
pick = 0
game.setLife(3)
game.setScore(0)
basic.forever(function () {
    if (pick > 0) {
        if (Coin == pick) {
            basic.showIcon(IconNames.Yes)
            game.addScore(1)
        } else {
            basic.showIcon(IconNames.No)
            game.removeLife(1)
        }
        basic.pause(1000)
        basic.clearScreen()
        pick = 0
    }
})
