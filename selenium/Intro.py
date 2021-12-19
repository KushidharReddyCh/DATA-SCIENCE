from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
# initiate a webdriver session
driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get('https://kushidharreddych.github.io/tindog/')