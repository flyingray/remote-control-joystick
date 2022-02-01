# using extension from url:
# https://github.com/waveshare/JoyStick


def on_button_pressed_a():
    led.set_brightness(200)
    images.create_image("""
        . . # . .
                . # . # .
                . # # # .
                . # . # .
                . # . # .
    """).show_image(0)
    led.set_brightness(200)
    global sndValue
    sndValue = "id" + ":" + lastDeviceChar
    send_message(sndValue)


input.on_button_pressed(Button.A, on_button_pressed_a)


def on_button_pressed_b():
    led.set_brightness(200)
    images.create_image("""
        . # # . .
                . # . # .
                . # # . .
                . # . # .
                . # # . .
    """).show_image(0)
    led.set_brightness(200)


input.on_button_pressed(Button.B, on_button_pressed_b)


def my_function():
    led.set_brightness(200)
    images.create_image("""
        . . . . .
                . # . . .
                # # # . .
                . # . . .
                . . . . .
    """).show_image(0)
    led.set_brightness(200)


WSJoyStick.on_key(KEY.F, my_function)


def checkJS():
    if WSJoyStick.Listen_Dir(DIR.U):
        activityBright(images.arrow_image(ArrowNames.NORTH))
    elif WSJoyStick.Listen_Dir(DIR.D):
        activityBright(images.arrow_image(ArrowNames.SOUTH))
    elif WSJoyStick.Listen_Dir(DIR.L):
        activityBright(images.arrow_image(ArrowNames.WEST))
    elif WSJoyStick.Listen_Dir(DIR.R):
        activityBright(images.arrow_image(ArrowNames.EAST))
    elif WSJoyStick.Listen_Dir(DIR.U_L):
        activityBright(images.arrow_image(ArrowNames.NORTH_WEST))
    elif WSJoyStick.Listen_Dir(DIR.D_L):
        activityBright(images.arrow_image(ArrowNames.SOUTH_WEST))
    elif WSJoyStick.Listen_Dir(DIR.U_R):
        activityBright(images.arrow_image(ArrowNames.NORTH_EAST))
    elif WSJoyStick.Listen_Dir(DIR.D_R):
        activityBright(images.arrow_image(ArrowNames.SOUTH_EAST))
    else:
        basic.show_icon(IconNames.SMALL_DIAMOND)


def my_function2():
    led.set_brightness(200)
    images.create_image("""
        # # # # #
                # . . . #
                # . # . #
                # . . . #
                # # # # #
    """).show_image(0)
    led.set_brightness(200)


WSJoyStick.on_key(KEY.P, my_function2)


def my_function3():
    led.set_brightness(200)
    images.create_image("""
        . . # . .
                . # # # .
                . . # . .
                . . . . .
                . . . . .
    """).show_image(0)
    led.set_brightness(200)


WSJoyStick.on_key(KEY.E, my_function3)


def my_function4():
    led.set_brightness(200)
    images.create_image("""
        . . . . .
                . . . # .
                . . # # #
                . . . # .
                . . . . .
    """).show_image(0)
    led.set_brightness(200)


WSJoyStick.on_key(KEY.D, my_function4)


def activityBright(image: Image):
    led.set_brightness(200)
    image.show_image(0, 400)


def my_function5():
    led.set_brightness(200)
    images.create_image("""
        . . . . .
                . . . . .
                . . # . .
                . # # # .
                . . # . .
    """).show_image(0)
    led.set_brightness(200)


WSJoyStick.on_key(KEY.C, my_function5)


def heartbeat():
    led.set_brightness(200)
    basic.pause(50)
    led.set_brightness(100)


def on_logo_pressed():
    led.set_brightness(200)
    images.create_image("""
        . . . . .
                . # # # .
                # . . . #
                . # # # .
                . . . . .
    """).show_image(0)
    led.set_brightness(200)


input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)


def split_msg_value(message: str):
    return convert_to_text(message.split(":")[1])


def process_send_queue():
    global sndQueueValue
    sndQueueValue = convert_to_text(sendQueue.shift())
    if sndQueueValue != "undefined":
        if split_msg_name(sndQueueValue) == "id":
            radio.send_string(sndQueueValue)
            show_message_value(sndQueueValue, 100)


def draw_out_dot():
    led.plot_brightness(4, 2, 255)
    basic.pause(50)
    for value in [2, 1, 0]:
        led.plot_brightness(4, value, 255)
        basic.pause(50)
    basic.pause(50)
    for value2 in [2, 1, 0]:
        led.plot_brightness(4, value2, 0)
        basic.pause(50)


def send_message(message2: str):
    sendQueue.append(message2)
    draw_out_dot()


def show_message_value(message3: str, brightness: number):
    led.set_brightness(brightness)
    basic.show_string("" + (split_msg_value(message3)))


def split_msg_name(message4: str):
    return convert_to_text(message4.split(":")[0])


def draw_in_dot():
    led.plot_brightness(4, 0, 255)
    basic.pause(50)
    for value3 in [0, 1, 2]:
        led.plot_brightness(4, value3, 255)
        basic.pause(50)
    basic.pause(50)
    for value4 in [0, 1, 2]:
        led.plot_brightness(4, value4, 0)
        basic.pause(50)


def process_recv_queue():
    global recvQueueValue
    recvQueueValue = convert_to_text(recvQueue.shift())
    if split_msg_name(recvQueueValue) == "id":
        if split_msg_value(recvQueueValue) != lastDeviceChar:
            show_message_value(recvQueueValue, 200)


def recv_message(message42: str):
    recvQueue.append(message42)
    draw_in_dot()


def on_received_string(receivedString):
    recv_message(receivedString)


radio.on_received_string(on_received_string)

recvQueueValue = ""
sndValue = ""
sndQueueValue = ""
sendQueue: List[str] = []
recvQueue: List[str] = []
lastDeviceChar = convert_to_text(control.device_serial_number()).substr(-1, 1)
radio.set_transmit_serial_number(True)
radio.set_group(1)
basic.show_icon(IconNames.SMALL_SQUARE)

WSJoyStick.joy_stick_init()
basic.show_icon(IconNames.SMALL_DIAMOND)
heartbeat()


def on_forever():
    process_send_queue()
    process_recv_queue()
    checkJS()
    basic.pause(50)
    heartbeat()


basic.forever(on_forever)
