#!/usr/bin/env python
# coding: utf-8

# In[10]:


import warnings
import tweepy
import time
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
warnings.filterwarnings('ignore')


# In[11]:


API_Key = "2sQOCo2o9OOuySTgGtduO3DXD"
API_Key_Secret = "OX5RGmcBR1nFkYd7QM6hnIEGWeFQLudAHkhSGIPMDIBqAJWJ7Q"
Access_Token ="1471890391213305857-EyR0m2xkkRxe3PQUo3LR3QTHEcLKhe"
Access_Token_Secret = "U13XATUnd0Ebtn3X2paVqHHjQxKBArZq47tFFlMVTJYyJ"


# In[12]:


auth = tweepy.OAuthHandler(consumer_key = API_Key,consumer_secret=API_Key_Secret)
auth.set_access_token(Access_Token,Access_Token_Secret)


# In[13]:


api = tweepy.API(auth)


# In[14]:


india_woied = 23424848
trend_result = api.get_place_trends(india_woied)


# In[15]:


target_tags = []
for trend in trend_result[0]["trends"][:-1]:
    target_tags.append(trend["name"])


# In[16]:


pre_processed_tags = []
for tag in target_tags:
    if tag[0] == '#':
        pre_processed_tags.append(tag)
    else:
        pre_processed_tags.append("#"+str(tag))


# In[22]:


target_msg = "Lorem ipsum"


# In[17]:


# initiate a webdriver session
driver = webdriver.Chrome(ChromeDriverManager().install())


# In[18]:


wait = WebDriverWait(driver,20)


# In[19]:


# User credientials
USERNAME = 'Kushidhar_3'
PASSWORD = "982995kushi"


# In[20]:


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


# In[21]:


# posting tweet
def post_tweet(msg,tag):
        
    path1 ='/html/body/div[1]/div/div/div[2]/header/div/div/div/div[1]/div[3]/a/div'
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


# In[23]:


for tag in pre_processed_tags[:3]:
    if len(target_msg) >=250:
        break
    post_tweet(target_msg,tag)
    time.sleep(2)

