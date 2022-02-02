// using extension from url:
// https://github.com/waveshare/JoyStick
WSJoyStick.onKey(KEY.F, function () {
    show_bright_image(images.createImage(`
        . . . . .
        . # . . .
        # # # . .
        . # . . .
        . . . . .
        `))
    send_message("action" + ":" + "red")
})
function process_send_queue () {
    snd_queue_value = convertToText(send_queue.shift())
    if (snd_queue_value != "undefined") {
        radio.sendString(snd_queue_value)
        serial.writeLine("send:" + snd_queue_value)
    }
}
function draw_out_dot () {
    led.plotBrightness(4, 2, 255)
    basic.pause(50)
    for (let an_element of [2, 1, 0]) {
        led.plotBrightness(4, 0, 255)
        basic.pause(50)
    }
    basic.pause(50)
    for (let an_element2 of [2, 1, 0]) {
        led.plotBrightness(4, an_element2, 0)
        basic.pause(50)
    }
}
function check_joystick () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        send_move_direction("forward", pins.digitalReadPin(DigitalPin.P1), pins.digitalReadPin(DigitalPin.P2), images.arrowImage(ArrowNames.North))
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        send_move_direction("back", pins.digitalReadPin(DigitalPin.P1), pins.digitalReadPin(DigitalPin.P2), images.arrowImage(ArrowNames.South))
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        send_move_direction("left", pins.digitalReadPin(DigitalPin.P1), pins.digitalReadPin(DigitalPin.P2), images.arrowImage(ArrowNames.West))
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        send_move_direction("right", pins.digitalReadPin(DigitalPin.P1), pins.digitalReadPin(DigitalPin.P2), images.arrowImage(ArrowNames.East))
    } else if (WSJoyStick.Listen_Dir(DIR.U_L)) {
        send_move_direction("forward_left", pins.digitalReadPin(DigitalPin.P1), pins.digitalReadPin(DigitalPin.P2), images.arrowImage(ArrowNames.NorthWest))
    } else if (WSJoyStick.Listen_Dir(DIR.D_L)) {
        send_move_direction("back_left", pins.digitalReadPin(DigitalPin.P1), pins.digitalReadPin(DigitalPin.P2), images.arrowImage(ArrowNames.SouthWest))
    } else if (WSJoyStick.Listen_Dir(DIR.U_R)) {
        send_move_direction("forward_right", pins.digitalReadPin(DigitalPin.P1), pins.digitalReadPin(DigitalPin.P2), images.arrowImage(ArrowNames.NorthEast))
    } else if (WSJoyStick.Listen_Dir(DIR.D_R)) {
        send_move_direction("back_right", pins.digitalReadPin(DigitalPin.P1), pins.digitalReadPin(DigitalPin.P2), images.arrowImage(ArrowNames.SouthEast))
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
}
function send_message (message2: string) {
    send_queue.push(message2)
    draw_out_dot()
}
function send_move_direction (direction: string, xpos: number, ypos: number, image: Image) {
    send_message("move" + ":" + direction + "," + ("" + xpos) + "," + ("" + ypos))
    image.showImage(0)
}
input.onButtonPressed(Button.A, function () {
    show_bright_image(images.createImage(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `))
    send_message("action" + ":" + "a")
})
function draw_in_dot () {
    let value3: number;
led.plotBrightness(4, 0, 255)
    basic.pause(50)
    for (let an_element3 of [0, 1, 2]) {
        value3 = 0
        led.plotBrightness(4, value3, 255)
        basic.pause(50)
    }
    basic.pause(50)
    for (let an_element4 of [0, 1, 2]) {
        led.plotBrightness(4, an_element4, 0)
        basic.pause(50)
    }
}
function process_recv_queue () {
    recv_queue_value = convertToText(recv_queue.shift())
    if (recv_queue_value != "undefined") {
        serial.writeLine("recv:" + ("" + radio.receivedPacket(RadioPacketProperty.SerialNumber)) + "," + ("" + radio.receivedPacket(RadioPacketProperty.SignalStrength)) + "," + recv_queue_value)
    }
}
WSJoyStick.onKey(KEY.P, function () {
    show_bright_image(images.createImage(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `))
    send_message("action" + ":" + "hat_click")
})
function show_bright_image (image2: Image) {
    image2.showImage(0)
    led.setBrightness(200)
}
function recv_message (message42: string) {
    recv_queue.push(message42)
    draw_in_dot()
}
WSJoyStick.onKey(KEY.E, function () {
    show_bright_image(images.createImage(`
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        `))
    send_message("action" + ":" + "green")
})
WSJoyStick.onKey(KEY.D, function () {
    show_bright_image(images.createImage(`
        . . . . .
        . . . # .
        . . # # #
        . . . # .
        . . . . .
        `))
    send_message("action" + ":" + "blue")
})
radio.onReceivedString(function (receivedString) {
    recv_message(receivedString)
})
input.onButtonPressed(Button.B, function () {
    show_bright_image(images.createImage(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `))
    send_message("action" + ":" + "b")
})
WSJoyStick.onKey(KEY.C, function () {
    show_bright_image(images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        `))
    send_message("action" + ":" + "white")
})
function heartbeat () {
    led.setBrightness(200)
    basic.pause(50)
    led.setBrightness(100)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    show_bright_image(images.createImage(`
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        . . . . .
        `))
    send_message("action" + ":" + "logo")
})
let recv_queue: string[] = []
let recv_queue_value = ""
let send_queue: string[] = []
let snd_queue_value = ""
radio.setTransmitSerialNumber(true)
radio.setGroup(1)
WSJoyStick.JoyStickInit()
basic.showIcon(IconNames.SmallDiamond)
heartbeat()
basic.forever(function () {
    process_send_queue()
    process_recv_queue()
    check_joystick()
    basic.pause(50)
    heartbeat()
})
