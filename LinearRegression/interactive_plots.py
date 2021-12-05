#!/usr/bin/env python
# coding: utf-8

# In[6]:


from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


# In[7]:


# theta


# In[14]:


X = pd.read_csv("./Training Data/Linear_X_Train.csv").values
Y = pd.read_csv("./Training Data/Linear_Y_Train.csv").values


# In[15]:


theta = np.load("ThetaList.npy")
# 100,2
T0 = theta[:,0]
T1 = theta[:,1]


# In[16]:


plt.ion()
for i in range(0,50,1):
    y_ = T1[i]*X + T0
    plt.scatter(X,Y)
    plt.plot(X,y_,'red')
    plt.draw()
    plt.pause(0.01)
    plt.clf()


# In[ ]:




