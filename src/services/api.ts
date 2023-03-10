import axios from "axios";

const weatherAPI = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
  params: {
    key: import.meta.env.VITE_SECRET_KEY,
    days: 14,
  },
});

async function fetchByLang(lang: string, lat?: number, long?: number) {
  const res = await weatherAPI.get(`/forecast.json?q=auto:ip,lang=${lang}`);

  console.log(res);
  return res.data;
}

export { fetchByLang, weatherAPI };
