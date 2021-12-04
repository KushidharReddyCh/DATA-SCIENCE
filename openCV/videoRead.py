#Read a videp stream from Camera(Frame by Frame)
import cv2
cap = cv2.VideoCapture(0)

while True:
    ret_bool,frame = cap.read()
    grey_frame = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
    f3 = cv2.cvtColor(frame,cv2.COLOR_BGR2HLS_FULL)
    if ret_bool == False:
        continue
    cv2.imshow("Video Frame",frame)
    cv2.imshow("Gray Frame",grey_frame)
    cv2.imshow("F3",f3)
    # wait for user input -q you will stop the loop
    key_pressed = cv2.waitKey(1) & 0xFF
    if key_pressed == ord('q'):
        break
cap.release()
cv2.destroyAllWindows()