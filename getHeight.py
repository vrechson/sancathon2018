import serial

def getHeight(offset):
    val = 0
    with serial.Serial('/dev/ttyACM0', 9600, timeout=1) as ser:
        ser.write('0')
        s = ser.readline()
        if s :
            val = int(s)
            print (val)

    return (val + offset)/10
