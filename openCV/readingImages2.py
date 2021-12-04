import cv2
img = cv2.imread("Photo-2.jpeg")
gray = cv2.imread('Photo-2.jpeg',cv2.IMREAD_GRAYSCALE)
cv2.imshow('Kushidhar',gray)
cv2.waitKey(2500) # program will stop when any key is pressed
cv2.destroyAllWindows()