import getHeight
import getHeartRate

heartURL = 'http://172.20.84.78:8080/shot.jpg'
frontCameraURL = []
offset = 0

def getData():

    data = {'bpm':'NaN', 'motor':5, 'irpm':15}

    data['bpm'] = getHeartRate.getBPM(heartURL, 20)
    data['altura'] = getHeight.getHeight(offset)
    
    completeData = []
    
    return data

data = getData()
print(data['bpm'])
