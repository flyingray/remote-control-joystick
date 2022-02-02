def split_msg_value(message: str):
    return convert_to_text(message.split(":")[1])
# using extension from url:
# https://github.com/waveshare/JoyStick

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
    send_message("action" + ":" + "red")
WSJoyStick.on_key(KEY.F, my_function)

def process_send_queue():
    global snd_queue_value
    snd_queue_value = convert_to_text(send_queue.shift())
    if snd_queue_value != "undefined":
        radio.send_string(snd_queue_value)
        serial.write_line("send:" + snd_queue_value)
def draw_out_dot():
    led.plot_brightness(4, 2, 255)
    basic.pause(50)
    for an_element in [2, 1, 0]:
        led.plot_brightness(4, 0, 255)
        basic.pause(50)
    basic.pause(50)
    for an_element2 in [2, 1, 0]:
        led.plot_brightness(4, an_element2, 0)
        basic.pause(50)
def check_joystick():
    if WSJoyStick.Listen_Dir(DIR.U):
        send_move_direction("forward",
            pins.digital_read_pin(DigitalPin.P1),
            pins.digital_read_pin(DigitalPin.P2),
            images.arrow_image(ArrowNames.NORTH))
    elif WSJoyStick.Listen_Dir(DIR.D):
        send_move_direction("back",
            pins.digital_read_pin(DigitalPin.P1),
            pins.digital_read_pin(DigitalPin.P2),
            images.arrow_image(ArrowNames.SOUTH))
    elif WSJoyStick.Listen_Dir(DIR.L):
        send_move_direction("left",
            pins.digital_read_pin(DigitalPin.P1),
            pins.digital_read_pin(DigitalPin.P2),
            images.arrow_image(ArrowNames.WEST))
    elif WSJoyStick.Listen_Dir(DIR.R):
        send_move_direction("right",
            pins.digital_read_pin(DigitalPin.P1),
            pins.digital_read_pin(DigitalPin.P2),
            images.arrow_image(ArrowNames.EAST))
    elif WSJoyStick.Listen_Dir(DIR.U_L):
        send_move_direction("forward_left",
            pins.digital_read_pin(DigitalPin.P1),
            pins.digital_read_pin(DigitalPin.P2),
            images.arrow_image(ArrowNames.NORTH_WEST))
    elif WSJoyStick.Listen_Dir(DIR.D_L):
        send_move_direction("back_left",
            pins.digital_read_pin(DigitalPin.P1),
            pins.digital_read_pin(DigitalPin.P2),
            images.arrow_image(ArrowNames.SOUTH_WEST))
    elif WSJoyStick.Listen_Dir(DIR.U_R):
        send_move_direction("forward_right",
            pins.digital_read_pin(DigitalPin.P1),
            pins.digital_read_pin(DigitalPin.P2),
            images.arrow_image(ArrowNames.NORTH_EAST))
    elif WSJoyStick.Listen_Dir(DIR.D_R):
        send_move_direction("back_right",
            pins.digital_read_pin(DigitalPin.P1),
            pins.digital_read_pin(DigitalPin.P2),
            images.arrow_image(ArrowNames.SOUTH_EAST))
    else:
        basic.show_icon(IconNames.SMALL_DIAMOND)
def send_message(message2: str):
    send_queue.append(message2)
    draw_out_dot()
def send_move_direction(direction: str, xpos: number, ypos: number, image: Image):
    send_message("move" + ":" + direction + "," + ("" + str(xpos)) + "," + ("" + str(ypos)))
    image.show_image(0)

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
    send_message("action" + ":" + "a")
input.on_button_pressed(Button.A, on_button_pressed_a)

def split_msg_name(message4: str):
    return convert_to_text(message4.split(":")[0])
def draw_in_dot():
    led.plot_brightness(4, 0, 255)
    basic.pause(50)
    for an_element3 in [0, 1, 2]:
        value3 = 0
        led.plot_brightness(4, value3, 255)
        basic.pause(50)
    basic.pause(50)
    for an_element4 in [0, 1, 2]:
        led.plot_brightness(4, an_element4, 0)
        basic.pause(50)
def process_recv_queue():
    global recv_queue_value
    recv_queue_value = convert_to_text(recv_queue.shift())
    if recv_queue_value != "undefined":
        serial.write_line("recv:" + ("" + str(radio.received_packet(RadioPacketProperty.SERIAL_NUMBER))) + "," + ("" + str(radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH))) + "," + recv_queue_value)

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
    send_message("action" + ":" + "hat_click")
WSJoyStick.on_key(KEY.P, my_function2)

def show_bright_image(image2: Image):
    image2.show_image(0)
    led.set_brightness(200)
def recv_message(message42: str):
    recv_queue.append(message42)
    draw_in_dot()

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
    send_message("action" + ":" + "green")
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
    send_message("action" + ":" + "blue")
WSJoyStick.on_key(KEY.D, my_function4)

def on_received_string(receivedString):
    recv_message(receivedString)
radio.on_received_string(on_received_string)

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
    send_message("action" + ":" + "b")
input.on_button_pressed(Button.B, on_button_pressed_b)

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
    send_message("action" + ":" + "white")
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
    send_message("action" + ":" + "logo")
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

recv_queue: List[str] = []
recv_queue_value = ""
send_queue: List[str] = []
snd_queue_value = ""
radio.set_transmit_serial_number(True)
radio.set_group(1)
WSJoyStick.joy_stick_init()
basic.show_icon(IconNames.SMALL_DIAMOND)
heartbeat()

def on_forever():
    process_send_queue()
    process_recv_queue()
    check_joystick()
    basic.pause(50)
    heartbeat()
basic.forever(on_forever)
