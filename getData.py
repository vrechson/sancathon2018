import getHeight
import getHeartRate

heartURL = 'http://172.20.84.78:8080/shot.jpg'
frontCameraURL = []
offset = 0

def getData():

    data = {'bpm':'NaN', 'motor':1, 'irpm':15}

    data['bpm'] = getHeartRate.getBPM(heartURL, 20)
    data['altura'] = getHeight.getHeight(offset)
    
    avalData = [1,1,1]
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
    if (avalData[0] == 5 or avalData[1] == 5 or avalData[2] == 5 ) :
        soma = 15
    else : 
        for i in avalData :
            soma += i
    completeData = [data, soma/3]
    return completeData

data = getData()
print(data)
