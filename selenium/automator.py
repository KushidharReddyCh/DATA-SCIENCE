#!/usr/bin/env python
# coding: utf-8

# In[327]:


import warnings
import time
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
warnings.filterwarnings('ignore')


# In[328]:


# initiate a webdriver session
driver = webdriver.Chrome(ChromeDriverManager().install())


# In[329]:


# User credientials
USERNAME = 'Kushidhar_3'
PASSWORD = "982995kushi"


# In[330]:


# signing in 
driver.maximize_window()
driver.get('https://twitter.com/i/flow/login')
time.sleep(10)

text_btn = driver.find_element_by_tag_name('input')
text_btn.click()
u_name = driver.find_element_by_tag_name('input')
u_name.send_keys(USERNAME)


time.sleep(2)
next_btn = driver.find_element_by_xpath('/html/body/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[6]')
next_btn.click()

time.sleep(3)
password = driver.find_element_by_name('password')
password.clear()
password.send_keys(PASSWORD)

next_btn = driver.find_element_by_xpath('/html/body/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div')
next_btn.click()


# In[331]:


# posting tweet
def post_tweet(msg):
    tweet = driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/header/div/div/div/div[1]/div[3]/a/div')
    tweet.click()

    message = driver.find_element_by_xpath('/html/body/div[1]/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div[3]/div/div[1]/div/div/div/div/div[2]/div[1]/div/div/div/div/div/div/div/div/div/label/div[1]/div/div/div/div/div[2]/div/div/div/div')
    message.send_keys(msg)
    submit = driver.find_element_by_xpath('/html/body/div[1]/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div[3]/div/div[1]/div/div/div/div/div[2]/div[3]/div/div/div[2]/div[4]/div/span/span')
    submit.click()


# In[332]:


target_msg = "Lorem Ipsum is simply dummy texnknown printer took a galley of type andthe leap into electronic typesetting, remaining essentially unchanged. "
target_tags = ["#abc","#def","#hij","#klm","#npo"]


# In[333]:


time.sleep(10)
for msg in target_tags:
    tweet = str(target_msg)+"                                                            "+str(msg+" .")
    if len(tweet) >=280:
        break
    post_tweet(tweet)
    time.sleep(2)


# In[ ]:




