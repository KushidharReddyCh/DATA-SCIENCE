#!/usr/bin/env python
# coding: utf-8

# In[52]:


import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


# In[53]:


# loading the data
X = pd.read_csv("Training Data/Logistic_X_Train.csv").values
y = pd.read_csv("Training Data/Logistic_Y_Train.csv").values


# In[54]:


plt.figure(figsize=(10,10))
plt.style.use("seaborn")
plt.subplot(3,1,1)
plt.scatter(X[:,0],X[:,1],c=y,cmap = plt.cm.Accent)

plt.subplot(3,1,2)
plt.scatter(X[:,1],X[:,2],c=y,cmap = plt.cm.Accent)

plt.subplot(3,1,3)
plt.scatter(X[:,0],X[:,2],c=y,cmap = plt.cm.Accent)


# In[67]:


# importing mplot3d toolkits, numpy and matplotlib
from mpl_toolkits import mplot3d
import numpy as np
import matplotlib.pyplot as plt


fig = plt.figure()
plt.figure(figsize=(10,10))
# syntax for 3-D projection
ax = plt.axes(projection ='3d')
# c = y/255

# plotting
ax.scatter3D(X[:,0], X[:,1], X[:,2],c=y,cmap = plt.cm.viridis)
# ax.set_title()
plt.show()


# In[ ]:





# In[68]:


# def sigmoid(x):
#     return 1.0/(1.0+np.exp(-x))


# def hypothesis(X,theta):
#     """
#     X = entire array ( m,n+1)
#     theta = np.array(n+1,1)
#     """
#     return sigmoid(np.dot(X,theta))
    

# def error(X,y,theta):
#     """
#     params:
#     X - (m,n+1)
#     y - (m,1)
#     theta - (n+1,1)
#     return:
#         scale_value = loss
#     """
#     hi = hypothesis(X,theta)
#     e  = -1*np.mean((y*np.log(hi)+((1-y)*np.log(1-hi))))
#     return e


# In[69]:


# def gradient(X,y,theta):
#     """
#     params:
#     X = (m,n+1)
#     y = (m,1)
#     theta = (n+1,1)
#     return :
#         gradient_vector - (n+1,1)
#     """
#     hi = hypothesis(X,theta)
#     grad = -np.dot(X.T,(y-hi))
#     m = X.shape[0]
#     return grad/m

# def gradient_descent(X,y,lr=0.1,max_itr = 10000):
#     n = X.shape[1]
#     theta = np.zeros((n,1))
    
#     error_list = []
#     for i in range(max_itr):
#         err = error(X,y,theta)
#         error_list.append(err)

#         grad = gradient(X,y,theta)
        
#         #update 
#         theta = theta-lr*grad
#         if len(error_list)>=2 and (error_list[-2]-error_list[-1]) <0.00001:
#             print("loop breaked at",i)
#             break
#     return (theta,error_list)


# In[70]:


# ones = np.ones((X_train.shape[0],1))
# X_New_train = np.hstack((ones,X_train))
# y_train = y_train.reshape((-1,1))


# In[71]:


# theta,error_list = gradient_descent(X_New_train,y_train)


# # Visualization

# In[73]:


# plt.plot(error_list)


# In[74]:


# plt.scatter(X_train[:,0],X_train[:,1],c = y_train.reshape((-1,)),cmap= plt.cm.Accent)

# plt.show()


# In[75]:


# x1 = np.arange(-3,4)
# x2 = -(theta[0]+theta[1]*x1)/theta[2]
# plt.plot(x1,x2)
# plt.scatter(X_train[:,0],X_train[:,1],c = y_train.reshape((-1,)),cmap= plt.cm.Accent)
# plt.show()


# #  Predictions

# In[76]:


# def predict(X,theta):
#     h = hypothesis(X,theta)
#     output = np.zeros(h.shape)
#     output[h>=0.5] = 1 
#     output = output.astype('int')
#     return output


# In[77]:


# X_train_preds = predict(X_New_train,theta)
# X_test_preds = predict(X_New_Test,theta)


# In[78]:


# def accuracy(actual,preds):
#     actual = actual.astype('int')
#     actual = actual.reshape((-1,1))
#     acc = (np.sum(actual == preds))/actual.shape[0]
#     return acc*100


# In[79]:


# train_acc = accuracy(y_train,X_train_preds)
# test_acc = accuracy(y_test,X_test_preds)
# train_acc,test_acc


# # By sk-learn

# In[80]:


# from sklearn.linear_model import LogisticRegression
# model = LogisticRegression()
# model.fit(X_train,y_train)
# train_acc = model.score(X_train,y_train)
# test_acc  = model.score(X_test,y_test)
# y_pred = model.predict(X_test)
# print(train_acc,test_acc)


# In[ ]:





# In[ ]:




