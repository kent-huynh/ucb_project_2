
# coding: utf-8

# In[76]:


import pandas as pd
import matplotlib.pyplot as plt


# In[5]:


data = pd.read_csv("City_MedianListingPrice_AllHomes.csv", encoding = "ISO-8859-1")


# In[13]:


#Summary of data
data.head()


# In[75]:


#drop NaN Values
data_dropNaN = data.dropna()
index_reset = data_dropNaN.reset_index()
clean_data = index_reset

#Checking if indices are in numerical order
clean_data["2010-01"]


# In[58]:


house_prices_DF = pd.DataFrame(clean_data)
house_prices_DF


# In[71]:


#Filter by state (dataframe)
ByState = house_prices_DF.groupby(['State']).mean().drop(columns=["index","SizeRank"]).round(0)
ByState.head()


# In[74]:


#Filter by region (dataframe)
ByRegion= house_prices_DF.groupby(['RegionName']).mean().drop(columns=["index","SizeRank"]).round(0)
ByRegion.head()

