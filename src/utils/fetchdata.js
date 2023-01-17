import axios from "axios";

const Base_url = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: Base_url,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "0a87418054msh4217da53eddbc3ep1294a0jsn0337905861d0",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${Base_url}/${url}`, options);

  return data;
};
