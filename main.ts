WSJoyStick.onKey(KEY.F, function () {
    led.setBrightness(200)
    images.createImage(`
        . . . . .
        . # . . .
        # # # . .
        . # . . .
        . . . . .
        `).showImage(0)
    led.setBrightness(200)
})
// using extension from url:
// https://github.com/waveshare/JoyStick
input.onButtonPressed(Button.A, function () {
    led.setBrightness(200)
    images.createImage(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `).showImage(0)
    led.setBrightness(200)
})
function checkJS () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        activityBright(images.arrowImage(ArrowNames.North))
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        activityBright(images.arrowImage(ArrowNames.South))
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        activityBright(images.arrowImage(ArrowNames.West))
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        activityBright(images.arrowImage(ArrowNames.East))
    } else if (WSJoyStick.Listen_Dir(DIR.U_L)) {
        activityBright(images.arrowImage(ArrowNames.NorthWest))
    } else if (WSJoyStick.Listen_Dir(DIR.D_L)) {
        activityBright(images.arrowImage(ArrowNames.SouthWest))
    } else if (WSJoyStick.Listen_Dir(DIR.U_R)) {
        activityBright(images.arrowImage(ArrowNames.NorthEast))
    } else if (WSJoyStick.Listen_Dir(DIR.D_R)) {
        activityBright(images.arrowImage(ArrowNames.SouthEast))
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
}
WSJoyStick.onKey(KEY.P, function () {
    led.setBrightness(200)
    images.createImage(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `).showImage(0)
    led.setBrightness(200)
})
WSJoyStick.onKey(KEY.E, function () {
    led.setBrightness(200)
    images.createImage(`
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        `).showImage(0)
    led.setBrightness(200)
})
WSJoyStick.onKey(KEY.D, function () {
    led.setBrightness(200)
    images.createImage(`
        . . . . .
        . . . # .
        . . # # #
        . . . # .
        . . . . .
        `).showImage(0)
    led.setBrightness(200)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(200)
    images.createImage(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `).showImage(0)
    led.setBrightness(200)
})
function activityBright (image: Image) {
    led.setBrightness(200)
    image.showImage(0, 400)
}
WSJoyStick.onKey(KEY.C, function () {
    led.setBrightness(200)
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        `).showImage(0)
    led.setBrightness(200)
})
function heartbeat () {
    led.setBrightness(200)
    basic.pause(50)
    led.setBrightness(100)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    led.setBrightness(200)
    images.createImage(`
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        . . . . .
        `).showImage(0)
    led.setBrightness(200)
})
WSJoyStick.JoyStickInit()
basic.showIcon(IconNames.SmallDiamond)
heartbeat()
basic.forever(function () {
    checkJS()
    basic.pause(50)
    heartbeat()
})
