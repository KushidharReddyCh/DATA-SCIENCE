#!/usr/bin/env python
# coding: utf-8

# # Surface Plots | Data Visualiazation
# Surface Plots are used to
# - Visualise loss Functions in Machine Learning & Deep Learning
# - Visualise State or State Value Functions in Reinforcement Learning
# 

# In[1]:


import matplotlib.pyplot as plt
import numpy as np


# In[25]:


# a = np.array([1,2,3])
# b = np.array([4,5,6,7])
a = np.arange(-1,1,0.02)
b = a
a,b = np.meshgrid(a,b)
a,b


# In[31]:


fig = plt.figure(figsize = (10,10))
axes = fig.gca(projection = '3d')
axes.plot_surface(a,b,(a**2+b**2),cmap = 'rainbow')
plt.show()


# In[35]:


fig = plt.figure(figsize = (10,10))
axes = fig.gca(projection = '3d')
axes.contour(a,b,a**2+b**2,cmap='rainbow')
plt.title("Contour plot")
plt.show()


# In[ ]:




