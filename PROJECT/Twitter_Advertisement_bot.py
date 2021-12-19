#!/usr/bin/env python

# coding: utf-8

# # plan of action
# 
# - make cities and geo codes avaliable 
# - create edit distance
# 
# - take user input [uname,password,city,number_of_tweets]
# - validate it and try other alternatives 
# 
# - take the target place and get the geo code
# - use tweepy and get the trending tweets
# - use selenium to post the tweets


# all the libraries
import pandas as pd
import json
import getpass
import sys
import tweepy
import webbrowser
import time
import warnings
import time
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
warnings.filterwarnings('ignore')


##################### Part1 ##################### 
 

# - load the cities
# - parse it 
# - store them in dict
# - implement the edit_distance function (function to search the closest city if the user made a gramatical mistake)

cities = open('woeid.txt', 'r').read()
json_data = json.loads(cities)

cities_dict = {}
for i in range(1,len(json_data)):
    key = json_data[i]['name'].lower()
    value = json_data[i]['woeid']
    cities_dict[key] = value

def editDistanceDP(s1,s2,m,n,dp):
    if m==0:
        return n
    if n==0:
        return m
    if dp[m][n] != -1:
        return dp[m][n]
    else:
        if s1[m-1] == s2[n-1]:
            dp[m][n] = editDistanceDP(s1,s2,m-1,n-1,dp)
        else:
            dp[m][n] =1+min(
                editDistanceDP(s1,s2,m-1,n,dp),
                editDistanceDP(s1,s2,m-1,n-1,dp),
                editDistanceDP(s1,s2,m,n-1,dp))
    return dp[m][n]

def find_closest(s1):
    curr = float('inf')
    res = ""
    for key in cities_dict:
        s2 = key
        dp = [[-1 for _ in range(len(s2)+1)] for _ in range(len(s1)+1)]
        dist = editDistanceDP(s1,s2,len(s1),len(s2),dp)
        if dist < curr:
            res = s2
            curr = dist
    return res

##################### Part2 ##################### 

def user_credientials():
    message = input("Please Enter your target add content")
    user_id = input("## Please Enter your Twitter ID: ")
    password = getpass.getpass('## Please Enter your Password: ')
    
    return message,user_id,password

def location_and_tweets():
    
    target_location = input('## Please Enter your target location: ')
    limit = (int)(input("Please enter the number of tweets: "))
    
    # validating the target_location
    target_location = target_location.lower()
    new_location = find_closest(target_location)
    
    print("The closest place (meaured by Levenshtein distance) we found in the data base is",new_location.upper())
    print("Enter \n1: To continue \n2: To enter other city \n3: Quit")
    num = (int)(input())
    
    return new_location,num,limit


message,user_name_,password_ =  user_credientials()

target_location,limit = "",3

num = 2
while num ==2:
    target_location,num,limit = location_and_tweets()
    if num == 1:
        break
    elif num ==3:
        sys.exit()

##################### Part3 ##################### 

api_key = "XXXX"
api_key_secret = "XXXX"
access_token ="XXXX"
access_token_tecret = "XXXX"

auth = tweepy.OAuthHandler(consumer_key = api_key,consumer_secret=api_key_secret)
auth.set_access_token(access_token,access_token_tecret)

api = tweepy.API(auth)

target_woied = cities_dict[target_location]
trend_result = api.get_place_trends(target_woied)

target_tags = []
for trend in trend_result[0]["trends"][:-1]:
    target_tags.append(trend["name"])

# process those target_tags
pre_processed_tags = []
for tag in target_tags:
    if tag[0] == '#':
        pre_processed_tags.append(tag)
    else:
        pre_processed_tags.append("#"+str(tag))

##################### Part4 #####################

# initiate a webdriver session
driver = webdriver.Chrome(ChromeDriverManager().install())
wait = WebDriverWait(driver,20)

#  signing in 
USERNAME = user_name_
PASSWORD = password_

try:
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
except:
    print("Wrong user details")
    sys.exit()


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



def tweeter(t,idx):
    for i in range(idx,limit):
        tag = pre_processed_tags[i]
        if len(target_msg) >=250:
            break
        post_tweet(target_msg,tag)
        time.sleep(t)    
        global temp
        print("# Number of tweets posted",temp+1)
        temp = i+1



limit = min(limit,len(pre_processed_tags))
target_msg = message
idx,temp = 0,0
t = 0
while t != 100 and idx < limit:
    try:
        tweeter(t,idx)
        print("Misson Accomplished 🥳🥳")
        break
    except:
        print("Seems internet connection is slow,please be patient 😃")
        idx = temp
        t = t+1
        t = min(t,4)






