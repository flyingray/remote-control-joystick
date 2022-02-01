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
input.on_button_pressed(Button.A, on_button_pressed_a)

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
        . . # . .
                . # # # .
                . . # . .
                . . . . .
                . . . . .
    """).show_image(0)
    led.set_brightness(200)
WSJoyStick.on_key(KEY.E, my_function2)

def my_function3():
    led.set_brightness(200)
    images.create_image("""
        . . . . .
                . . . # .
                . . # # #
                . . . # .
                . . . . .
    """).show_image(0)
    led.set_brightness(200)
WSJoyStick.on_key(KEY.D, my_function3)

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

def activityBright(image: Image):
    led.set_brightness(200)
    image.show_image(0, 400)

def my_function4():
    led.set_brightness(200)
    images.create_image("""
        . . . . .
                . . . . .
                . . # . .
                . # # # .
                . . # . .
    """).show_image(0)
    led.set_brightness(200)
WSJoyStick.on_key(KEY.C, my_function4)

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

WSJoyStick.joy_stick_init()
basic.show_icon(IconNames.SMALL_DIAMOND)
heartbeat()

def on_forever():
    checkJS()
    basic.pause(50)
    heartbeat()
basic.forever(on_forever)
