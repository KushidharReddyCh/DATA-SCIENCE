#!/usr/bin/env python
# coding: utf-8

# In[93]:


# Data Preparation
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd


# ## Load and visualise the data
# - Download
# - Load
# - Visualize
# - Normalization
# 
# 

# In[94]:


X = pd.read_csv("./Training Data/Linear_X_Train.csv")
y = pd.read_csv("./Training Data/Linear_Y_Train.csv")
X = X.values
y = y.values

mean = X.mean()
std  = X.std()
X = (X-mean)/std


# In[95]:


plt.style.use("seaborn")
plt.scatter(X,y,color='green')
plt.title('HardWork vs Performance Graph')
plt.xlabel("HardWork")
plt.ylabel("Performance")
plt.show()


# In[96]:


# X.shape,y.shape
type(X)


# # Linear Regression
# 

# In[97]:


def hypothesis(x,theta):
    # theta = [theta0,theta1]
    y_ = theta[0]+theta[1]*x
    return y_


# In[98]:


def gradient(X,Y,theta):
    m = X.shape[0]
    grad = np.zeros((2,))
    for i in range(m):
        x = X[i]
        y_ = hypothesis(x,theta)
        y  = Y[i]
        grad[0] += (y_-y)
        grad[1] += (y_-y)*x
    return grad/m


# In[123]:


def gradientDescent(X,Y,max_steps = 100,learning_rate = 0.1):
    theta = np.zeros((2,))
    error_list = []
    theta_list = []
    for i in range(max_steps):
        
        #Compute grad
        grad = gradient(X,Y,theta)
        e = error(X,Y,theta)
        
        # Update theta
        theta[0] = theta[0] - learning_rate*grad[0]
        theta[1] = theta[1] - learning_rate*grad[1]
        
        error_list.append(e)
        theta_list.append((theta[0],theta[1]))
        
    return theta,error_list,theta_list     


# In[124]:


def error(X,Y,theta):
    m = X.shape[0]
    total_error = 0.0
    for i in range(m):
        y_ = hypothesis(X[i],theta)
        total_error += (y_ - Y[i])**2
    return total_error/m


# In[128]:


theta,error_list,theta_list = gradientDescent(X,y)
theta_list


# In[129]:


# error_list
plt.title("Reduction in error over time")
plt.plot(error_list)


# #  Predictions and Best Line

# In[130]:


y_ = hypothesis(X,theta)
print(y_)


# In[131]:


# Training + Predictions
plt.scatter(X,y)
plt.plot(X,y_,color='orange',label = "Prediction")
plt.legend()
plt.show()


# In[132]:


# Load the test data
X_test = pd.read_csv('./Test Cases/Linear_X_Test.csv').values
y_test = hypothesis(X_test,theta)
y_test


# In[106]:


df = pd.DataFrame(data=y_test,columns=["y"])
df.to_csv('pred.csv',index = False)


# In[108]:


res = pd.read_csv("pred.csv")
res


# In[109]:


# from mpl_toolkits.mplot3d import Axes3D
# import matplotlib.pyplot as plt
# import numpy as np


# In[110]:


theta


# In[141]:


# Loss Actually
T0 = np.arange(-50,50,1)
T1 = np.arange(40,120,1)
T0,T1 = np.meshgrid(T0,T1)
J = np.zeros(T0.shape)
for i in range(J.shape[0]):
    for j in range(J.shape[1]):
        y_ = T1[i,j]*X+T0[i,j]
        J[i,j] = np.sum((y-y_)**2)/y.shape[0]
# print(J.shape)


# In[142]:


# Visualiaze the J (Loss)
fig = plt.figure(figsize = (10,10))
axes = fig.gca(projection='3d')
axes.plot_surface(T0,T1,J,cmap = 'rainbow')


# In[143]:


# plot the changes in values of theta


# In[144]:


theta_list = np.array(theta_list)


# In[145]:


# theta_list


# In[146]:


plt.plot(theta_list[:,0],label="Theta0")
plt.plot(theta_list[:,1],label="Theta1")
plt.legend()
plt.show()


# # Trajectory traces by Theta updates in loss functions
# 

# In[154]:


# Visualiaze the J (Loss)
fig = plt.figure(figsize = (10,24))
axes = fig.gca(projection='3d')
axes.plot_surface(T0,T1,J,cmap = 'rainbow')
axes.scatter(theta_list[:,0],theta_list[:,1],error_list,color='red')


# In[151]:


# Visualiaze the J (Loss)
fig = plt.figure(figsize = (10,24))
axes = fig.gca(projection='3d')
axes.contour(T0,T1,J,cmap = 'rainbow')
axes.scatter(theta_list[:,0],theta_list[:,1],error_list,color='red')


# In[158]:


plt.contour(T0,T1,J,cmap='rainbow')
plt.scatter(theta_list[:,0],theta_list[:,1])
plt.show()


# In[ ]:




