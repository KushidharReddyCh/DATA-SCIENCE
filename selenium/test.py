#!/usr/bin/env python
# coding: utf-8

# In[61]:


import warnings
import time
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
warnings.filterwarnings('ignore')


# In[62]:


# initiate a webdriver session
driver = webdriver.Chrome(ChromeDriverManager().install())


# In[63]:


wait = WebDriverWait(driver,20)


# In[64]:


# User credientials
USERNAME = 'Kushidhar_3'
PASSWORD = "982995kushi"


# In[65]:


driver.maximize_window()
driver.get('https://twitter.com/i/flow/login')

wait.until(EC.presence_of_element_located((By.TAG_NAME,'input')))
text_btn = wait.until(EC.element_to_be_clickable((By.TAG_NAME,'input')))
text_btn.click()
u_name = wait.until(EC.element_to_be_clickable((By.TAG_NAME,'input')))
u_name.send_keys(USERNAME)
u_name.send_keys('\n')

password = wait.until(EC.element_to_be_clickable((By.NAME,'password')))
password.clear()
password.send_keys(PASSWORD)
password.send_keys('\n')


# In[69]:


# posting tweet
def post_tweet(msg,tag):
    
    path1 ='/html/body/div[1]/div/div/div[2]/header/div/div/div/div[1]/div[3]/a/div'
    wait.until(EC.presence_of_element_located((By.XPATH,path1)))
    tweet = wait.until(EC.element_to_be_clickable((By.XPATH,path1)))
    tweet.click()
    
    path2 = '/html/body/div[1]/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div[3]/div/div[1]/div/div/div/div/div[2]/div[1]/div/div/div/div/div/div/div/div/div/label/div[1]/div/div/div/div/div[2]/div/div/div/div'
    message = wait.until(EC.element_to_be_clickable((By.XPATH,path2)))
    message.send_keys(msg)
    message.send_keys('\n')
    message.send_keys(str(tag)+" ")
    
    path3 = '/html/body/div[1]/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div[3]/div/div[1]/div/div/div/div/div[2]/div[3]/div/div/div[2]/div[4]/div/span/span'
    submit = wait.until(EC.element_to_be_clickable((By.XPATH,path3)))
    submit.click()


# In[66]:


msg = "Lorem Ipsum is simply dummy texnknown printer took a galley of type andthe leap into electronic typesetting, remaining essentially unchanged. "
tags = ["#abc","#def","#hij","#klm","#npo"]


# In[73]:


for tag in tags:
    if len(msg) >=250:
        break
    post_tweet(msg,tag)
    time.sleep(1)


# In[ ]:




