import axios from "axios";
const API_KEY = "f40ced1eee3f7fc4f7145de0a93a660b";
const URL = "https://api.openweathermap.org/data/2.5/weather";
export const fetchWeather = async (query) => {
  const { data } = await axios.get(
    URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    }
  );

  return data;
};
