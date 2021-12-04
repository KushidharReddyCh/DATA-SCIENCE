import cv2 

cap = cv2.VideoCapture(0)

nose_cascade = cv2.CascadeClassifier("./Train/third-party/Nose18x15.xml")
eyes_cascade = cv2.CascadeClassifier("./Train/third-party/frontalEyes35x16.xml")

glasses = cv2.imread("./Train/glasses.png",-1)
mustache = cv2.imread("./Train/mustache.png",-1)

while True:
    ret,frame = cap.read()
    gray_img = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)

    if ret == False:
        continue

    noses = nose_cascade.detectMultiScale(frame,1.3,5)
    eyes  = eyes_cascade.detectMultiScale(frame,1.3,5)
    
    for (x,y_,w,h) in noses:
        mustache = cv2.resize(mustache,(w,h))
        y = y_+30
        for i in range(mustache.shape[0]):
            for j in range(mustache.shape[1]):
                if mustache[i,j,3] > 0:
                    frame[y+i,x+j,:] = mustache[i,j,:-1]
    
    
    for (x,y,w,h) in eyes:
        glasses = cv2.resize(glasses,(w,h))
        for i in range(glasses.shape[0]):
            for j in range(glasses.shape[1]):
                if glasses[i,j,3] > 0:
                    frame[y+i,x+j,:] = glasses[i,j,:-1]
                    
    cv2.imshow("Video Frame",frame)

    # wait for user input -q you will stop the loop
    key_pressed = cv2.waitKey(1) & 0xFF
    if key_pressed == ord('q'):
        break
cap.release()
cv2.destroyAllWindows()


