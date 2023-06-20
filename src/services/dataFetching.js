import axios from 'axios';

axios.defaults.baseURL = 'https://api.polygon.io';

const API_KEY = 'UCdhsV2m_RTmkwybpkta6ZvaKFF7ZTpP';

// Stock info in header search
export async function showStocks(name) {
  try {
    const response = await axios.get(
      `/v2/aggs/ticker/${name}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Holidays
export async function marketHolidays() {
  try {
    const response = await axios.get(
      `/v1/marketstatus/upcoming?apiKey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// All Tickers

export async function allStocks() {
  try {
    const response = await axios.get(
      `/v3/reference/tickers?active=true&apiKey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function stockData(ticker) {
  try {
    const response = await axios.get(
      `/v3/reference/tickers/${ticker}?apiKey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function newsData() {
  try {
    const response = await axios.get(`/v2/reference/news?apiKey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(console.error());
  }
}
