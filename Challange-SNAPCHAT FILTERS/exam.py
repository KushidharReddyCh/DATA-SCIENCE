import cv2
import pandas as pd

# input = cv2.imread("./Train/Jamie_Before.jpg")
input = cv2.imread("./Test/Before.png")
glasses = cv2.imread("./Train/glasses.png",-1)
mustache = cv2.imread("./Train/mustache.png",-1)


nose_cascade = cv2.CascadeClassifier("./Train/third-party/Nose18x15.xml")
eyes_cascade = cv2.CascadeClassifier("./Train/third-party/frontalEyes35x16.xml")

noses = nose_cascade.detectMultiScale(input,1.3,5)
eyes  = eyes_cascade.detectMultiScale(input,1.3,5)


for (x,yi,w,h) in noses:
    mustache = cv2.resize(mustache,(w,h))
    y = yi+30
    for i in range(mustache.shape[0]):
        for j in range(mustache.shape[1]):
            if mustache[i,j,3] > 0:
                input[y+i,x+j,:] = mustache[i,j,:-1]

for (x,y,w,h) in eyes:
    glasses = cv2.resize(glasses,(w,h))
    for i in range(glasses.shape[0]):
        for j in range(glasses.shape[1]):
            if glasses[i,j,3] > 0:
                input[y+i,x+j,:] = glasses[i,j,:-1]
                
cv2.imshow("Video Frame",input)
cv2.waitKey(0)
cv2.destroyAllWindows()


print(input.shape)

Person_x = input.reshape((-1,3))
df = pd.DataFrame(Person_x, columns=["Channel 1","Channel 2", "Channel 3"])
df.to_csv("pred1.csv", index=False)