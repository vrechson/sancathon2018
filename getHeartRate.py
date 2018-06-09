import urllib as request
import cv2
import numpy as np
#import matplotlib.pyplot as plt
import time

url='http://172.20.84.78:8080/shot.jpg'

def getBPM (url, numSamples) :

    lastimg = 0
    threshholdValue = 210
    offsetArea = 1000000
    dataValues = []
    lastBiggestValues = 0
    timeTime = 0
    timer = []
    k = 0

    for i in range(0, numSamples) :

        maxValue = 5
        j = 0
        while (maxValue < 50000) :
            imgResp=request.urlopen(url)
            imgNp=np.array(bytearray(imgResp.read()),dtype=np.uint8)
            img=cv2.imdecode(imgNp,-1)
            # img = cv2.imread('shot.jpg')
            #print (img.shape)
            ret, thresh = cv2.threshold(img, threshholdValue, 255, cv2.THRESH_BINARY)
            gray = cv2.cvtColor(thresh, cv2.COLOR_BGR2GRAY)    
            contours, hierarchy = cv2.findContours(gray, 1, 2)

            j = 0
            maxValue = 0
            for l in contours :
                area = cv2.contourArea(l)
                j += 1
                if (area > maxValue) :
                    maxValue = area
        # print (maxValue)
        if i > 10 : 
            if not lastBiggestValues > maxValue :
                lastBiggestValues = maxValue
            # print (maxValue, time.clock())
            dataValues.append(maxValue)

            if (k > 1) :
                # print (len(dataValues))
                if (dataValues[k] > dataValues[k - 1] and dataValues[k - 1] < dataValues[k - 2] ) : # and maxValue < lastBiggestValues*0.5) :
                    tim = time.clock()
                    timer.append(tim - timeTime)
                    timeTime = tim

            if (maxValue < offsetArea) :
                offsetArea = maxValue
            # cv2.imshow('rate', img2)
            lastimg = gray

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

            k+=1

    # cv2.destroyAllWindows()

    dataValues[:] = [i - offsetArea for i in dataValues]
    timer = timer[1:]
    medTime = 0
    j = 0 
    for i in timer :
        medTime+=i
        j+=1
    medTime/=j
    freq = 1/medTime
    freq *= 60

    #plt.plot(dataValues)
    #plt.show()
    #print (freq/4, ' bmp')

    return freq/2

