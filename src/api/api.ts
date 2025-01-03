import { TheCatAPI } from "@thatapicompany/thecatapi";
import axios from "axios";

const catApiKey = import.meta.env.VITE_CAT_API_KEY;

const theCatAPI = new TheCatAPI(catApiKey);

export const catApiAxiosClient = axios.create({
  baseURL: "https://api.thecatapi.com/",
  headers: {
    "x-api-key": catApiKey,
  },
});

export default theCatAPI;
