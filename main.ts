function split_msg_value (message: string) {
    return convertToText(_py.py_string_split(message, ":")[1])
}
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
function process_send_queue () {
    sndQueueValue = convertToText(sendQueue.shift())
    if (sndQueueValue != "undefined") {
        if (split_msg_name(sndQueueValue) == "id") {
            radio.sendString(sndQueueValue)
            show_message_value(sndQueueValue, 100)
        }
    }
}
function draw_out_dot () {
    led.plotBrightness(4, 2, 255)
    basic.pause(50)
    for (let value of [2, 1, 0]) {
        led.plotBrightness(4, value, 255)
        basic.pause(50)
    }
    basic.pause(50)
    for (let value2 of [2, 1, 0]) {
        led.plotBrightness(4, value2, 0)
        basic.pause(50)
    }
}
function send_message (message2: string) {
    sendQueue.push(message2)
    draw_out_dot()
}
function show_message_value (message3: string, brightness: number) {
	
}
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
    sndValue = "id" + ":" + lastDeviceChar
    send_message(sndValue)
})
function split_msg_name (message4: string) {
    return convertToText(_py.py_string_split(message4, ":")[0])
}
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
function draw_in_dot () {
    led.plotBrightness(4, 0, 255)
    basic.pause(50)
    for (let value3 of [0, 1, 2]) {
        led.plotBrightness(4, value3, 255)
        basic.pause(50)
    }
    basic.pause(50)
    for (let value4 of [0, 1, 2]) {
        led.plotBrightness(4, value4, 0)
        basic.pause(50)
    }
}
function process_recv_queue () {
    recvQueueValue = convertToText(recvQueue.shift())
    if (split_msg_name(recvQueueValue) == "id") {
        if (split_msg_value(recvQueueValue) != lastDeviceChar) {
            show_message_value(recvQueueValue, 200)
        }
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
function recv_message (message42: string) {
    recvQueue.push(message42)
    draw_in_dot()
}
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
radio.onReceivedString(function (receivedString) {
    recv_message(receivedString)
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
    image.showImage(0)
    led.setBrightness(200)
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
let recvQueue: string[] = []
let recvQueueValue = ""
let sndValue = ""
let sendQueue: string[] = []
let sndQueueValue = ""
let lastDeviceChar = ""
lastDeviceChar = convertToText(control.deviceSerialNumber()).substr(-1, 1)
radio.setTransmitSerialNumber(true)
radio.setGroup(1)
WSJoyStick.JoyStickInit()
basic.showIcon(IconNames.SmallDiamond)
heartbeat()
basic.forever(function () {
    process_send_queue()
    process_recv_queue()
    checkJS()
    basic.pause(50)
    heartbeat()
})
