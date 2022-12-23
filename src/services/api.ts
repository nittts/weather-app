import axios from "axios";

const weatherAPI = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  params: {
    key: import.meta.env.VITE_SECRET_KEY,

    days: 14,
  },
});

async function fetchByLang(lang: string) {
  const res = await weatherAPI.get(`/forecast.json?q=auto:ip,lang=${lang}`);

  return res.data;
}

export { fetchByLang, weatherAPI };
