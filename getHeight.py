import pyserial as serial

conexao = serial.Serial('/dev/tty96B0', 9600)

print(conexao.read())