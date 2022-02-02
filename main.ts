function split_msg_value(message: string): string {
    return convertToText(_py.py_string_split(message, ":")[1])
}

WSJoyStick.onKey(KEY.F, function my_function() {
    led.setBrightness(200)
    images.createImage(`
        . . . . .
                . # . . .
                # # # . .
                . # . . .
                . . . . .
    `).showImage(0)
    led.setBrightness(200)
    send_message("action" + ":" + "red")
})
function process_send_queue() {
    
    sndQueueValue = convertToText(sendQueue.shift())
    if (sndQueueValue != "undefined") {
        radio.sendString(sndQueueValue)
        serial.writeLine("send:" + sndQueueValue)
    }
    
}

function draw_out_dot() {
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

function check_joystick() {
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

function send_message(message2: string) {
    sendQueue.push(message2)
    draw_out_dot()
}

function send_move_direction(direction: string, xpos: number, ypos: number, image: Image) {
    send_message("move" + ":" + direction + "," + ("" + xpos) + "," + ("" + ypos))
    image.showImage(0)
}

//  using extension from url:
//  https://github.com/waveshare/JoyStick
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    led.setBrightness(200)
    images.createImage(`
        . . # . .
                . # . # .
                . # # # .
                . # . # .
                . # . # .
    `).showImage(0)
    led.setBrightness(200)
    send_message("action" + ":" + "a")
})
function split_msg_name(message4: string): string {
    return convertToText(_py.py_string_split(message4, ":")[0])
}

function draw_in_dot() {
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

function process_recv_queue() {
    
    recvQueueValue = convertToText(recvQueue.shift())
    if (recvQueueValue != "undefined") {
        serial.writeLine("recv:" + ("" + radio.receivedPacket(RadioPacketProperty.SerialNumber)) + "," + ("" + radio.receivedPacket(RadioPacketProperty.SignalStrength)) + "," + recvQueueValue)
    }
    
}

WSJoyStick.onKey(KEY.P, function my_function2() {
    led.setBrightness(200)
    images.createImage(`
        # # # # #
                # . . . #
                # . # . #
                # . . . #
                # # # # #
    `).showImage(0)
    led.setBrightness(200)
    send_message("action" + ":" + "hat_click")
})
function show_bright_image(image2: Image) {
    image2.showImage(0)
    led.setBrightness(200)
}

function recv_message(message42: string) {
    recvQueue.push(message42)
    draw_in_dot()
}

WSJoyStick.onKey(KEY.E, function my_function3() {
    led.setBrightness(200)
    images.createImage(`
        . . # . .
                . # # # .
                . . # . .
                . . . . .
                . . . . .
    `).showImage(0)
    led.setBrightness(200)
    send_message("action" + ":" + "green")
})
WSJoyStick.onKey(KEY.D, function my_function4() {
    led.setBrightness(200)
    images.createImage(`
        . . . . .
                . . . # .
                . . # # #
                . . . # .
                . . . . .
    `).showImage(0)
    led.setBrightness(200)
    send_message("action" + ":" + "blue")
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    recv_message(receivedString)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    led.setBrightness(200)
    images.createImage(`
        . # # . .
                . # . # .
                . # # . .
                . # . # .
                . # # . .
    `).showImage(0)
    led.setBrightness(200)
    send_message("action" + ":" + "b")
})
WSJoyStick.onKey(KEY.C, function my_function5() {
    led.setBrightness(200)
    images.createImage(`
        . . . . .
                . . . . .
                . . # . .
                . # # # .
                . . # . .
    `).showImage(0)
    led.setBrightness(200)
    send_message("action" + ":" + "white")
})
function heartbeat() {
    led.setBrightness(200)
    basic.pause(50)
    led.setBrightness(100)
}

input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    led.setBrightness(200)
    images.createImage(`
        . . . . .
                . # # # .
                # . . . #
                . # # # .
                . . . . .
    `).showImage(0)
    led.setBrightness(200)
    send_message("action" + ":" + "logo")
})
let recvQueue : string[] = []
let recvQueueValue = ""
let sendQueue : string[] = []
let sndQueueValue = ""
radio.setTransmitSerialNumber(true)
radio.setGroup(1)
WSJoyStick.JoyStickInit()
basic.showIcon(IconNames.SmallDiamond)
heartbeat()
basic.forever(function on_forever() {
    process_send_queue()
    process_recv_queue()
    check_joystick()
    basic.pause(50)
    heartbeat()
})
