Start_time = 0
End_time = 0
tTotal = 0

def on_forever():
    global Start_time, End_time, tTotal
    if pins.digital_read_pin(DigitalPin.P0) == 1:
        Start_time = input.running_time()
    elif pins.digital_read_pin(DigitalPin.P0) == 0:
        End_time = input.running_time()
    tTotal = End_time - Start_time
basic.forever(on_forever)
