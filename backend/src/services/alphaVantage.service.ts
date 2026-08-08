import axios from 'axios';

// Using the provided API key
const API_KEY = process.env.ALPHA_VANTAGE_API_KEY || 'MMD4OUF2CUY62V0D';
const BASE_URL = 'https://www.alphavantage.co/query';

export const getGlobalQuote = async (symbol: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'GLOBAL_QUOTE',
        symbol,
        apikey: API_KEY,
      },
    });
    return response.data['Global Quote'];
  } catch (error) {
    console.error('Error fetching global quote:', error);
    throw new Error('Failed to fetch stock data');
  }
};

export const getCompanyOverview = async (symbol: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'OVERVIEW',
        symbol,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching company overview:', error);
    throw new Error('Failed to fetch company overview');
  }
};

export const getIntradayData = async (symbol: string, interval: '1min' | '5min' | '15min' | '30min' | '60min' = '5min') => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol,
        interval,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching intraday data:', error);
    throw new Error('Failed to fetch intraday data');
  }
};
