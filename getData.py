import getHeight
import getHeartRate
from firebase import firebase
import time

firebase = firebase.FirebaseApplication('https://calisto-17e20.firebaseio.com/', None)

heartURL = 'http://172.20.84.78:8080/shot.jpg'
frontCameraURL = []
offset = 0

def getData(label):

    if (label == 'bpm') :
        return getHeartRate.getBPM(heartURL, 20)
    elif (label == 'motor') :
        return 1
    elif (label == 'irpm') :
        return 15
    elif (label == 'altura') :
        return getHeight.getHeight(offset)
    elif (label == 'priority'):
        return 0
    elif (label == 'peso'):
        return 70
    
    # if (data['bpm'] > 140 or data['bpm'] < 60) :
        # avalData[0] = 5
    # else :
        # avalData[0] = (data['bpm'] - 60) * 5 / (140 - 60)
    # if (data['irpm'] > 35 or data['irpm'] < 10) :
        # avalData[1] = 5
    # else :
        # avalData[1] = (data['irpm'] - 10) * 5 / (35 - 10)
    # avalData[2] = data['motor']

    # soma = 0
    # for i in avalData :
        # soma += i
    # completeData = [data, soma/3]
    # return completeData

ambu = {
    'alergia' : [
        'asma',
        'rinite',
        'alergia',
        'irritacao de pele'
    ],
    'problema de audicao' : [
        'problema de audicao'
    ],
    'queimados' : [
        'queimadura'
    ], 
    'hematologia' : [
        'leucemia',
        'cancer'
    ],
    'cefaleia' : [
        'enxaqueca',
        'dor de cabeca',
        'confusao',
        'convulsoes'
    ],
    'dermatologista' : [
        'hanseniase',
        'micose',
        'manchas na pele',
        'coceira',
        'sudorese'
    ],
    'gastro' : [
        'vomito',
        'desidratacao',
        'intoxicacao',
        'nausea'
    ],
    'narcoticos' : [
        'uso de drogas',
        'intoxicacao',
        'perda de conciencia',
        'convulsoes'
    ]

}

def sep (tags) :

    peso = {'alergia' : 0, 'problema de audicao' : 0, 'queimados' : 0, 'hematologia' : 0, 'cefaleia' : 0, 'dermatologista' : 0, 'gastro' : 0, 'narcoticos' : 0}
    realtags = tags[5:]
    for i in realtags:
        for (k, v) in ambu.items() :
            for j in v :
                if j in tags :
                    peso[k]+=1

    key = ''
    value = 0
    for k, v in peso.items() :
        if v > value :
            key = k
            value = v
    
    if value is 0 :
        return 'geral'
    return key

while True :
    result = firebase.get('Pedidos', None)
    print (result)
    if result is not None :
        for i in result:
            data = { i['label'] : getData(i['label']) }
            result = firebase.post('Respostas/', data)
            firebase.delete('Pedidos', '0')
            print (result)
    resultMisc = firebase.get('')


