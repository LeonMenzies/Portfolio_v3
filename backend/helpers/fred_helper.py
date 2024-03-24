import requests
import pandas as pd
import matplotlib.pyplot as plt
import time
from datetime import datetime, timedelta
from dateutil.relativedelta import relativedelta
import numpy as np
import os
from dotenv import load_dotenv


class FredHelper:
    def __init__(self):
        load_dotenv()


    def fetch_fred_data(self, series_id, endpoint, realtime_start=None, realtime_end=None):

      if realtime_end is None:
        today = datetime.today()
        realtime_end = today.strftime('%Y-%m-%d')

      if realtime_start is None:
        today = datetime.today()
        five_years_ago = today - relativedelta(years=5)    
        realtime_start = five_years_ago.strftime('%Y-%m-%d')


      params = {
        "series_id": series_id,
        "api_key": os.getenv('FRED_API_KEY'),
        "file_type": "json",
        # "realtime_start": realtime_start,
        # "realtime_end": realtime_end
      }
      print(params)
      response = requests.get(os.getenv('FRED_BASE_URL') + endpoint, params=params)
      return response.json()

    def get_gdp_tile_data(self):
        gdp = self.fetch_fred_data("GDPC1", 'series/observations')

        current_value = float(gdp['observations'][-1]['value'])
        current_value_formatted = "{:,.2f}".format(current_value)

        # Find the observation 3 months, 1 year, and 5 years ago from the current date
        current_date = datetime.strptime(gdp['observations'][-1]['date'], '%Y-%m-%d')
        three_months_ago = current_date - timedelta(days=90)
        one_year_ago = current_date - timedelta(days=365)
        five_years_ago = current_date - timedelta(days=365*5)
        percent_changes = []

        # Calculate the percent change for each data point
        for i in range(1, len(gdp['observations'])):
            current_value = float(gdp['observations'][i]['value'])
            previous_value = float(gdp['observations'][i-1]['value'])
            percent_change = (current_value - previous_value) / previous_value * 100
            percent_changes.append(percent_change)

        # Calculate the average percent change
        average_percent_change = sum(percent_changes) / len(percent_changes)
        average_percent_change_formatted = "{:.2f}".format(average_percent_change)

        # Calculate the percent change from each of these observations to the current value
        results = {}
        for observation in reversed(gdp['observations']):
            observation_date = datetime.strptime(observation['date'], '%Y-%m-%d')
            if observation_date <= three_months_ago:
                percent_change_3_months = (current_value - float(observation['value'])) / float(observation['value']) * 100
                results['month_3'] = round(percent_change_3_months, 2)
                break
        for observation in reversed(gdp['observations']):
            observation_date = datetime.strptime(observation['date'], '%Y-%m-%d')
            if observation_date <= one_year_ago:
                percent_change_1_year = (current_value - float(observation['value'])) / float(observation['value']) * 100
                results['year_1'] = round(percent_change_1_year, 2)
                break
        for observation in reversed(gdp['observations']):
            observation_date = datetime.strptime(observation['date'], '%Y-%m-%d')
            if observation_date <= five_years_ago:
                percent_change_5_years = (current_value - float(observation['value'])) / float(observation['value']) * 100
                results['year_5'] = round(percent_change_5_years, 2)
                break

        results['current'] = current_value_formatted
        results['average_percent'] = average_percent_change_formatted
        results['observations'] = gdp['observations']

        return results