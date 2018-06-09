import getHeight
import getHeartRate
from firebase import firebase
import time

firebase = firebase.FirebaseApplication('https://calisto-17e20.firebaseio.com/', None)

heartURL = 'http://172.20.84.78:8080/shot.jpg'
frontCameraURL = []
offset = 0

def getData():

    data = {'bpm':'NaN', 'motor':1, 'irpm':15}

    time.sleep(5)
    data['bpm'] = getHeartRate.getBPM(heartURL, 20)
    
    time.sleep(5)
    data['altura'] = getHeight.getHeight(offset)
    
    avalData = [1, 1, 1]
    if (data['bpm'] > 140 or data['bpm'] < 60) :
        avalData[0] = 5
    else :
        avalData[0] = (data['bpm'] - 60) * 5 / (140 - 60)
    if (data['irpm'] > 35 or data['irpm'] < 10) :
        avalData[1] = 5
    else :
        avalData[1] = (data['irpm'] - 10) * 5 / (35 - 10)
    avalData[2] = data['motor']

    soma = 0
    for i in avalData :
        soma += i
    completeData = [data, soma/3]
    return completeData

while True :
    result = firebase.get('Pedidos', None)
    if result is not None :
        for i in result :
            data = getData()
            print (data[0])
            val = i
            data[0]['aval'] = data[1]
            motor = data[0]['motor']
            proc = {'processed' : 0}
            result = firebase.post('Respostas/'+str(val['id']), data[0])
            firebase.delete('Pedidos', '0')
            print (result)
    
#data = getData()
#print(data)
